const puppeteer = require('puppeteer');

const url = "http://www.turkishculture.org/lifestyles/turkish-culture-portal/names-meaning-321.htm";

async function scrap() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    let datas = await page.$$('div.page-body strong');
    let results= [];
    for(data of datas){
        try{
            let emri = await data.$eval(('div.page-body strong > span'),node => node.innerText);
            results.push(emri);
        }
        catch(err){
            console.log(err);
        }
    }
    console.log( "Length of names is : " + results.length);
    await browser.close();
    return results;
};

module.exports = scrap;