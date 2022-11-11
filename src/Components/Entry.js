
function Entry (props) {
    // console.log(props)

    return (
        <div className = "entry-container">
            <div className = "image-container">
                <img src={props.item.photo}/>
            </div>
            <div className = "right-container">
                <span className = "symbol-span">
                    <i className="fa-solid fa-location-dot"></i>
                </span>
                <span className = "location-span">
                    {props.item.location}
                </span>
                <span className = "google-span">
                    <a href={props.item.googleMapsLink}>View on Google Maps</a>
                </span>
                <h2>{props.item.name}</h2>
                <span className = "date-span">
                    {props.item.date}
                </span>
                <p className = "entry-paragraph">
                    {props.item.entry}
                </p>
            </div>
        </div>
    )

}


export default Entry