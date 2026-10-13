/**
 * Integração do painel com o Google Planilhas (para usar depois que o cliente fechar).
 *
 * Como ligar:
 * 1. Crie uma planilha no Google Planilhas.
 * 2. Menu Extensões > Apps Script. Apague o código de exemplo e cole este arquivo.
 * 3. Clique em Implantar > Nova implantação > tipo "App da Web".
 *    Executar como: você. Quem pode acessar: qualquer pessoa.
 * 4. Copie a URL gerada e cole em CONFIG.crm.planilhaUrl, no arquivo config.js.
 *
 * O painel passa a ler os dados da planilha ao abrir e grava cada alteração
 * nas abas "pacientes", "consultas" e "contatos" (criadas automaticamente).
 *
 * Atenção: com "qualquer pessoa", quem tiver a URL consegue ler os dados.
 * Para dados reais de pacientes, use um token (abaixo) e, em seguida, um
 * sistema com login de verdade.
 */

const TOKEN = ''; // opcional: mesmo valor em CONFIG.crm.planilhaToken, se quiser exigir

const TABELAS = {
  pacientes: ['id', 'nome', 'telefone', 'nascimento', 'responsavel', 'origem', 'obs', 'criadoEm'],
  consultas: ['id', 'pacienteId', 'data', 'hora', 'procedimento', 'duracao', 'valor', 'status', 'pagamento', 'forma', 'obs'],
  contatos: ['id', 'nome', 'telefone', 'interesse', 'periodo', 'criadoEm', 'etapa', 'origem'],
};

function aba_(nome) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let aba = ss.getSheetByName(nome);
  if (!aba) {
    aba = ss.insertSheet(nome);
    aba.appendRow(TABELAS[nome]);
    aba.setFrozenRows(1);
  }
  return aba;
}

function ler_(nome) {
  const valores = aba_(nome).getDataRange().getDisplayValues();
  const cab = valores.shift();
  return valores.filter((l) => l[0]).map((l) => {
    const o = {};
    cab.forEach((c, i) => { o[c] = (c === 'valor' || c === 'duracao') ? Number(l[i]) || 0 : l[i]; });
    return o;
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  if (TOKEN && (e.parameter.token || '') !== TOKEN) return json_({ erro: 'não autorizado' });
  return json_({ pacientes: ler_('pacientes'), consultas: ler_('consultas'), contatos: ler_('contatos') });
}

function doPost(e) {
  const corpo = JSON.parse(e.postData.contents);
  if (TOKEN && corpo.token !== TOKEN) return json_({ erro: 'não autorizado' });
  const nome = corpo.tabela;
  if (!TABELAS[nome]) return json_({ erro: 'tabela inválida' });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const aba = aba_(nome);
    const ids = aba.getRange(1, 1, Math.max(aba.getLastRow(), 1), 1).getValues().map((l) => String(l[0]));
    const linha = ids.indexOf(String(corpo.registro.id)) + 1; // 0 se não existir
    if (corpo.acao === 'excluir') {
      if (linha > 1) aba.deleteRow(linha);
    } else {
      const valores = [TABELAS[nome].map((c) => corpo.registro[c] == null ? '' : corpo.registro[c])];
      if (linha > 1) aba.getRange(linha, 1, 1, valores[0].length).setValues(valores);
      else aba.appendRow(valores[0]);
    }
    return json_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}
