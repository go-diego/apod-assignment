const axios = require("axios");
require("dotenv").config();
const APIKEY = process.env.API_KEY;
function getApodImages(req, res) {
    
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const today = year + '-' + month + '-' + day;

    const currentDateToCalcPast = new Date();
    const sixteenDaysAgo = currentDateToCalcPast.getDate() - 15;

    currentDateToCalcPast.setDate(sixteenDaysAgo);
    const pastSixteenDays = currentDateToCalcPast.toJSON().slice(0, 10);

    const queryUrl = "https://api.nasa.gov/planetary/apod?api_key="+`${APIKEY}`+"&start_date=" + `${pastSixteenDays}` + "&end_date=" + `${today}`+"&thumbs=True";
 
    axios.get(queryUrl).then((apodResponse) => {
        const descendingOrder = apodResponse.data.reverse();
        const finalData = descendingOrder.map((item) => {
                const { title, url, date, copyright, explanation, thumbnail_url, media_type } = item;
                return {
                    title,
                    urlImage: url,
                    date,
                    copyright,
                    explanation,
                    thumbnail: thumbnail_url,
                    media_type
                };
            })
        res.json(finalData);
    }).catch(err =>{
        console.log(err)
        res.status(500).end();
    });

}

module.exports = { getApodImages };