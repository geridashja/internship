const self = require('./index');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const fs = require('fs');

let bookingUrl = 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AofrjoEGwAIB0gIkMTA5NDJhN2EtNjYyZC00M2Y2LTlmYmEtMTJmYmVmNmQwMTZh2AIE4AIB&sid=0671f6e18fe455afd933f1aaccfd3eef&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D304142%3Blabel%3Dgen173nr-1DCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AofrjoEGwAIB0gIkMTA5NDJhN2EtNjYyZC00M2Y2LTlmYmEtMTJmYmVmNmQwMTZh2AIE4AIB%3Bsid%3D0671f6e18fe455afd933f1aaccfd3eef%3Bsb_price_type%3Dtotal%3Bsrpvid%3D54bf67bd80b10118%26%3B&ss=Ankara%2C+Central+Anatolia+Region%2C+Turkey&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=Ankara&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-735338&dest_type=city&iata=ANK&place_id_lat=39.91235&place_id_lon=32.851269&search_pageview_id=ac42722daf63015a&search_selected=true';
(async () => {
    await self.start(bookingUrl);
    let result = await self.result(167);
    console.dir(result);
    console.dir(result.length);
    const header = ['hotel name'];
    const csvFromArrayOfArrays = convertArrayToCSV(result, {
        header,
        separator: ';'
    });
})();
