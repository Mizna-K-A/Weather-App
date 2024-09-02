import React from 'react'

const Just = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric').then(respose=>{
        respose.json().then(weather=>{
            console.log(weather);
            // allproducts.forEach(product=>{
            //     result.innerHTML += `
            //    <div class="col mb-5">
            //         <div class="card h-100 p-2">
            //             <!-- Product image-->
            //             <img height="200px" class="card-img-top" src=${product.image} alt="..." />
            //             <!-- Product details-->
            //             <div class="card-body p-4">
            //                 <div class="text-center">
            //                     <!-- Product name-->
            //                     <h5 class="fw-bolder">${product.name}</h5>
            //                     <!-- Product price-->
            //                     $ ${product.price}
            //                 </div>
            //             </div>
            //             <!-- Product actions-->
            //             <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            //                 <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
            //             </div>
            //         </div>
            //     </div>
            //     `
            // })
        })
    }).catch(reason=>{
        console.log(reason);
    })
  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="card d-flex align-items-center text-light" style={{height:'70vh',background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpg-xMojjW8vMseW6ztC1klRBuEAqLyaXdbQ&s")',backgroundSize:'cover'}}>
                <div className="card-body">
                    <h3 className="card-title">
                        Weather in {weather.name}, {weatherData.sys.country}
                    </h3>
                    <p className="card-text">
                        <span>Temperature:</span> {weatherData.main.temp}°C
                    </p>
                    <p className="card-text">
                        <span>Feels Like:</span> {weatherData.main.feels_like}°C
                    </p>
                    <p className="card-text">
                        <span>Minimum Temperature:</span> {weatherData.main.temp_min}°C
                    </p>
                    <p className="card-text">
                        <span>Maximum Temperature:</span> {weatherData.main.temp_max}°C
                    </p>
                    <p className="card-text">
                        <span>Pressure:</span> {weatherData.main.pressure}
                    </p>
                    <p className="card-text">
                        <span>Weather:</span> {weatherData.weather[0].description}
                    </p>
                    <p className="card-text">
                        <span>Humidity:</span> {weatherData.main.humidity}%
                    </p>
                    <p className="card-text">
                        <span>Wind Speed:</span> {weatherData.wind.speed} m/s
                    </p>
                    
                    <p className="card-text">
                        <span>Sea Level:</span> {weatherData.main.sea_level}
                    </p>
                    <p className="card-text">
                        <span>Ground Level:</span> {weatherData.main.grnd_level}
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Just