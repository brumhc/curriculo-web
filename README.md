# Lucas Brum · Currículo web

Currículo profissional em Angular, publicado pelo Netlify a partir do repositório existente no GitHub. Conteúdo atualizado conforme o PDF enviado em outubro de 2026.

## Prévia local

Com Node.js 22.12 ou superior (linha 22), ou Node.js 24.0 ou superior:

```sh
npm ci
npm start
```

Abra http://localhost:4200/. Não abra src/index.html diretamente com Live Server: o Angular precisa compilar e iniciar os componentes.

## Verificação

```sh
npm run build
npm test -- --watch=false
```

## Conteúdo

- Dados e experiências: src/app/app.ts.
- Layout: src/app/app.html e src/app/app.css.
- Estilos globais: src/styles.css.
- Foto: public/perfil.png.
- Currículo para download: public/Lucas-Brum-CV.pdf.

## Netlify

netlify.toml define Node 22, comando npm run build e publicação de dist/myapp/browser. O redirecionamento para index.html suporta rotas da aplicação. Se o site estiver conectado à branch do GitHub, um push nessa branch inicia a publicação automática. Confira se não há configurações conflitantes no painel do Netlify.
