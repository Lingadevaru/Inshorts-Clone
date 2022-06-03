import React from "react";
import { Container } from "@mui/material";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, setLoadmore, loadmore }) => {
  //console.log(newsArray.length)

  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use Inshorts App on your smartphone.
          </span>
          <div className="googleStore">
          <img
            style={{ cursor: "pointer" }}
            src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_playstore_google-512.png"
            height="40"
            alt="Google Playstore"
          />
          
          <img
            style={{ cursor: "pointer" }}
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-512.png"
            height="40"
            alt="Apple Playstore"
          />
          </div>
        </div>

        {newsArray && newsArray.length
          ? newsArray.map((newsItem) => (
              <NewsCard newsItem={newsItem} key={newsItem.title} />
            ))
          : null}

        {loadmore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadmore(loadmore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
