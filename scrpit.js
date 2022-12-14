// api url
const api_url = 
      "https://api.weather.gov/gridpoints/TOP/31,80/forecast";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
}
// Calling that async function
getapi(api_url);
