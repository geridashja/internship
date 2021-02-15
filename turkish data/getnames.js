const puppeteer = require('puppeteer');

const url = "http://www.turkishculture.org/lifestyles/turkish-culture-portal/names-meaning-321.htm";

async function scrap() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    let results = [];
    while( page.$eval(('#page-content > span > strong'),node => node.innerText)){
        let name = await page.$eval(('#page-content > span > strong'),node => node.innerText);
        results.push(name);
    } 
    await browser.close();
    console.log(results);
    return results;
};

module.exports = scrap;