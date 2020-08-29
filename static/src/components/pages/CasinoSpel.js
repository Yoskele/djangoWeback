import React, { useState, useEffect } from "react";
import axios from "axios";

// Seo reasons
import { Helmet } from "react-helmet";

const CasinoSpel = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // Bring in the first 4 articles in the list from API.
  useEffect(() => {
    axios
      .get(`/api/articles/`)
      .then((response) => {
        setLoading(false);
        setArticles(response.data.slice(10, 14));
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("We have an error with API");
      });
  }, []);
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
                <b>{article.name}</b> <p>{article.created_at} </p>
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
        <title>Onlinespel på den svenska spelmarknaden | Casinoblogg.se</title>
        <meta
          name="description"
          content="Ta hjälp av Casinoblogg.se för att få information om allt som berör
          olika sorters online spel på den svenska spelmarknaden. Nya artiklar kommer ideligen upp."
        />
      </Helmet>
      <div className="container">
        <h1 className="mt-5 text-center">Casinospel online</h1>
        <p className="text-center">
          <b style={{ color: "#414141" }}>Casinospel online</b> är ett populärt
          nöje hos många och det är mycket tack vare{" "}
          <b style={{ color: "#414141" }}>nätcasinonas</b> breda spelsortiment,
          som möjliggjorts med samarbete med världens främsta spelleverantörer
          som NetEnt, Yggdrasil, Play n´Go och MicroGaming för att bara nämna
          några stycken.
          <br />
          <br />
          Alla casinobolag med självaktning har idag ett basutbud av olika spel
          som kunderna förväntar sig ska finnas på ett online casino. I det här
          utbudet tillhör självklart ett stort antal slots med olika teman och
          slots med progressiva jackpottar, olika bordsspel där online casino
          BlackJack, Roulette, Baccarat och Poker är självklara inslag, och
          dessa bordsspel måste även kunna spelas live. De senaste åren har
          betting på olika sporter blivit allt mer populärare och är nu ett
          vanligt inslag hos casinobolagen.
        </p>

        <br />
        {articleContainer}
        <br />
        <h4 className="mt-5">Casino online 2020</h4>
        <p>
          Utbudet av{" "}
          <b style={{ color: "#414141" }}>nätcasinon online år 2020</b> har
          aldrig varit så omfattande som det är nu och de casinospel som erbjuds
          ger <b style={{ color: "#414141" }}>häftiga spelupplevelser</b> som
          det är lätt att leva in sig i tack vare grafiken. Men tro inte att det
          är enbart <b style={{ color: "#414141" }}>nya casinospel</b> som är på
          spelarnas favoritlistor utan där finns även äldre spel, som har
          underhållit spelare under flera år.
          <br />
          <br />
          För att kunna konkurrera på spelmarknaden håller casinona stenhård
          koll på vilka casinospel som släpps ut på marknaden och de spelbolag
          som är en av de första med att erbjuda ett spel, som senare visar sig
          bli en hit bland spelarna, får en enorm publicitet.
          <br />
          <br />
          Som du säkert har förstått så är online spelmarknaden helt annorlunda
          idag jämfört med tiden då gammaldags spelautomater, där spelaren drog
          i en spak och några enkla symboler snurrade runt på automatens skärm,
          var inne. Nu för tiden är utbudet mycket mer sofistikerat och många
          spel är animerade och har medryckande musik i bakgrunden och i de
          olika live bordsspelen kan spelarna chatta med den levande croupiern
          och de andra spelarna som deltar i bordsspelet. För de som älskar
          betting kan man med dagens teknik befinna sig långt från de spelade
          matcherna och ändå vara med och betta under pågående matcherna.
        </p>
        {error ? error : null}
        {loading ? "Loading" : articleContainer}
        <h4 className="mt-5"> Casinospel utan registrering</h4>
        <p>
          Det fina med många casinobolag är att de tillåter spelare att{" "}
          <b style={{ color: "#414141" }}>demospela gratis</b> utan att behöva
          registrera sig på sajten. På detta sätt kan spelaren se om slotet är
          ett spel som hen skulle vilja satsa pengar på. Spelen kan inte
          demospelas till fullo utan endast en liten del, men ändå tillräckligt
          för att få en uppfattning om innehåll, design och speleffekter.
        </p>
        <h4 className="mt-5">Spela casinospel i mobilen </h4>
        <p>
          En del <b style={{ color: "#414141" }}>casinosajter</b> har appar som
          spelaren kan ladda ner för att spelen ska fungera optimalt på mobilen
          och på iPaden. Men med dagens teknik fungerar de flesta
          casinosajternas spel väl på mobila enheter och det behövs inga
          nerladdade appar.
        </p>
      </div>
    </React.Fragment>
  );
};
export default CasinoSpel;
