
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('icons').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('icons').insert({id: -999, icon: 'N/A'}),
        knex('icons').insert({id: 0, icon: '/images/weather_icons/Sunny.gif'}),
        knex('icons').insert({id: 1, icon: '/images/weather_icons/PartlyCloudyDay.gif'}),
        knex('icons').insert({id: 2, icon: '/images/weather_icons/Cloudy.gif'}),
        knex('icons').insert({id: 3, icon: '/images/weather_icons/Overcast.gif'}),
        knex('icons').insert({id: 10, icon: '/images/weather_icons/Mist.gif'}),
        knex('icons').insert({id: 21, icon: '/images/weather_icons/OccLightRain.gif'}),
        knex('icons').insert({id: 22, icon: '/images/weather_icons/IsoSleetSwrsDay.gif'}),
        knex('icons').insert({id: 23, icon: '/images/weather_icons/OccLightSleet.gif'}),
        knex('icons').insert({id: 24, icon: '/images/weather_icons/FreezingDrizzle.gif'}),
        knex('icons').insert({id: 29, icon: '/images/weather_icons/PartCloudRainThunderDay.gif'}),
        knex('icons').insert({id: 38, icon: '/images/weather_icons/ModSnow.gif'}),
        knex('icons').insert({id: 39, icon: '/images/weather_icons/Blizzard.gif'}),
        knex('icons').insert({id: 45, icon: '/images/weather_icons/Fog.gif'}),
        knex('icons').insert({id: 49, icon: '/images/weather_icons/FreezingFog.gif'}),
        knex('icons').insert({id: 50, icon: '/images/weather_icons/IsoRainSwrsDay.gif'}),
        knex('icons').insert({id: 51, icon: '/images/weather_icons/OccLightRain.gif'}),
        knex('icons').insert({id: 56, icon: '/images/weather_icons/FreezingDrizzle.gif'}),
        knex('icons').insert({id: 57, icon: '/images/weather_icons/FreezingDrizzle.gif'}),
        knex('icons').insert({id: 60, icon: '/images/weather_icons/OccLightRain.gif'}),
        knex('icons').insert({id: 61, icon: '/images/weather_icons/ModRain.gif'}),
        knex('icons').insert({id: 62, icon: '/images/weather_icons/ModRainSwrsDay.gif'}),
        knex('icons').insert({id: 63, icon: '/images/weather_icons/ModRain.gif'}),
        knex('icons').insert({id: 64, icon: '/images/weather_icons/HeavyRainSwrsDay.gif'}),
        knex('icons').insert({id: 65, icon: '/images/weather_icons/HeavyRain.gif'}),
        knex('icons').insert({id: 66, icon: '/images/weather_icons/FreezingRain.gif'}),
        knex('icons').insert({id: 67, icon: '/images/weather_icons/FreezingRain.gif'}),
        knex('icons').insert({id: 68, icon: '/images/weather_icons/ModSleet.gif'}),
        knex('icons').insert({id: 69, icon: '/images/weather_icons/HeavySleet.gif'}),
        knex('icons').insert({id: 70, icon: '/images/weather_icons/OccLightSnow.gif'}),
        knex('icons').insert({id: 71, icon: '/images/weather_icons/OccLightSnow.gif'}),
        knex('icons').insert({id: 72, icon: '/images/weather_icons/ModSnow.gif'}),
        knex('icons').insert({id: 73, icon: '/images/weather_icons/ModSnow.gif'}),
        knex('icons').insert({id: 74, icon: '/images/weather_icons/HeavySnowSwrsDay.gif'}),
        knex('icons').insert({id: 75, icon: '/images/weather_icons/HeavySnow.gif'}),
        knex('icons').insert({id: 79, icon: '/images/weather_icons/FreezingRain.gif'}),
        knex('icons').insert({id: 80, icon: '/images/weather_icons/IsoRainSwrsDay.gif'}),
        knex('icons').insert({id: 81, icon: '/images/weather_icons/ModRainSwrsDay.gif'}),
        knex('icons').insert({id: 82, icon: '/images/weather_icons/HeavyRain.gif'}),
        knex('icons').insert({id: 83, icon: '/images/weather_icons/ModSleetSwrsDay.gif'}),
        knex('icons').insert({id: 84, icon: '/images/weather_icons/ModSleetSwrsDay.gif'}),
        knex('icons').insert({id: 85, icon: '/images/weather_icons/IsoSnowSwrsDay.gif'}),
        knex('icons').insert({id: 86, icon: '/images/weather_icons/ModSnowSwrsDay.gif'}),
        knex('icons').insert({id: 87, icon: '/images/weather_icons/FreezingRain.gif'}),
        knex('icons').insert({id: 88, icon: '/images/weather_icons/FreezingRain.gif'}),
        knex('icons').insert({id: 91, icon: '/images/weather_icons/PartCloudRainThunderDay.gif'}),
        knex('icons').insert({id: 92, icon: '/images/weather_icons/CloudRainThunder.gif'}),
        knex('icons').insert({id: 93, icon: '/images/weather_icons/PartCloudSleetSnowThunderDay.gif'}),
        knex('icons').insert({id: 94, icon: '/images/weather_icons/CloudSleetSnowThunder.gif'})
      ]);
    });
};
