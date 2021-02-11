const puppeteer = require('puppeteer');
let bookingUrl = 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ao-nlIEGwAIB0gIkYzQwY2I3ZmUtN2ExMi00NzIxLTg1MmMtYjc4YTRmYWY1NWYx2AIF4AIB&sid=0671f6e18fe455afd933f1aaccfd3eef&tmpl=searchresults&ac_click_type=b&ac_position=0&class_interval=1&dest_id=215&dest_type=country&dtdisc=0&from_sf=1&group_adults=2&group_children=0&inac=0&index_postcard=0&label_click=undef&no_rooms=1&postcard=0&raw_dest_type=country&room1=A%2CA&sb_price_type=total&search_selected=1&shw_aparth=1&slp_r_match=0&src_elem=sb&srpvid=7f8d603f13180022&ss=Turkey&ss_all=0&ss_raw=Turkey&ssb=empty&sshis=0&top_ufis=1&b_gtt=dLYAeZFVJfNTBBSLFYNTBMHKVJBJaNLJOOXOXKe&_=1613045654960&order=popularity';


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

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(bookingUrl);
  let results = []; 
  while(await page.$("#search_results_table > div.bui-pagination.results-paging_simplified.js-results-paging > nav > ul > li.bui-pagination__item.bui-pagination__next-arrow > a")){
      try{
        page.click("#search_results_table > div.bui-pagination.results-paging_simplified.js-results-paging > nav > ul > li.bui-pagination__item.bui-pagination__next-arrow > a");
        results = results.concat(await getdata(page));
      }
      catch(error){
        console.log(error);
      }
    
    }
    console.log(results);
    await browser.close();
})();