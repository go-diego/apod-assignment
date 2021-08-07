import React, { useEffect, useState } from 'react'
import { fetchApodImages, saveApod } from "../../util/API/API";
import "../HomePage/HomePage.css"
import Card from "../Components/Card/Card"
import ForestWindow from "../../util/images/ForestWindow.jpg"
import Sky from "../../util/images/Sky.jpg"
import Nav from "../Components/Nav/Nav"
function HomePage() {

    const [apodImages, setApodImagess] = useState([]);

    const handleApodSave = async (apod) => {

        try {
             await saveApod(apod)


        }
        catch (error) {
            console.log(error)

        }

    };

    useEffect(() => {
        fetchApodImages().then(({ data }) => {
            setApodImagess(data)

        });
    }, []);

    return (

        <div className="wrapper">
            <Nav
                navText={"TheGrandUniverse"}
                alignText={"justify-content-center"}
                imageDetailsPageCondition={true}
            />
            <section className="imgContainer">

                <img
                    className="imgTreeBackGround img-fluid"
                    src={ForestWindow}
                    alt="Forest-Sky"
                />
                <main className="titleHeaderAPOD container text-wrap text-break">
                    <h1 >
                        APOD
                    </h1>
                    <p className="lead">
                        Select an Image Below for More
                    </p>
                </main>

            </section>
            <section className="imgContainerApi" style={{ zIndex: "2" }}>
                <div className="blurredBackGround"></div>
                <div className="imgCards">
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 ">
                        {apodImages.map((images) => (

                            <Card
                                id={images.title}
                                src={images.urlImage}
                                thumbnail={images.thumbnail_url}
                                mediaType={images.media_type}
                                date={images.date}
                                alt={images.title}
                                key={images.title}
                                copyright={images.copyright}
                                details={images.explanation}
                                onClick={() => handleApodSave(images)}
                            />


                        ))}
                    </div>s
                </div>
            </section>
            <section className="imgContainerGalaxySky">
                <img id="GalaxySky"
                    src={Sky}
                    alt="GalaxySky"
                    className="d-inline-block" />

            </section>

        </div>

    );
}

export default HomePage;