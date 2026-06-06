import Card from 'react-bootstrap/Card'
import { Sun } from 'lucide-react'
import Data from "./Data/Data.json"
import { useState } from 'react'
const Weather = () => {
    const [country, setCountry] = useState("india")
    const [value, setValue] = useState()

    function HandleClick() {
        if (country === "") {
            alert("type any country")
        }
        const Asian = Data.find((item) =>
            item.country.toLowerCase().includes(country.toLowerCase())
        )
        if (Asian) {
            setValue(Asian)
        }
        else {
            alert("country not found");
        }
    }
    return (
        <>
            {/* nav */}
            <div className='row m-1'>
                <div className='col-lg-12 col-md-12 col-sm-12 d-flex align-items-center gap-2 p-3'>
                    <div>
                        <Sun size={30} color='orange' />
                    </div>
                    <div>
                        <h4 className='mb-0 m-1 text-white'>Weather App</h4>
                    </div>
                </div>
            </div>
            {/* nav */}

            {/* hero */}
            <div className='row m-1'>
                <div className='col-lg-12 col-md-12 col-sm-12  text-center gap-2 p-3'>
                    <h2 className='mb-0 m-1 text-white'>How The Sky Looks Today?</h2>
                </div>
            </div>
            <div className='row d-flex justify-content-center align-items-center m-2'>
                <div className='col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center'>
                    <input
                        type="text"
                        className='form-control '
                        placeholder='Enter Asian country Name' value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="col-lg-2 col-md-12 col-sm-12 m-2 d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary w-100' onClick={HandleClick}>Get Weather</button>
                </div>
            </div>
            {/* hero */}

            <div className="row justify-content-around ">

                {/* Country-°C */}
                <div className="col-lg-5 col-md-10 col-sm-12">
                    <div style={{ width: '100%' }} className='p-4 d-flex justify-content-center align-items-center'>
                        <Card style={{ width: '100%', backgroundColor: '#242540', color: 'white' }}>
                            <Card.Body className='d-flex flex-column flex-md-row justify-content-around align-items-center gap-3 gap-md-5 text-center text-md-start'>
                                <Card.Title>
                                    {value?.country || "Country"}
                                </Card.Title>

                                <Card.Title>
                                    {value?.temperature || "Temperature"}°C
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* Country-°C */}

                    <div className="row">
                        {/* country-details */}
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className='p-3 d-flex flex-wrap  gap-3 align-items-center'>
                                <Card style={{ minWidth: "120px", backgroundColor: '#242540', color: 'white', flex: "0 0 auto" }}>
                                    <Card.Body>
                                        <Card.Title>Humidity</Card.Title>
                                        <Card.Title >{value?.humidity || "10"}%</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ minWidth: "120px", backgroundColor: '#242540', color: 'white', flex: "0 0 auto" }}>
                                    <Card.Body>
                                        <Card.Title >Condition</Card.Title>
                                        <Card.Title>{value?.weather_condition || "sunny"}</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ minWidth: "120px", backgroundColor: '#242540', color: 'white', flex: "0 0 auto" }}>
                                    <Card.Body>
                                        <Card.Title>Wind</Card.Title>
                                        <Card.Title >{value?.wind_kmh || "10"}Km/h</Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card style={{ minWidth: "120px", backgroundColor: '#242540', color: 'white', flex: "0 0 auto" }}>
                                    <Card.Body>
                                        <Card.Title>Precipitation</Card.Title>
                                        <Card.Title>{value?.precipitation_mm || "0"}mm</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <hr className='' style={{ color: 'white' }} />
                        </div>
                        {/* country-details */}

                        {/* Daily-forecast */}
                        <div className="col-lg-12 col-md-12 col-sm-12 text-white">
                            <h4 className='text-center'>Daily Forecast</h4>
                            <div className='p-3 d-flex flex-wrap gap-3 align-items-center'>
                                {value?.daily_forecast?.map((items, index) =>
                                    <Card key={index} style={{ minWidth: "120px", backgroundColor: '#242540', color: 'white', flex: "0 0 auto" }}>
                                        <Card.Body>
                                            <Card.Title>{items.day}</Card.Title>
                                            <Card.Title>{items.high}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                )}

                            </div>
                            <hr className='' style={{ color: 'white' }} />
                        </div>
                        {/* Daily-forecast */}
                    </div>
                </div>

                {/* Hourly-forecast */}
                <div className="col-lg-5 col-md-10 col-sm-12 gap-2 p-4 d-flex flex-wrap justify-content-center align-items-center">
                    <h4 className='text-white'>Hourly forecast</h4>
                    {
                        value?.hourly_forecast?.map((items, index) => (
                            <Card
                                key={index}
                                style={{
                                    backgroundColor: "#242540",
                                    color: "white",
                                    width: "100%"
                                }}
                                className=''
                            >
                                <Card.Body className='gap-3 d-flex flex-wrap justify-content-center align-items-center'>
                                    <div className='p-3 d-flex flex-sm-row justify-content-around align-items-center HourlyWeather w-100 gap-2 text-center'>
                                        <Card.Title>{items.icon}</Card.Title>
                                        <Card.Title>{items.time}</Card.Title>
                                        <Card.Title>{items.temp}</Card.Title>
                                    </div>
                                </Card.Body>
                            </Card>

                        ))
                    }
                </div>
                {/* Hourly-forecast */}

            </div>
        </>
    )
}

export default Weather
