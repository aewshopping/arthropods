// my thanks to https://jamesdoc.com/blog/2022/11ty-airtable/
// also see https://www.11ty.dev/docs/plugins/fetch/

const { AssetCache } = require("@11ty/eleventy-fetch");
const Airtable = require("airtable");

const assetCacheId = "airtableCMS1";
const airtableCMSTable = "tblY5DZkA8Y5UlgXt";
const airtableBase = "appwHHPuLPYFSpBwv";
const airtableAPIKey = process.env.AIRTABLE_ARTHROPOD_API;

var base = new Airtable({ apiKey: airtableAPIKey }).base(
  airtableBase
);

module.exports = async function () {
  let asset = new AssetCache(assetCacheId);

  // Cache the data in 11ty for one day
  if (asset.isCacheValid("1d")) {
    console.log("Serving airtable data from the cache…");
    return asset.getCachedValue();
  }

  // The 11ty cache is cold… so we need to talk to Airtable
  return new Promise((resolve, reject) => {
    const allRecords = [];

    base(airtableCMSTable)
      .select({
      maxRecords: 1000,
      sort: [{field: "story_num", direction: "asc"}]
    })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(record => {
            allRecords.push({
              id: record._rawJson.id,
              ...record._rawJson.fields
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err + "airtable api link problem");
          } else {
            asset.save(allRecords , "json");
            resolve(allRecords);
          }
        },
      );
  });
};