import React from 'react'
import './Banner.css';


function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://icdn2.digitaltrends.com/image/digitaltrends/netflix-global-expansion-header-1200x630-c-ar1.91.png")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    Test description
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
