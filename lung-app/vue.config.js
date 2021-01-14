/* Copied from https://cli.vuejs.org/config/#pages */

module.exports = {
    pages: {
      breathing: { /* Can use any name */
        // entry for the page
        entry: 'src/pages/Breathing/main.js', /* Must use correct pathname (ie correct folder name capitalisation) */
        // the source template
        template: 'public/breathing.html',
        /* Appends "index.html" onto parent directory ("public"), 
        must use page with HTML header (not a section id) */
        filename: 'index.html',
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