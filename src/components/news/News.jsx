import { useState } from "react";
import NewsItem from "../newsItem/NewsItem";
import "./news.scss";

const News = () => {
  const [isActive, setIsActive] = useState(true);

  const toggleView = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const news = [
    {
      title: "Graphic Designing Useful Tips & Best Practices",
      stats: "Design / Sept 12, 2022",
      img: "src/assets/news-card-1.jpg",
      isExtra: false,
    },
    {
      title: "Best way to do branding of digital products ",
      stats: "Branding   /   Sept 12, 2022",
      img: "src/assets/news-card-2.jpg",
      isExtra: false,
    },
    {
      title: "Top 10 graphic designs review in 2024 (updated)",
      stats: "Graphic Design   /   Sept 12, 2022",
      img: "src/assets/news-card-3.jpg",
      isExtra: true,
    },
    {
      title: "Graphic Designing Useful Tips & Best Practices",
      stats: "Design / Sept 12, 2022",
      img: "src/assets/news-card-1.jpg",
      isExtra: true,
    },
  ];
  return (
    <div className="news-container">
      <div className="news-heading">Latest News</div>
      <div className="small-heading">
        Get to know more about the offering and latest news of our product.
      </div>
      <div className="wrapper">
        {news.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            stats={news.stats}
            img={news.img}
            isActive={isActive}
            isExtra={news.isExtra}
          />
        ))}
      </div>
      <div className="more-btn" onClick={toggleView}>
        {isActive ? "VIEW ALL BLOGS" : "VIEW FEW BLOGS"}
      </div>
    </div>
  );
};

export default News;
