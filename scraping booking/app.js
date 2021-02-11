const self = require('./index');
const { convertArrayToCSV } = require('convert-array-to-csv');
const converter = require('convert-array-to-csv');
const fs = require('fs');

let bookingUrl = 'https://www.booking.com/searchresults.html?label=gen173nr-1FCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ao-nlIEGwAIB0gIkYzQwY2I3ZmUtN2ExMi00NzIxLTg1MmMtYjc4YTRmYWY1NWYx2AIF4AIB&sid=0671f6e18fe455afd933f1aaccfd3eef&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaAaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ao-nlIEGwAIB0gIkYzQwY2I3ZmUtN2ExMi00NzIxLTg1MmMtYjc4YTRmYWY1NWYx2AIF4AIB%3Bsid%3D0671f6e18fe455afd933f1aaccfd3eef%3Bsb_price_type%3Dtotal%3Bsrpvid%3Dc70051e798dc007c%26%3B&ss=Turkey&is_ski_area=0&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=215&dest_type=country&place_id_lat=38.9637&place_id_lon=34&search_pageview_id=340951e944730135&search_selected=true&ss_raw=Turkey';
(async () => {
    await self.start(bookingUrl);
    let result = await self.result(500);
    console.dir(result);
    console.dir(result.length);
    const header = ['hotel name'];
    const csvFromArrayOfArrays = convertArrayToCSV(result, {
        header,
        separator: ';'
    });
})();
