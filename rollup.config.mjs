import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: {
    index: 'src/index.ts',
  },
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      format: 'es',
    },
  ],
  plugins: [typescript(), terser()],
}
