import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index'],
  clean: true,
  declaration: false,
  rollup: {
    esbuild: {
      minify: true,
    },
    emitCJS: true,
    inlineDependencies: true,
  },
})
