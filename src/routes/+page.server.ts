import { GiphyFetch } from '@giphy/js-fetch-api'
const gf = new GiphyFetch(process.env.GIPHY_API_KEY || '')

export async function load(){
    const gifNum = 10;
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }
    return {
        giphs: (await gf.trending({ limit: gifNum })).data[getRandomInt(gifNum)].embed_url
    }
}