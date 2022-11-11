
function Entry () {
    return (
        <div className = "entry-container">
            <div className = "image-container">
                <img src="./japan.jfif"/>
            </div>
            <div className = "right-container">
                <span className = "symbol-span">
                    <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className = "location-span">
                    Japan
                </span>
                <span className = "google-span">
                    <a href="">View on Google Maps</a>
                </span>
                <h2>Mount Fuji</h2>
                <span className = "date-span">
                    12 Jan, 2021 - 24 Jan, 2021
                </span>
                <p className = "entry-paragraph">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )

}


export default Entry