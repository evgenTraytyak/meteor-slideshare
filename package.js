Package.describe({
  name: "traytyak:slideshare",
  summary: "Scraping presentation slides from slideshare",
  version: "0.1.0",
  git: "https://github.com/evgenTraytyak/meteor-slideshare.git"
});

Package.onUse(function(api) {
    api.use(['mrt:cheerio@0.3.2', 'http@1.1.1', 'ecmascript@0.1.5'])
    api.addFiles('slideshare.js', 'server');
    api.export('Slideshare');
});
