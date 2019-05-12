// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var axios = require("axios");

// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
axios.get("https://campcolorado.com/campground-search/?poimap=%7B%22member%22%3A%5B%221%22%5D%2C%22near%22%3A%5B%22any%22%5D%2C%22radius%22%3A%5B%2210%22%5D%2C%22is_campground%22%3A%5B%221%22%5D%2C%22text-search%22%3A%22%22%2C%22sort%22%3A%22member%22%2C%22sort-order%22%3A%22DESC%22%7D").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
  $("h3.vw-poi-box__link-heading").each(function(i, element) {

    // Save the text of the element in a "title" variable
    var siteTitle = $(element).text();

    // // In the currently selected element, look at its child elements (i.e., its a-tags),
    // // then save the values for any "href" attributes that the child elements may have
    // var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: siteTitle,
    //   link: link
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});