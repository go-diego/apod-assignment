import React from "react";
import { makeAPODUrl } from "../../util/API/API";
import "../HomePage/HomePage.css";
import Card from "../Components/Card/Card";
import ForestWindow from "../../util/images/ForestWindow.jpg";
import Sky from "../../util/images/Sky.jpg";
import Nav from "../Components/Nav/Nav";
import useSWR from "swr";
import { format, subDays } from "date-fns";

const endDate = format(new Date(), "yyyy-MM-dd");
const startDate = format(subDays(new Date(), 15), "yyyy-MM-dd");

function HomePage() {
  const { data, error } = useSWR(
    makeAPODUrl({ start_date: startDate, end_date: endDate })
  );

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
          <h1>APOD</h1>
          <p className="lead">Select an Image Below for More</p>
        </main>
      </section>
      <section className="imgContainerApi" style={{ zIndex: "2" }}>
        <div className="blurredBackGround"></div>
        {error && <p>{error}</p>}
        {!data && <p>Loading...</p>}
        {data && (
          <div className="imgCards">
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 ">
              {data.reverse().map((image) => (
                <Card
                  id={image.title}
                  src={image.hdurl}
                  thumbnail={image.thumbnail_url}
                  mediaType={image.media_type}
                  date={image.date}
                  alt={image.title}
                  key={image.title}
                  copyright={image.copyright}
                  details={image.explanation}
                />
              ))}
            </div>
          </div>
        )}
      </section>
      <section className="imgContainerGalaxySky">
        <img
          id="GalaxySky"
          src={Sky}
          alt="GalaxySky"
          className="d-inline-block"
        />
      </section>
    </div>
  );
}

export default HomePage;
