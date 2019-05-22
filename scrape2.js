const fs = require('fs');

const campsites = ["4j11-rv-park", "arrowhead-point-camping-resort", "aspen-ridge-rv-park", "base-camp-at-golden-gate-canyon", "blue-mesa-outpost", "blue-spruce-rv-park-cabins", "bristlecone-lodge", "buena-vista-koa", "canyonside-campground", "cedar-creek-rv-park", "chalk-creek-campground-rv-park", "circle-the-wagons-rv-park", "colorado-heights-camping-resort", "colorado-springs-south-koa", "cool-sunshine-rv-park", "cripple-creek-koa", "cuttys-hayden-creek-resort", "dolores-river-campground", "elk-creek-campground-rv-park", "estes-park-koa", "falcon-meadow-rv-campground", "fireside-cabins-and-rv-park", "foot-of-the-rockies-rv-resort-storage", "garden-of-the-gods-rv-resort", "glenwood-canyon-resort", "golden-eagle-campground-inc", "goldfield-rv-park", "greeley-rv-park-campground", "gunnison-lakeside-rv-park-cabins", "highlander-rv-campground", "jellystone-park-larkspur", "jellystone-park-of-estes", "jellystone-park-of-the-black-canyon", "junction-west-rv-park", "kebler-corner-rv-park-campground-cabins", "lake-john-resort", "lone-duck-campground-cabins", "loveland-rv-resort", "middlefork-rv-resort", "monument-rv-resort", "mt-princeton-rv-park-cabins", "muddy-creek-cabins", "ouray-rv-park-and-cabins", "pagosa-riverside-campground", "palisade-basecamp-rv-resort", "peak-view-park", "priest-gulch-campground", "prospect-rv-park", "red-mountain-rv-park", "riverview-rv-park", "royal-gorge-cabins", "shady-grove-campground", "silver-summit-rv-park", "snowy-peaks-rv-park-rentals", "sportsmans-campground-mountain-cabins", "steamboat-springs-koa", "sugar-loafin-rv-campground-cabins", "the-river-forks-inn-campground", "the-views-rv-park-and-campground", "uncompahgre-river-rv-park", "united-campground", "ute-bluff-lodge-cabins-rv-park", "westerly-rv-park", "winding-river-resort"]
// const campsites = ["4j11-rv-park"]

// Parses our HTML and helps us find elements
const cheerio = require('cheerio');
// Makes HTTP request for HTML page
const axios = require('axios');

const results = [];
const asyncCalls = [];

// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument

for (let i = 0; i < campsites.length; i++) {
  asyncCalls.push(axios.get("https://campcolorado.com/locations/" + campsites[i] + "",))
}

Promise.all(asyncCalls)
  .then(function(pages){
    pages.forEach(function(page){

      const $ = cheerio.load(page.data);

      var data = {
        "title": $('h2').text(),
        "address": $('#ajax-content-wrap > div.container-wrap > div.container.main-content > div > div.general-poi-info > p:nth-child(2)').text().trim(),
        "phone": $('#ajax-content-wrap > div.container-wrap > div.container.main-content > div > div.general-poi-info > p:nth-child(3) > a').text().trim(),
        "desc": $('div.col.span_12.dark.left > div > div > div > div > div').text().trim(),
        "numberTentSites": $('#tab2 > h4:nth-child(1)').text().trim(),
        "numberRvSites": $('#tab2 > h4:nth-child(2)').text().trim(),
        "RvSiteInfo": [],
        "numberOtherLodging": $('#tab2 > h4:nth-child(4)').text().trim(),
        "otherLodgingInfo": [],
        "photos": [],
        "propertyAmenities": [],
        "propertyNearbyActivities": []
      }

      var rvSiteData = $('#tab2 > ul:nth-child(3) li');
      var otherLodgeData = $('#tab2 > ul:nth-child(5) li');
      var imageGallery = $('.gallery__item a img');
      var otherItems = $('#tab3 > div > div:nth-child(1) > ul li');
      var otherItems2 = $('#tab3 > div > div:nth-child(2) > ul li');

      rvSiteData.each(function(index, item){
        data.RvSiteInfo.push($(item).text().trim())
      })
      otherLodgeData.each(function(index, item){
        data.otherLodgingInfo.push($(item).text().trim())
      })
      imageGallery.each(function(index, item){
        data.photos.push($(item).attr('src'))
      })
      // imageGallery(".gallery__thumbnail").each(function() {
      //   data.photos.push($(this).src)
      // })  
      otherItems.each(function(index, item){
        data.propertyAmenities.push($(item).text().trim())
      })
      otherItems2.each(function(index, item){
        data.propertyNearbyActivities.push($(item).text().trim())
      })

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push(data);
    })

    console.log(results)
    // fs.writeFileSync('campsites.json', results, (err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log('The file has been saved')
    // });
  })


