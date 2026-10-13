# Arieira Odontologia Especializada | landing page (demonstração)

Página única, sem build: `index.html` com CSS e JavaScript dentro do arquivo, mais a pasta `img/`.
Para publicar, envie `index.html`, `config.js`, `img/` e `painel/` para qualquer hospedagem estática.

## Painel (CRM) da demonstração
Abra `/painel/` no mesmo endereço do site. Senha de demonstração: `1234` (em `config.js`).

- **Início**: consultas de hoje, recebido no mês, valores a receber, contatos novos do site e gráfico por mês.
- **Agenda**: dia a dia, com os horários livres; toque em um horário livre para marcar.
- **Pacientes**: busca, ficha, histórico e WhatsApp. Sem prontuário.
- **Contatos do site**: pedidos feitos pelo formulário "Agendar avaliação" do site.
- **Financeiro**: recebido, a receber, ticket médio, por tratamento e por forma de pagamento, e "Baixar planilha".
- **Assistente**: responde a mais de 20 perguntas prontas sobre os dados (sem IA externa).
- Botão **Novo**: nova consulta ou novo paciente. **Restaurar dados de exemplo** fica no menu.

Na demonstração os dados são fictícios e ficam só no navegador. O contato enviado pelo site aparece no painel do mesmo aparelho.
Para usar de verdade com Google Planilhas, siga as instruções de `painel/apps-script.gs` e cole a URL em `CONFIG.crm.planilhaUrl`.

## Trocar de lead
Tudo o que muda de uma clínica para outra fica em **`config.js`** (usado pelo site e pelo painel):

- `CIDADE`, `HORARIO` e `CRO`: enquanto estiverem vazias, a cidade e o horário somem da página e o rodapé mostra `CRO-RJ 00000`.
- `CONFIG`: nome, logo, responsável, endereço, telefones, WhatsApp, Instagram, nota do Google, cores, tratamentos, avaliações, casos de antes e depois e, em `crm`, os procedimentos, valores fictícios e horários do painel.

As imagens ficam em `img/`: `logo.png`, `lentes.jpg`, `clareamento.jpg`, `protese.jpg` e as camadas 3D `3d-*.webp`.

## Antes de publicar de verdade
- A página está com `noindex, nofollow` (modo demonstração). Ao aprovar, apague a linha `<meta name="robots">` no `<head>`.
- Preencha `CIDADE`, `HORARIO` e `CRO`.
- Confirme que a clínica tem autorização por escrito dos pacientes das fotos de antes e depois (exigência do CFO).

## Camadas 3D da prótese
As peças (implante, pilar, coroa, osso e dentes vizinhos) foram modeladas e renderizadas com three.js em `ferramentas/protese-3d/`. A página não carrega nenhuma biblioteca: usa só as imagens prontas.
Para gerar de novo: `npm install` dentro da pasta e `node run.mjs "$(cat final-params.json)" saida`. Depois, recorte e converta para WebP.
