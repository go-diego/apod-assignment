import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import "../../pages/ImageDetails/ImageDetails.css";
import { makeAPODUrl } from "../../util/API/API";
import Nav from "../Components/Nav/Nav";

function ImageDetails() {
  const params = useParams();
  const { date } = params;
  const { data, error } = useSWR(makeAPODUrl({ date }));

  return (
    <div>
      <Nav
        navText={"Return to APOD"}
        alignText={"justify-content-center"}
        imageDetailsPageCondition={false}
      />

      <div
        className="container imageDetailsContainer bg-dark text-white text-center pt-5 vh-100
                mw-100"
      >
        {error && <p>Error: {error}</p>}
        {!data && <p>Loading...</p>}
        {data && (
          <>
            <h1>{data.title}</h1>
            <h5 className="mt-3 mb-2lead">{data.date}</h5>
            <main className="imgContainerDetailsPage  mx-auto  m-3">
              <img src={data.hdurl} alt={data.alt} />
            </main>
            <p>copyright: {data.copyright}</p>
            <section className="explanationSection">
              <p className="lead">{data.explanation}</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageDetails;
