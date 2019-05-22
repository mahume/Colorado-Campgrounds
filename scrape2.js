const campsites = ["4j11-rv-park", "arrowhead-point-camping-resort", "aspen-ridge-rv-park", "base-camp-at-golden-gate-canyon", "blue-mesa-outpost", "blue-spruce-rv-park-cabins", "bristlecone-lodge", "buena-vista-koa", "canyonside-campground", "cedar-creek-rv-park", "chalk-creek-campground-rv-park", "circle-the-wagons-rv-park", "colorado-heights-camping-resort", "colorado-springs-south-koa", "cool-sunshine-rv-park", "cripple-creek-koa", "cuttys-hayden-creek-resort", "dolores-river-campground", "elk-creek-campground-rv-park", "estes-park-koa", "falcon-meadow-rv-campground", "fireside-cabins-and-rv-park", "foot-of-the-rockies-rv-resort-storage", "garden-of-the-gods-rv-resort", "glenwood-canyon-resort", "golden-eagle-campground-inc", "goldfield-rv-park", "greeley-rv-park-campground", "gunnison-lakeside-rv-park-cabins", "highlander-rv-campground", "jellystone-park-larkspur", "jellystone-park-of-estes", "jellystone-park-of-the-black-canyon", "junction-west-rv-park", "kebler-corner-rv-park-campground-cabins", "lake-john-resort", "lone-duck-campground-cabins", "loveland-rv-resort", "middlefork-rv-resort", "monument-rv-resort", "mt-princeton-rv-park-cabins", "muddy-creek-cabins", "ouray-rv-park-and-cabins", "pagosa-riverside-campground", "palisade-basecamp-rv-resort", "peak-view-park", "priest-gulch-campground", "prospect-rv-park", "red-mountain-rv-park", "riverview-rv-park", "royal-gorge-cabins", "shady-grove-campground", "silver-summit-rv-park", "snowy-peaks-rv-park-rentals", "sportsmans-campground-mountain-cabins", "steamboat-springs-koa", "sugar-loafin-rv-campground-cabins", "the-river-forks-inn-campground", "the-views-rv-park-and-campground", "uncompahgre-river-rv-park", "united-campground", "ute-bluff-lodge-cabins-rv-park", "westerly-rv-park", "winding-river-resort"]

// Parses our HTML and helps us find elements
const cheerio = require('cheerio');
// Makes HTTP request for HTML page
const axios = require('axios');

// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument

  for (let i = 0; i < campsites.length; i++) {
    axios  
      .get("https://campcolorado.com/locations/" + campsites[i] + "",).then(function(response) {
        // .get("https://campcolorado.com/locations/4j11-rv-park").then(function(response) {
        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(response.data);

        // An empty array to save the data that we'll scrape
        const results = [];

        // (i: iterator. element: the current element)
        $('div.main-content').each(function(i, element) {
          // Save the text of the element in a "title" variable
          var title = $(element).children().children().children('h2').text();
          var address = $(element).children().children().children('p').text();
          var phone = $(element).children().children().children().children().attr('href');
          var desc = $(element).children().children().children().children().children().children().children().children().children().children().text();
          var otherItems = $(element).children().children().children().children().children('h4').text();
          var otherItems2 = $(element).children().children().children().children().children().children().children('h4').text();
          var photos = $(element).children().children().children().children().children().children().children().children('img').attr('src');

          // In the currently selected element, look at its child elements (i.e., its a-tags),
          // then save the values for any "href" attributes that the child elements may have
        //   var link = $(element).children().children().children().attr("href");
      
          // Save these results in an object that we'll push into the results array we defined earlier
          results.push({
            title: title,
            address: address,
            phone: phone,
            description: desc,
            properyLodingInfo: otherItems,
            amenitiesActivitiesInfo: otherItems2,
            photos: photos,
          });
        });

        // Log the results once you've looped through each of the elements found with cheerio
        console.log(results);
      });
  }
