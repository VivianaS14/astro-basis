# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `yarn install`          | Installs dependencies                            |
| `yarn dev`              | Starts local dev server at `localhost:4321`      |
| `yarn build`            | Build your production site to `./dist/`          |
| `yarn preview`          | Preview your build locally, before deploying     |
| `yarn astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `yarn astro add --help` | Get help using the Astro CLI                     |

## 👀 Add Tailwind

Run command `yarn astro add --help` to get command help

Add tailwind `yarn astro add tailwind`
