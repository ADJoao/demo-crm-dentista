/* =====================================================================
   CONFIGURAÇÃO DO LEAD (usada pelo site e pelo painel)
   Para trocar de clínica, edite só este arquivo e as imagens da pasta img/.
   ===================================================================== */

// Deixe vazio enquanto não tiver o dado. Vazio: cidade e horário somem da
// página, e o rodapé mostra "CRO-RJ 00000".
const CIDADE = '';   // exemplo de formato: 'Nome da cidade, UF'
const HORARIO = '';  // exemplo de formato: 'Segunda a sexta, das 8h às 18h'
const CRO = '';      // exemplo de formato: 'CRO-RJ 12345'

const CONFIG = {
  clinica: {
    nome: 'Arieira Odontologia Especializada',
    nomeCurto: 'Arieira',              // usado no nome grande do rodapé
    logo: 'img/logo.png',
  },
  responsavel: { nome: 'Dra. Paula Arieira', curto: 'Dra. Paula' },
  endereco: 'Av. Joaquim Nogueira, 926',
  telefone: { texto: '(22) 2040-9551', link: 'tel:+552220409551', internacional: '+55-22-2040-9551' },
  whatsapp: {
    texto: '(22) 99247-4474',
    numero: '5522992474474',
    mensagem: 'Olá! Vim pelo site e gostaria de agendar uma avaliação.',
    internacional: '+55-22-99247-4474',
  },
  instagram: { usuario: '@arieira_odontologia_', link: 'https://instagram.com/arieira_odontologia_' },
  // link vazio: abre a busca da clínica no Google Maps, onde aparecem as avaliações
  google: { nota: '5,0', total: 24, link: '' },
  cores: {
    creme: '#FEFDF9',
    azul: '#519CB1',
    azulProfundo: '#2E6678',
    azulProfundoEscuro: '#24525F',
    tinta: '#1E3B45',
    tintaSuave: '#4A6670',
    nevoa: '#E9F2F5',
    ouro: '#B8994F',
    ouroDe: '#A98A47',
    ouroAte: '#D4B670',
    linha: 'rgba(81, 156, 177, 0.25)',
  },
  tratamentos: [
    { nome: 'Canal', texto: 'Trata a parte interna do dente, a polpa, quando ela está inflamada ou infeccionada.' },
    { nome: 'Clínico geral', texto: 'Consultas de rotina, limpeza e restaurações, com a avaliação que orienta os próximos passos.' },
    { nome: 'Periodontia', texto: 'Cuida da gengiva e do osso que sustentam os dentes, como em casos de sangramento ou retração.' },
    { nome: 'ATM', texto: 'Avaliação de dores, estalos e travamentos na articulação da mandíbula.' },
    { nome: 'Implante', texto: 'Um pino de titânio colocado no osso para substituir a raiz de um dente perdido.' },
    { nome: 'Ortodontia', texto: 'Aparelhos para alinhar os dentes e ajustar a mordida, em crianças e adultos.' },
    { nome: 'Odontopediatria', texto: 'Cuidado com os dentes de bebês, crianças e adolescentes, em cada fase do crescimento.' },
    { nome: 'Cirurgia de siso', texto: 'Avaliação e remoção dos dentes do siso, quando indicada.' },
    { nome: 'Próteses fixas e removíveis', texto: 'Coroas, pontes e dentaduras para repor dentes perdidos ou muito desgastados.' },
  ],
  // Avaliações reais copiadas do Google (texto e primeiro nome). Vazio: a faixa de avaliações não aparece.
  // Formato: { nome: 'Maria S.', texto: '...' }
  avaliacoes: [],
  // Cada foto já traz "Antes" em cima e "Depois" embaixo. Use as fotos inteiras.
  resultados: [
    { titulo: 'Lentes', legenda: 'Lentes de contato dental para ajustar a cor e o formato dos dentes.', imagem: 'img/lentes.jpg', alt: 'Antes e depois de lentes de contato dental: sorriso antes, em cima, e depois, embaixo.' },
    { titulo: 'Clareamento dental', legenda: 'Clareamento feito com acompanhamento profissional.', imagem: 'img/clareamento.jpg', alt: 'Antes e depois de clareamento dental: sorriso antes, em cima, e depois, embaixo.' },
    { titulo: 'Prótese', legenda: 'Prótese para repor os dentes que estavam ausentes.', imagem: 'img/protese.jpg', alt: 'Antes e depois de prótese dentária: sorriso antes, em cima, e depois, embaixo.' },
  ],

  /* ------------------------------------------------------------------
     PAINEL (CRM) da demonstração. Valores e pacientes de exemplo são
     fictícios e ficam só no navegador.
     ------------------------------------------------------------------ */
  crm: {
    chave: 'arieira-demo',          // nome usado para guardar os dados no navegador
    senhaDemo: '1234',               // senha só de demonstração, não protege nada
    // Google Planilhas (opcional, para depois que o cliente fechar):
    // cole aqui a URL do app da web do Apps Script (veja painel/apps-script.gs).
    // Vazio: tudo fica só neste navegador.
    planilhaUrl: '',
    profissional: 'Dra. Paula',
    // Procedimentos da agenda. Valores FICTÍCIOS, só para a demonstração do financeiro.
    procedimentos: [
      { nome: 'Avaliação', valor: 150, duracao: 30 },
      { nome: 'Limpeza', valor: 220, duracao: 60 },
      { nome: 'Restauração', valor: 280, duracao: 60 },
      { nome: 'Canal', valor: 900, duracao: 90 },
      { nome: 'Periodontia', valor: 400, duracao: 60 },
      { nome: 'ATM', valor: 300, duracao: 60 },
      { nome: 'Implante', valor: 3500, duracao: 120 },
      { nome: 'Ortodontia (manutenção)', valor: 250, duracao: 30 },
      { nome: 'Odontopediatria', valor: 200, duracao: 30 },
      { nome: 'Cirurgia de siso', valor: 650, duracao: 60 },
      { nome: 'Prótese', valor: 2400, duracao: 90 },
      { nome: 'Clareamento', valor: 1200, duracao: 60 },
      { nome: 'Lentes de contato dental', valor: 1800, duracao: 120 },
    ],
    // Horário de atendimento usado para mostrar os horários livres na agenda
    agenda: { inicio: '08:00', fim: '18:00', intervalo: 30, almoco: ['12:00', '13:00'], dias: [1, 2, 3, 4, 5] },
    formasPagamento: ['Pix', 'Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Convênio'],
    origens: ['Site', 'Instagram', 'WhatsApp', 'Indicação', 'Google', 'Passou na frente'],
  },
};
