const puppeteer = require('puppeteer');

const url = "http://www.turkishculture.org/lifestyles/turkish-culture-portal/names-meaning-321.htm";

async function scrap() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    let datas = await page.$$('div.page-body strong');
    let results= [];
    var i =0;
    for(data of datas){
        try{
            let emri = await data.$eval(('div.page-body strong > span'),node => node.innerText);
            results.push(emri);
        }
        catch(err){
            console.log(err);
        }
    }
    // let emri = await page.$eval(('#page-content > p > strong > span'),node => node.innerText);
    // for(i < data1.length){
    //     // let emri = await data.$$('#page-content > strong')[i++].innerText;
    //     // results.push(emri);
    //     let data = await page.$$('#page-content > p > strong > span').innerText;
    //     console.log(data)
    //     i++;
    // }
    console.log(results);
    console.log(results.length);
    await browser.close();
    return results;
};

module.exports = scrap;