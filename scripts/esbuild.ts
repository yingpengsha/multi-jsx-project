import { build } from 'esbuild'

build({
  outdir: "dist",
  entryPoints: [
    "./src/preact.tsx",
  ],
  tsconfig: "tsconfig.preact.json"
})

build({
  outdir: "dist",
  entryPoints: [
    "./src/react.tsx",
  ],
  tsconfig: "tsconfig.react.json"
})

build({
  outdir: "dist",
  entryPoints: [
    "./src/vue.tsx",
  ],
  tsconfig: "tsconfig.vue.json"
})