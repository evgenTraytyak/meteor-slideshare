Package.describe({
  name: "etray:slideshare",
  summary: "Scraping presentation slides from slideshare",
  version: "0.1.0",
  git: "https://github.com/evgenTraytyak/meteor-slideshare.git",
  documentation: "https://github.com/evgenTraytyak/meteor-slideshare/blob/master/README.md"
});

Package.onUse(function(api) {
    api.use(['mrt:cheerio', 'http', 'ecmascript'])
    api.addFiles('slideshare.js', 'server');
    api.export('Slideshare');
});
