/* Copied from https://cli.vuejs.org/config/#pages */

module.exports = {
    pages: {
      Breathing: {
        // entry for the page
        entry: 'src/pages/Breathing/main.js',
        // the source template
        template: 'public/breathing.html',
        // output as dist/index.html
        filename: 'breathing.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Breathing Page',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        /* chunks: ['chunk-vendors', 'chunk-common', 'index'] */
      },
      // when using the entry-only string format,
      // template is inferred to be `public/subpage.html`
      // and falls back to `public/index.html` if not found.
      // Output filename is inferred to be `subpage.html`.
      /* subpage: 'src/subpage/main.js' */
    }
  }