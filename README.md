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
