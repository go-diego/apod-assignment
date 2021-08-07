import React, { useEffect, useState } from 'react'
import "../../pages/ImageDetails/ImageDetails.css"
import { fetchSavedApod } from "../../util/API/API";
import Nav from '../Components/Nav/Nav'
function ImageDetails() {

    const [savedApod, setSaveApod] = useState({
        title: "",
        urlImage: "",
        date: "",
        copyright: "",
        explanation: "",
        thumbnail: "",
        media_type: ""
    });
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSavedApod().then(({ data }) => {
            setSaveApod(data.apod);
            setIsLoading(false)
        }).catch(error => {
            console.log(error);
            setIsLoading(false);
        });

    }, []);

    return (
        <div >

            <Nav
                navText={"Return to APOD"}
                alignText={"justify-content-center"}
                imageDetailsPageCondition={false}

            />

            <div className="container imageDetailsContainer bg-dark text-white text-center pt-5 vh-100
                mw-100">

                <h1>{savedApod.title}</h1>
                <h5 className="mt-3 mb-2lead">{savedApod.date}</h5>
                <main className="imgContainerDetailsPage  mx-auto  m-3">

                    <img src={savedApod.urlImage} alt={savedApod.alt} />

                </main>
                <p>copyright: {savedApod.copyright}</p>
                <section className="explanationSection">
                    <p className="lead">{savedApod.explanation}</p>
                </section >
            </div>

        </div>
    );
}

export default ImageDetails;