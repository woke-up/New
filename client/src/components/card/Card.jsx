import { Link } from "react-router-dom";
import "./card.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Card({ item }) {
  const { currentUser } = useContext(AuthContext);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    try {
      await apiRequest.post("/users/save", { postId: item.id });
      setIsSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  const description = item.postDetail?.desc
    ? item.postDetail.desc.replace(/<[^>]+>/g, "")
    : "No description available.";
  const excerpt = description.length > 120 ? `${description.slice(0, 120)}...` : description;

  return (
    <div className="card">
      <Link to={`/post/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt={item.title} />
      </Link>
      <div className="textContainer">
        <div className="topRow">
          <span className="tag">{item.property}</span>
          <span className="tag rent">{item.type === "rent" ? "For Rent" : "For Sale"}</span>
        </div>
        <h2 className="title">
          <Link to={`/post/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="description">{excerpt}</p>
        <p className="price">${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bed</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bath</span>
            </div>
            {item.postDetail?.size && (
              <div className="feature">
                <img src="/size.png" alt="" />
                <span>{item.postDetail.size} sqft</span>
              </div>
            )}
          </div>
          <div className="icons">
            <div
              className={`icon ${isSaved ? "saved" : ""}`}
              onClick={handleSave}
            >
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
