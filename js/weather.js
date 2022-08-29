const API_KEY = "38b44048070ff55b5fdb7feced90da67"; 

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat);
    console.log(lng);
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(URL).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}   
function onGeoError(){
    alert("Can't find you. No weather for you!")
}


navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);



// https://api.openweathermap.org/data/2.5/weather?lat=37.5230224
// &lon=127.0407199&appid=38b44048070ff55b5fdb7feced90da67

