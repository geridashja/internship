const puppeteer = require('puppeteer');

let bookingUrl = 'https://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ApHhzYEGwAIB0gIkN2U0Y2QxNzItZDNjYS00ODUxLWI3NjEtMGE0YWY5NzkxZTdi2AIF4AIB&sid=0671f6e18fe455afd933f1aaccfd3eef&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ApHhzYEGwAIB0gIkN2U0Y2QxNzItZDNjYS00ODUxLWI3NjEtMGE0YWY5NzkxZTdi2AIF4AIB%3Bsid%3D0671f6e18fe455afd933f1aaccfd3eef%3Bsb_price_type%3Dtotal%26%3B&ss=Turkey&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=Tur&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=215&dest_type=country&place_id_lat=38.9637&place_id_lon=34&search_pageview_id=485b3e484fa3027a&search_selected=true&search_pageview_id=485b3e484fa3027a&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0';


async function getdata(page){
    let hotelDatas = await page.$$('div.sr_property_block[data-hotelid]');
    let hotels = [];
    for(let hoteldata of hotelDatas){    
        let name = await hoteldata.$eval(('span.sr-hotel__name'),node => node.innerText);
        let city = await hoteldata.$eval(("a.bui-link"),node => node.outerText);
        let country = "Turkey";
        let full = name.replace(/\n|\r/, "") +  ", " + city.replace(/\n|\r/, "").replace("Show on map", "").replace(',', "").trim() + ", " + country;
        hotels.push(full);
    }
    return hotels;
}

async function scrap() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(bookingUrl);
  let results = []; 
  while(await page.$("#search_results_table > div.bui-pagination.results-paging_simplified.js-results-paging > nav > ul > li.bui-pagination__item.bui-pagination__next-arrow > a")){
      try{
          page.click("#search_results_table > div.bui-pagination.results-paging_simplified.js-results-paging > nav > ul > li.bui-pagination__item.bui-pagination__next-arrow > a");
          await page.waitFor(2000);
          results = results.concat(await getdata(page));
      }
      catch(error){
        console.log(error);
      }
    
    }
    await browser.close();
    return results;
};

module.exports = scrap;