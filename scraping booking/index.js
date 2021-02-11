const puppeteer = require('puppeteer');

const self = {
    browser: null,
    page: null,

    start: async (url) =>{
        self.browser = await puppeteer.launch({ headless: true });
        self.page = await self.browser.newPage();
        await self.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36');
        await self.page.goto(url);
    },

    result: async (nr) => {
        let results = [];

        do {
            let new_result = await self.getdata();
            results = [...results, ...new_result];
            if(results.length < nr){
                let nextPageButton = await self.page.$("#search_results_table > div.bui-pagination.results-paging_simplified.js-results-paging > nav > ul > li.bui-pagination__item.bui-pagination__next-arrow > a");
                if(nextPageButton){
                    await nextPageButton.click();
                }
                else{
                    break;
                }
            }
        }while(results.length <=nr);
        return results.slice(0,nr);
    },

    getdata: async () => {
        let hotelDatas = await self.page.$$('div.sr_property_block[data-hotelid]');
        let hotels = [];
        for(let hoteldata of hotelDatas){    
            let name = await hoteldata.$eval(('span.sr-hotel__name'),node => node.innerText);
            let city = await hoteldata.$eval(("a.bui-link"),node => node.outerText);
            let full = name + city;
            hotels.push(full);
        }
        return hotels;
    }
}
        

module.exports = self;