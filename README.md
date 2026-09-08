# Liberty & Society anniversary timeline

Standalone static website prepared for GitHub Pages and embedding in CIS WordPress.
All people, careers and cohort data are simulated. Photos are hidden through 2010 inclusive.

## Publish

Repository: `sfox2006/CIS-Liberty-Society-Alumni-Website`. Keep these files at its root, including `.nojekyll`.
In Settings → Pages choose **Deploy from a branch**, **main**, **/(root)**, then Save.
The expected address is `https://sfox2006.github.io/CIS-Liberty-Society-Alumni-Website/` once publishing succeeds; this is not a confirmed live address yet.
No custom GitHub Actions workflow or scheduled data updates are included. GitHub may show its own Pages deployment runs.

## WordPress

After publishing, paste the full contents of `wordpress-embed.html` into a Custom HTML block or Elementor HTML widget on the intended CIS page.
If WordPress removes the script, a site administrator must insert it through the site's approved custom-code facility.
The parent script checks the message origin and iframe window before resizing.
The site reports its height when content changes, including switching years or cohorts.
Use `layout=vertical` in the iframe URL for the vertical version.
Future changes to published repository files appear in the same embed; no routine embed replacement is needed.

## Source files

- `index.html`: timeline, simulated cohort generation and person profiles.
- `refinement.css`: appearance and embedded layout.
- `portrait-data.js`: bundled portrait atlas.
- `embed.js`: automatic iframe height reporting.
- `vertical.html`: shortcut to the vertical layout.

GitHub Pages setup documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
