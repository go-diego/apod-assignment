import React from 'react'
import { Link } from "react-router-dom"
import "../Card/Card.css"

function Card(props) {
    const { id, src, thumbnail, mediaType, date, alt, copyright, details, onClick } = props;
 
    const imageSrc =
        <div className="card h-100">

            {mediaType === "image" ?

                <img id={id} src={src} className="card-img" alt={alt} data-image-copyright={copyright} data-image-details={details} data-image-date={date} />

                :

                <img id={id} src={thumbnail} className="card-img" alt={alt} data-image-copyright={copyright} data-image-details={details} data-image-date={date} />

            }

            <div className="card-img-overlay" >
                <p className=" card-img-overlay card-text ">{date}</p>
            </div>


            {/* having trouble with https://solarsystem.nasa.gov/gltf_embed/2381/ */}

        </div>;

    return (
        <div className="col " onClick={onClick} >
            
            <Link to="/imageDetails">
            {imageSrc}
            </Link>
        </div>

    );
}

export default Card;