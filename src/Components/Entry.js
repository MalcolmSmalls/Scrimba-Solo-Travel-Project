
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
            </div>
        </div>
    )

}


export default Entry