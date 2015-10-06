Slideshare = {};

Slideshare.getById = function(id) {
    return new Promise((resolve, reject) => {
        let url = 'http://www.slideshare.net/slideshow/embed_code/' + id;

        HTTP.get(url, function (error, result) {
            if (!error) {
                let $ = cheerio.load(result.content);
                let slides = { small: [], normal: [], full: [] };
                let data = $('div.slide_container').find('div')
                    .each((i, slideData) => {
                        let data = slideData.children[0].next.data;

                        slides.small.push(data.small);
                        slides.normal.push(data.normal);
                        slides.full.push(data.full);
                    });

                resolve(slides);
            } else {
                reject(new Error("Something went wrong :/"));
            }
        });
    });
};
