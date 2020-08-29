import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// // Seo reasons
import { Helmet } from "react-helmet";
const BonusPage = () => {
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
  console.log("Welcome To bonus page... ");
  console.log("articles ", articles);
  const articleContainer = articles.length ? (
    articles.map((article) => {
      return (
        <div className="news_container" key={article.id}>
          <div className="newContainerFlex">
            <div className="new_image_container">
              <img src={article.articleLogo} alt="" />
            </div>

            <div className="new_content_container">
              <span className="mini_title_container">
                <b>{article.name}</b>
              </span>
              <p
                dangerouslySetInnerHTML={{
                  __html: article.content.slice(0, 300),
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
          Vad är syftet med olika online spelbonusar? | Casinoblogg.se
        </title>
        <meta
          name="description"
          content="Casinobolag erbjuder bonus, oftast i form av en välkomstbonus, och
          Free Spins för att få in nya kunder. Men storleken på bonusarna kan variera rätt kraftigt."
        />
      </Helmet>
      <div className="container">
        <h1 className="mt-5 text-center">Casinobonusar</h1>
        <p className="text-center">
          De flesta nätcasinona erbjuder olika sorters{" "}
          <b style={{ color: "#414141" }}>casinobonusar</b> och dessa
          erbjudanden finns under en begränsad tid tills de ersätts av nya{" "}
          <b style={{ color: "#414141" }}>casinokampanjer.</b>. Vad de olika
          erbjudandena innehåller är upp till varje casinobolag att bestämma.
          <br />
          Om bonusarna är viktiga för spelarna lönar det sig att lägga ner lite
          tid på att se över de olika{" "}
          <b style={{ color: "#414141" }}>bonuserbjudandena</b> då de skiljer
          sig åt en hel del.
        </p>
        <hr />
        <h4 className="mt-5">Vad är syftet med casinobonusar?</h4>
        <p>
          Det råder stor konkurrens om kunderna inom casinovärlden och de flesta
          casinona vill locka till sig så många nya kunder som möjligt genom att
          ge en häftig bonus i form av en{" "}
          <b style={{ color: "#414141" }}>välkomstbonus.</b> Ju generösare en
          bonus är desto fler spelare lockas till casinobolagets sajt.
          <br />
          <br />
          Och självklart är casinospelarna fullt medvetna om bonuskriget och
          därför kollar de noga upp de olika bonuserbjudandena innan de{" "}
          <b style={{ color: "#414141" }}>registrerar sig på ett casino.</b>
          Det gäller ju att få till en så bra deal som möjligt. Casinobonusen
          ger spelaren chans att spela för mer än det egna insatta beloppet,
          vilket är till spelarens fördel eftersom fler spel innebär större
          chans att vinna.
        </p>
        <br />
        {error ? error : null}
        {loading ? "Loading" : articleContainer}
        <Link to="/casino-spel-slots"> Se fler </Link>
        <h4 className="mt-5">Vad är en casino välkomstbonus?</h4>
        <p>
          En välkomstbonus kan bestå av att spelbolaget matchar spelarens{" "}
          <b style={{ color: "#414141" }}>första insättning.</b>
          Casinobolaget kan till exempel matcha en insättning på 1 000 kr med
          100 % vilket betyder att spelaren har 2 000 kr att spela för i
          slutändan. På ett sätt kan man säga att spelaren kan spela{" "}
          <b style={{ color: "#414141" }}>casino gratis</b> med den givna
          bonusen. Med en större spelbudget kan man t. ex. välja att öka på
          insatsen, vilket leder till att vinsterna är också större eller välja
          att spela en längre tid med mindre insatser, men med mindre vinster.
        </p>

        <h4 className="mt-5">Casino Free Spins</h4>
        <p>
          En annan bonus som erbjuds flitigt av casinobolag är{" "}
          <a href="https://www.svenskkasinon.se/free-spins/">Free Spins,</a> som
          är gratis sn urr på spelautomater eller så kallade slots. Ofta delas
          de ut av casinobolaget som ett sätt att locka kunderna att spela på
          vissa casinospel om casinobolaget väljer ut som ett sätt att
          marknadsföra vissa spel. Även Free Spins har oftast omsättningskrav,
          så det innebär att spelaren m åste spela vinsterna ett visst antal
          gånger innan de är uttagsbara.
        </p>

        <h4 className="mt-5">
          Finns det casino online med välkomstbonus utan insättningskrav?
        </h4>
        <p>
          Det finns en del casinokampanjer som ger spelaren en välkomstbonus
          utan krav på insättning. Det enda kravet är att kunden registrerar e
          tt konto hos casinobolaget och sedan sätts bonusen in på spelkontot
          som hen kan spela för. Dessa bonusar är inte på långa vägar så stora
          som bonusar med insättningskrav är.
          <br /> <br />
          Bonus utan insättningskrav är ett utmärkt sätt att bekanta sig med
          casinot och samtidigt spela utan att riskera sina egna pengar. Bonusar
          utan insättningskrav dyker inte upp så ofta och när de väl gör det kan
          det vara så att spelaren måste ange en speciell bonuskod vid
          registreringen och sedan sätts bonusen direkt in på spelkontot.
        </p>

        <h4 className="mt-5">Vad är ett casino omsättningskrav?</h4>
        <p>
          Bonuspengarna som spelaren får i välkomstpresent är ofta, med några
          speciella undantag, knutna till{" "}
          <b style={{ color: "#414141" }}>ett v isst antal omsättningskrav</b>{" "}
          som går ut på att spelaren måste spela och omsätta pengarna och de
          vinster som genereras med bonuspengarna ett visst antal gånger innan
          de kan tas ut. Spelföretaget bestämmer hur stora omsättningskraven är
          och när <b style={{ color: "#414141" }}>casinots omsättningskrav</b>{" "}
          är uppnått, så är det först då som spelaren kan ta ut de vinster som
          har gjorts med bonuspengarna.
          <br /> <br />
          De allra flesta bonusarna har en tidsgräns. Om spelaren inte har
          använt bonusen eller omsatt dem tillräckligt många gånger inom den
          satta tidsramen förfaller alla bonusen och även vinsterna som har
          gjorts med de bonusar som redan är omsatta.
        </p>
      </div>
    </React.Fragment>
  );
};
export default BonusPage;
