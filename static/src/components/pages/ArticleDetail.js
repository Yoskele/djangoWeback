import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ArticleDetial = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/articles/${props.match.params.slug}/`)
      .then((response) => {
        setLoading(false);
        setArticle(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setError("We have an error with API ");
      });
    axios.get(`/api/articles/`).then((response) => {
      setLoading(false);
      let list = response.data;
      const newList = list.filter(
        (item) => item.slug !== props.match.params.slug
      );
      setArticles(newList);
    });
  }, [props.match.params.slug]);

  const articleContainer = articles.length ? (
    articles.map((article) => {
      return (
        <div className="news_container " key={article.id}>
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
              <Link
                className="read_more_button"
                to={"/artikel/" + article.slug}
              >
                Läs mera
              </Link>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div></div>
  );

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div className="container">
          <br />
          <h1> {article.name}</h1>
          <img
            src={article.image}
            alt=""
            style={{ width: "290px" }}
            className="float-right"
          />
          <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
        </div>
      )}
      {error ? error : null}
      <br />
      <br />
      <div className="container mt-5">{articleContainer}</div>
    </div>
  );
};

export default ArticleDetial;
