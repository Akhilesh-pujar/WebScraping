"use server"
import {scrapeAmazonProduct} from "../scraper";

export async function scrapeStoreProduct(productUrl:string){
    if(!productUrl){
        return;
    }
    try{
    const scrapedProduct = await scrapeAmazonProduct(productUrl)
    }
    catch(error){
        throw new Error(`failed to create/update product`)
    }
}