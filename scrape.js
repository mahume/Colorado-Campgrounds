// Parses our HTML and helps us find elements
const cheerio = require('cheerio');
// Makes HTTP request for HTML page
const axios = require('axios');

// Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument

  for (let i = 0; i < 16; i++) {
    axios  
      .get("https://www.reserveamerica.com/explore/search-results?pageNumber=" + i + "&searchTerm=Colorado&type=state&stateCode=CO",
      {
        headers:{
          Cookie: "cookie1=value; cookie2=value; cookie3=value;"
        } 
      })
      .then(function(response) {
        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        const $ = cheerio.load(response.data);

        // An empty array to save the data that we'll scrape
        const results = [];

        // (i: iterator. element: the current element)
        $('div.facility-summary-card__detail').each(function(i, element) {
          // Save the text of the element in a "title" variable
          var title = $(element).children().children().children().children(".facility-summary-card__title").text();

          // In the currently selected element, look at its child elements (i.e., its a-tags),
          // then save the values for any "href" attributes that the child elements may have
          var link = $(element).children().children().children().attr("href");

          // console.log('https://www.reserveamerica.com' + link)

          getCampsiteDetails('https://www.reserveamerica.com' + link)
            .then(function(response) {
              const $ = cheerio.load(response.data);

              console.log($('.facility-overview-details').text());
              // Do stuff
              // Get Facilities
              // Get Recreation
            });
      
          // Save these results in an object that we'll push into the results array we defined earlier
          results.push({
            title: title,
            link: link,
          });
        });

        // Log the results once you've looped through each of the elements found with cheerio
        console.log(results);
      });
  }


  function getCampsiteDetails(url) {
    return axios  
        .get(url, {
          headers:{
            Cookie: "JSESSIONID=3D240E081B639F006AE5DEA3CADF0562.awoashprodweb05;"
          } 
        });
  }