import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('home')
});

app.get('/searchArea', async (req, res) => {
   try {
      let lat = req.query.lat // make value="lat"
      let long = req.query.long // make value="long"
      let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=36906e492ed587a9e4c53f79a5c9cd5a`
      let response = await fetch(url);
      let data = await response.json();
      res.render('searched', { lat, long, 'temp': data.current.temp, cloudCoverage: data.current.clouds, windDirection: data.current.wind_deg, windSpeed: data.current.wind_speed, windGust: data.current.wind_gust }) // res.render('{target page}, {{page element}: {YOUR DATA}});
   } catch (error) {
      res.render('home')
   }
});

app.get('/svs', async (req, res) => {
   let lat = 37.07;
   let long = -121.6;
   let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=36906e492ed587a9e4c53f79a5c9cd5a`
   let response = await fetch(url);
   let data = await response.json();
   res.render('svs', { lat, long, 'temp': data.current.temp, cloudCoverage: data.current.clouds, windDirection: data.current.wind_deg, windSpeed: data.current.wind_speed, windGust: data.current.wind_gust }) // res.render('{target page}, {{page element}: {YOUR DATA}});
});

app.get('/ssb', async (req, res) => {
   let lat = 34.67;
   let long = -120.45;
   let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=36906e492ed587a9e4c53f79a5c9cd5a`
   let response = await fetch(url);
   let data = await response.json();
   console.log(data.current);
   res.render('ssb', { lat, long, 'temp': data.current.temp, cloudCoverage: data.current.clouds, windDirection: data.current.wind_deg, windSpeed: data.current.wind_speed, windGust: data.current.wind_gust }) // res.render('{target page}, {{page element}: {YOUR DATA}});
});

app.get('/sp', async (req, res) => {
   let lat = 33.76; // make value="lat"
   let long = -117.21; // make value="long"
   let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=36906e492ed587a9e4c53f79a5c9cd5a`
   let response = await fetch(url);
   let data = await response.json();
   res.render('searched', { lat, long, 'temp': data.current.temp, cloudCoverage: data.current.clouds, windDirection: data.current.wind_deg, windSpeed: data.current.wind_speed, windGust: data.current.wind_gust }) // res.render('{target page}, {{page element}: {YOUR DATA}});
});

app.get('/ssv', async (req, res) => {
   let lat = 35.09;
   let long = -119.07;

   let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=imperial&appid=36906e492ed587a9e4c53f79a5c9cd5a`
   let response = await fetch(url);
   let data = await response.json();
   res.render('searched', { lat, long, 'temp': data.current.temp, cloudCoverage: data.current.clouds, windDirection: data.current.wind_deg, windSpeed: data.current.wind_speed, windGust: data.current.wind_gust }) // res.render('{target page}, {{page element}: {YOUR DATA}});
});

app.listen(10063, () => {
   console.log('server started', '\n', 'if hosted locally, Navigate to http://localhost:10063');
});