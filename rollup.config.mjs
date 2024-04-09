import terser from '@rollup/plugin-terser'

export default {
  input: {
    index: 'src/index.js',
    // component: 'src/component.js',
  },
  output: [
    {
      dir: 'dist',
      name: 'index.js',
    },
    // {
    //   dir: 'dist',
    //   name: 'component.js',
    // },
  ],
  plugins: [terser()],
}
