# Introdução

O propósito deste repositório é servir para o treinamento do framework SvelteKit.

Foi utilizada a aula [SvelteKit: projeto completo gratuito](https://www.youtube.com/watch?v=1ikFumI2pXc), disponibilizado no canal Artneo no YouTube.


--- 


Readme from GitHub repositorie creation

# Quick setup — if you’ve done this kind of thing before

HTTPS: https://github.com/josuecintra/svelte-academia.git
SSH: git@github.com:josuecintra/svelte-academia.git

Get started by [creating a new file](https://github.com/josuecintra/svelte-academia/new/main) or [uploading an existing file](https://github.com/josuecintra/svelte-academia/upload). We recommend every repository include a [README](https://github.com/josuecintra/svelte-academia/new/main?readme=1), [LICENSE](https://github.com/josuecintra/svelte-academia/new/main?filename=LICENSE.md), and [.gitignore](https://github.com/josuecintra/svelte-academia/new/main?filename=.gitignore).


## …or create a new repository on the command line

echo "# svelte-academia" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin [https://github.com/josuecintra/svelte-academia.git | git@github.com:josuecintra/svelte-academia.git]
git push -u origin main

## …or push an existing repository from the command line

git remote add origin [https://github.com/josuecintra/svelte-academia.git | git@github.com:josuecintra/svelte-academia.git]
git branch -M main
git push -u origin main


---


Readme from svelt instalation

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.


# Descrição da aula 

Aprenda a criar um app do zero utilizando o framework SvelteKit com HTML e CSS puros, hospedado na Vercel. 

Links importantes:
• Demonstração: [https://academialocal.vercel.app](https://academialocal.vercel.app)
• Protótipo do Figma: [https://blog.artneo.com.br/academialocal](https://blog.artneo.com.br/academialocal)
• SvelteKit: [https://kit.svelte.dev](https://kit.svelte.dev)
• Hospedagem Vercel: [https://vercel.com](https://vercel.com)
• Visual Studio Code: [https://code.visualstudio.com](https://code.visualstudio.com)
• Josh Comeau's CSS reset: [https://www.joshwcomeau.com/css/custom-css-reset/](https://www.joshwcomeau.com/css/custom-css-reset/)
• Instalar fontes localmente: [https://fontsource.org](https://fontsource.org)
• GitHub: [https://github.com](https://github.com)
• Assets: [https://github.com/artneo-io/academialocal-assets](https://github.com/artneo-io/academialocal-assets)
• Emoji como imagem: [https://emoji.aranja.com](https://emoji.aranja.com)
• Estrutura API WhatsApp: [https://api.whatsapp.com/send?phone=](https://api.whatsapp.com/send?phone=)
• AutoAnimate: [https://auto-animate.formkit.com](https://auto-animate.formkit.com)
• SvelteKit Docs: [https://kit.svelte.dev/docs/introduction](https://kit.svelte.dev/docs/introduction)
• PageSpeed Insights: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
• Convert Images to AVIF Free Online AVIF Converter 100% Client-Side & No Uploads: [https://www.avify.dev/](https://www.avify.dev/)
• JSON-LD: [https://jsonld.com/web-page](https://jsonld.com/web-page)
• Open Graph meta tags: [https://www.opengraph.xyz](https://www.opengraph.xyz)
• GitHub projeto final: [https://github.com/artneo7/academialocal](https://github.com/artneo7/academialocal)

Observação: Na parte de otimização, ficou faltando alterar as imagens JPG para AVIF no arquivo routes/modalidades/[slug]/+page.js.

Observação 2: No componente IntroSingle, adicione img { width: 100% } para que a imagem preencha até o final da página.

Caso tenha gostado do conteúdo ou aprendido algo novo, agradeço imensamente se puder curtir ou comentar o que achou do vídeo. Grande abraço e até a próxima! 👨🏻‍💻
#svelte #sveltekit #curso 

[0:00:00 Demonstração](https://www.youtube.com/watch?v=1ikFumI2pXc)
[0:01:12 Introdução](https://www.youtube.com/watch?v=1ikFumI2pXc&t=72s)
[0:03:14 Iniciar um projeto em SvelteKit](https://www.youtube.com/watch?v=1ikFumI2pXc&t=194s)
[0:06:53 CSS global](https://www.youtube.com/watch?v=1ikFumI2pXc&t=413s)
[0:12:48 Instalar fontes do Google Fonts localmente](https://www.youtube.com/watch?v=1ikFumI2pXc&t=768s)
[0:18:07 Enviar projeto para o GitHub](https://www.youtube.com/watch?v=1ikFumI2pXc&t=1087s)
[0:21:13 Imagens e favicon](https://www.youtube.com/watch?v=1ikFumI2pXc&t=1273s)
[0:23:35 Início da codificação](https://www.youtube.com/watch?v=1ikFumI2pXc&t=1415s)
[0:34:36 Classe global para o botão](https://www.youtube.com/watch?v=1ikFumI2pXc&t=2076s)
[0:41:22 Adicionar imagem do emoji](https://www.youtube.com/watch?v=1ikFumI2pXc&t=2482s)
[0:44:39 $lib](https://www.youtube.com/watch?v=1ikFumI2pXc&t=2679s)
[0:47:06 Criar um componente](https://www.youtube.com/watch?v=1ikFumI2pXc&t=2826s)
[0:56:26 Valores padrão para variáveis do componente](https://www.youtube.com/watch?v=1ikFumI2pXc&t=3386s)
[1:00:02 Criar novas páginas](https://www.youtube.com/watch?v=1ikFumI2pXc&t=3602s)
[1:05:40 Header](https://www.youtube.com/watch?v=1ikFumI2pXc&t=3940s)
[1:14:55 Footer](https://www.youtube.com/watch?v=1ikFumI2pXc&t=4495s)
[1:27:44 Alinhar footer sempre ao final da página](https://www.youtube.com/watch?v=1ikFumI2pXc&t=5264s)
[1:33:54 Design: Componente para perguntas e respostas](https://www.youtube.com/watch?v=1ikFumI2pXc&t=5634s)
[1:42:54 Funcionalidade: Componente para perguntas e respostas](https://www.youtube.com/watch?v=1ikFumI2pXc&t=6174s)
[1:49:49 Animação: Componente para perguntas e respostas](https://www.youtube.com/watch?v=1ikFumI2pXc&t=6589s)
[1:55:32 stores.js](https://www.youtube.com/watch?v=1ikFumI2pXc&t=6932s)
[2:07:21 Archive](https://www.youtube.com/watch?v=1ikFumI2pXc&t=7641s)
[2:15:34 Single](https://www.youtube.com/watch?v=1ikFumI2pXc&t=8134s)
[2:22:33 Treino: Criar um componente para o single](https://www.youtube.com/watch?v=1ikFumI2pXc&t=8553s)
[2:30:07 Reutilizar componente](https://www.youtube.com/watch?v=1ikFumI2pXc&t=9007s)
[2:34:24 Data dinâmica](https://www.youtube.com/watch?v=1ikFumI2pXc&t=9264s)
[2:39:14 Remover página atual dos itens relacionados](https://www.youtube.com/watch?v=1ikFumI2pXc&t=9554s)
[2:42:35 Design responsivo](https://www.youtube.com/watch?v=1ikFumI2pXc&t=9755s)
[2:49:16 Animações](https://www.youtube.com/watch?v=1ikFumI2pXc&t=9755s)
[2:56:10 Otimização: Indicar qual é a página atual no menu](https://www.youtube.com/watch?v=1ikFumI2pXc&t=10570s)
[3:01:05 Testar em ambiente de produção](https://www.youtube.com/watch?v=1ikFumI2pXc&t=10865s)
[3:02:34 Hospedagem Vercel](https://www.youtube.com/watch?v=1ikFumI2pXc&t=10954s)
[3:07:12 Métricas de desempenho: PageSpeed Insights](https://www.youtube.com/watch?v=1ikFumI2pXc&t=11232s)
[3:18:57 SEO](https://www.youtube.com/watch?v=1ikFumI2pXc&t=11937s)
[3:28:12 Open Graph meta tags](https://www.youtube.com/watch?v=1ikFumI2pXc&t=12492s)