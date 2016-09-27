
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mountain').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('mountain').insert({id: 1, name: 'Arapahoe Basin', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=lWSw6eGT9t&uref=2c926cee-ab41-4eb8-9473-7535d72a305e', lat: 39.6423, long: 105.8717, description: 'Since 1946, Arapahoe Basin has been serving up a fantastic ride for skiers and riders from Colorado and all over the world. We\'re often the first in Colorado to open - if not the nation - and the last in Colorado to close. Arapahoe Basin receives over 350 inches of snowfall annually.', elevation: 13050, runs: 109, image_url: 'http://powderskiingcolorado.com/wp-content/uploads/2011/02/arapahoe-basin.jpg', website: 'http://arapahoebasin.com/Abasin/Default.aspx'}),

        knex('mountain').insert({id: 2, name: 'Copper Mountain', api_url: 'http://www.myweather2.com/developer/forecast.ashx?uac=XiHzZlNoi7&output=xml&query=SW1', lat: 39.5022, long: 106.1511, description: 'For generations, people have valued a down-to-earth ski experience that puts friends, family and relaxed mountain atmosphere above all else.', elevation: 12313, runs: 140, image_url: 'http://www.friscoinnongalena.com/wp-content/uploads/2014/05/copper-mountain-aerial.jpg', website: 'http://www.coppercolorado.com/winter'}),

        knex('mountain').insert({id: 3, name: 'Loveland', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=tqPQkd39uP&uref=27e92563-8f99-4e21-99e9-dbec278abd92', lat: 39.6800, long: 105.8979, description: 'Near to the hearts and homes of generations of Colorado skiers and riders, Loveland is Colorado’s true winter wonderland. Just 53 miles west of Denver, Loveland boasts 1,800 acres of remarkable terrain, FREE snowcat skiing along the Continental Divide, an innovative lesson program and more snow than any Front Range or Summit County resort. Loveland is home for those that simply want to ski or ride. Welcome home.', elevation: 13010, runs: 93, image_url: 'http://www.skicoupons.com/winter/wp-content/uploads/2013/11/loveland-ski-area-trails.jpg', website: 'http://skiloveland.com/'}),

        knex('mountain').insert({id: 4, name: 'Winter Park', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=46L59RDMP5&uref=b6b8363c-4fa1-4b87-9a54-bdd4c730a3eb', lat: 39.8868, long: 105.7625, description: 'With a 75-year history, Winter Park Resort is Colorado\'s longest continually operated ski resort. Over the years we\'ve been known to be "Extremely Colorado," "Authentic Colorado," and "Colorado\'s Favorite." Regardless of what you know us as, rest assured we\'re More Than You Imagine!', elevation: 12060, runs: 143, image_url: 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/180058/Winter-Park-Ski-Area-147469.jpg', website: 'https://www.winterparkresort.com/'}),

        knex('mountain').insert({id: 5, name: 'Breckenridge', api_url: 'http://www.myweather2.com/developer/weather.ashx?uac=TLkh6/tiyH&uref=eb6eee08-f535-4c13-8a9e-3cbfc415282e', lat: 39.4817, long: 106.0384, description: 'With five huge peaks spanning 2,908 acres, Breckenridge skiing has something for all abilities and interests. Every beginner and intermediate trail is groomed nightly so you can enjoy endless turns throughout your day. Or, ride North America’s highest chairlift, the Imperial Express, up to the high alpine bowls for unforgettable views and steeps. If you\’re looking for terrain parks, Breckenridge has four—one for every skill level.', elevation: 12998, runs: 155, image_url: 'https://activerain-store.s3.amazonaws.com/image_store/uploads/6/7/9/3/6/ar12895037263976.jpg', website: 'http://www.breckenridge.com/'}),

      ]);
    });
};
