import "./newsItem.scss";

const NewsItem = ({ title, stats, img, isActive, isExtra }) => {
  return (
    <div className={`news-card ${isActive && isExtra ? "closed" : ""}`}>
      <div className="news-img-wrapper">
        <img src={img} alt="Graphic Designing Useful Tips & Best Practices" />
      </div>
      <div className="news-head-wrapper">
        <h5 className="news-stats">{stats}</h5>
        <h4 className="news-head">{title} </h4>
      </div>
    </div>
  );
};

export default NewsItem;
