const fs = require('fs');
const puppeteer = require('puppeteer');

const dataConverter = require('./data-converter');

async function startCrawling (wowheadUrl, gatherMate2Name, fileName) {
  const browser = await puppeteer.launch({
    // headless: false,
    slowMo: 100
  });
  const page = await browser.newPage();
  await page.goto(wowheadUrl);

  const data = {};

  const pages = await page.$$eval('a.listview-cleartext', links => links.map(link => link.href));
  console.log(pages);

  for (const pageUrl of pages) {
    console.log('goto:', pageUrl);
    await page.goto(pageUrl);

    const pageData = await page.evaluate(() => {
        if ('g_mapperData' in window) {
            return [document.querySelector('h1.heading-size-1').innerText.trim(), g_mapperData];
        }
        return null;
    });
    if (pageData) {
        console.log('pageData:', pageData);
        if (data[pageData[0]]) {
            //If we get here, it means this "object" already exists, but it has a different wowhead page,
            //this happends for example for Copper Vein which has 5 different objects in game with this name
            //But all 5 of these objects are acutally different objects with a unique ID
            Object.keys(pageData[1]).forEach(mapId => {
                if (data[pageData[0]][mapId]) {
                    data[pageData[0]][mapId] = [
                        ...data[pageData[0]][mapId],
                        ...pageData[1][mapId]
                    ];
                } else {
                    data[pageData[0]][mapId] = pageData[1][mapId];
                }
            })
        } else {
            data[pageData[0]] = pageData[1];
        }
    }
  }

  await browser.close();

  const result = dataConverter(data, gatherMate2Name);
  fs.writeFileSync(`./GatherMate2_Data/${fileName}`, result);
}

(async () => {
    await startCrawling('https://classic.wowhead.com/mining-nodes', 'GatherMateData2MineDB', 'MiningData.lua');
    await startCrawling('https://classic.wowhead.com/herb-objects', 'GatherMateData2HerbDB', 'HerbalismData.lua');
})();