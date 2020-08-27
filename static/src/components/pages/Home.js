import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// // Seo reasons
import { Helmet } from "react-helmet";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`/api/articles/`)
      .then((response) => {
        setLoading(false);
        // setArticles(response.data.slice(4, 9));
        setArticles(response.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("We have an error with API");
      });
  }, []);
  console.log("Yossi ");
  console.log("articles ", articles);
  const articleContainer = articles.length ? (
    articles.map((article) => {
      return (
        <div className="news_container" key={article.id}>
          <div className="newContainerFlex">
            <div className="new_image_container">
              <img src={article.image} alt="" />
            </div>

            <div className="new_content_container">
              <span className="mini_title_container">
                <b>{article.name}</b>
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: article.content.slice(0, 150),
                }}
              ></p>
              ...
              <a className="read_more_button" href={"/artikel-" + article.slug}>
                Läs mera
              </a>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div></div>
  );
  return (
    <React.Fragment>
      <Helmet>
        <title>
          Casinonyheter online: nytt från spelvärlden | Casinoblogg.se
        </title>
        <meta
          name="description"
          content="På Casinobloggen.se finns nyheter från casino- och spelvärlden. Här
          finns allt möjligt relaterat till svenska spelmarknaden; intressanta artiklar & guider."
        />
      </Helmet>
      <div className="container  p-3">
        <h1 className="text-center">Välkommen till casino blogg.se!</h1>
        <hr />
        <p className="text-center">
          Vi strävar efter att ge tillgång till senaste casino nyheter i form av
          recensioner, artiklar, casino online guider och allt annat smått och
          gott från online casinovärlden. Det händer dagligen någonting inom
          spelvärlden och tyvärr finns det ingen möjlighet för oss att publicera
          allting, så vi kommer istället att välja de nyheter som vi tror
          intresserar er mest och som ni kan ta del av via era mobila enheter.
        </p>
        <p className="text-center">
          Vi strävar efter att ge tillgång till senaste casino nyheter i form av
          recensioner, artiklar, casino online guider och allt annat smått och
          gott från online casinovärlden. Det händer dagligen någonting inom
          spelvärlden och tyvärr finns det ingen möjlighet för oss att publicera
          allting, så vi kommer istället att välja de nyheter som vi tror
          intresserar er mest och som ni kan ta del av via era mobila enheter.
        </p>
        <b className="m-0">Senaste Nyheter</b>
        <hr className="m-0" />
        {error ? error : null}
        {loading ? "Loading" : articleContainer}
        <Link to="/casino-bonus"> Se fler </Link>
        <h4 className="mt-5">Hur många online casino finns det?</h4>
        <p>
          Det finns ett{" "}
          <b style={{ color: "#414141" }}>stort antal casinon på nätet</b> och
          det tar alldeles för lång tid att gå igenom dem alla innan man hittar
          sin egen favorit.
          <br />
          Vi vill underlätta sökprocessen genom att ge så korrekt information
          som möjligt så att var och en kan{" "}
          <b style={{ color: "#414141" }}>
            välja det rätta casinot på nätet.
          </b>{" "}
          Med hjälp av aktuella artiklar får ni bl a tips om de senaste{" "}
          <b style={{ color: "#414141" }}>intressanta online spelen</b> och om
          online{" "}
          <b style={{ color: "#414141" }}>
            casinon som har snabba registreringar och uttag
          </b>{" "}
          som gör spelprocessen smidigare.
          <br />
          <br />
          Det vi kan säga är att det finns ett nätcasino för alla smaker och
          tycken och för att spelare ska kunna hitta sitt eget{" "}
          <b style={{ color: "#414141" }}>favoritcasino</b> försöker vi hjälpa
          till genom att ge så allsidig{" "}
          <b style={{ color: "#414141" }}>casinoinformation</b> som möjligt.
        </p>

        <h4 className="mt-5">Vilket är Sveriges bästa nätcasino?</h4>
        <p>
          Vid en snabb genomgång verkar det som om alla nätcasinona är likadana,
          men vid en närmare granskning ser man att det finns en hel del saker
          som skiljer sig åt.{" "}
          <a href="https://allacasinosajter.se/"> Alla online casinona </a> har
          koncentrerat sig på att vara bäst i någon speciell nisch.
          <br />
          <br />
          Eftersom spelare kan vara ute efter ett{" "}
          <b style={{ color: "#414141" }}>
            online casino utan omsättningskrav,
          </b>
          <b style={{ color: "#414141" }}> casino utan insättningskrav</b> eller{" "}
          <b style={{ color: "#414141" }}>nätcasino utan registrering</b> eller
          vill att nätcasinot ska ha ett{" "}
          <b style={{ color: "#414141" }}>stort spelutbud</b> för att det ska
          vara värt ett besöka, är det svårt att säga vilket online casino som
          är bäst på den svenska spelmarknaden. Det är helt enkelt upp till
          spelaren att bestämma vilket{" "}
          <b style={{ color: "#414141" }}>online casino som är bäst.</b>
        </p>
        <br />
      </div>
    </React.Fragment>
  );
};
export default Home;
