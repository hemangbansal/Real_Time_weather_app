import React from 'react'
import {useState, useEffect} from 'react'
import './css/style.css'
// not ./components/css/style.css as tempapp and css in same folder components

import Footer from './Footer'

const TempApp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("");

    useEffect( ()=> {
        const fetchApi = async ()=> {
            const url =  `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f987418a70c3346f32f6b11a6bdd7106&units=metric `;
            const response = await fetch( url );
            const responseJson = await response.json();
            console.log(responseJson);
            
            setcity(responseJson.main);
        }
        fetchApi();
    },[search])
    // cannot read property of main null
    // },[])
    

  return (
    <div className='box'>
        <div className='inputData'>
        <h2 className='tophead'>Live Weather Search</h2>
            <input type="search" 
            className='inputField'
            placeholder='Search'
            value={search}
            onChange={ (event)=>{
                setsearch(event.target.value);
            }}/>
        </div>
{/* flexbox ka size is fixed   due to nature of flexbox  content will adjust */}
        {!city ? (
            <p>No data found</p>
        ) : (<div>
            <div className='info'>
            <h2 className='location'>
            <i class="fa-sharp fa-solid fa-street-view"></i>{search}
            {/* public mai index.html mai fontAwesome daal do */}
            {/* <i class="fa-solid fa-street-view"></i> {city} */}
            </h2>
            <h1 className='temp'>
                {/* 53 °Cel */}
                {city.temp} °Cel
                {/* {city.main.temp} °Cel  as ab main pehle se hai in city*/}
            </h1>
            <h3 className='tempmin_max'> Max : {city.temp_min}°Cel | Min : {city.temp_max}°Cel</h3>
            {/* <h3 className='tempmin_max'> Max : 5.25°Cel | Min : 6°Cel</h3> */}
            <br />
            <h3>Humidity : {city.humidity}</h3>

        </div>

        {/* <div className='wave-one'></div>
        <div className='wave-two'></div>
        <div className='wave-three'></div> */}

        {/* <div> 
            <Footer></Footer>
        </div> */}
        {/* yeh footer tab dikhega jab site render hogi ie kuch input dalenge
         */}

        </div>
        )
        }
        <div> 
            <Footer/>
        </div>
    
    </div>
  )
}

export default TempApp