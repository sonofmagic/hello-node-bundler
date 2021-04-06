// Bundling for node

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
  target: ['node10.4'],
  outfile: 'out.js'
})
