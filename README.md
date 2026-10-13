# Arieira Odontologia Especializada | landing page (demonstração)

Página única, sem build: `index.html` com CSS e JavaScript dentro do arquivo, mais a pasta `img/`.
Para publicar, envie `index.html` e `img/` para qualquer hospedagem estática.

## Trocar de lead
Tudo o que muda de uma clínica para outra fica no bloco **CONFIGURAÇÃO DO LEAD**, no topo do `<script>` do `index.html`:

- `CIDADE`, `HORARIO` e `CRO`: enquanto estiverem vazias, a cidade e o horário somem da página e o rodapé mostra `CRO-RJ 00000`.
- `CONFIG`: nome, logo, responsável, endereço, telefones, WhatsApp, Instagram, nota do Google, cores, tratamentos e casos de antes e depois.

As imagens ficam em `img/`: `logo.png`, `lentes.jpg`, `clareamento.jpg`, `protese.jpg` e as camadas 3D `3d-*.webp`.

## Antes de publicar de verdade
- A página está com `noindex, nofollow` (modo demonstração). Ao aprovar, apague a linha `<meta name="robots">` no `<head>`.
- Preencha `CIDADE`, `HORARIO` e `CRO`.
- Confirme que a clínica tem autorização por escrito dos pacientes das fotos de antes e depois (exigência do CFO).

## Camadas 3D da prótese
As peças (implante, pilar, coroa, osso e dentes vizinhos) foram modeladas e renderizadas com three.js em `ferramentas/protese-3d/`. A página não carrega nenhuma biblioteca: usa só as imagens prontas.
Para gerar de novo: `npm install` dentro da pasta e `node run.mjs "$(cat final-params.json)" saida`. Depois, recorte e converta para WebP.
