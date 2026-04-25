import { useContext, useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">71 & Sunny, Inc. Downtown Condo Guys</h1>
          <p>
            Property management for Downtown San Diego condos, apartments, and
            rentals only. Find move-in ready units, set your budget, and
            contact our team instantly.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>Downtown Only</h1>
              <h2>San Diego citywide condo management</h2>
            </div>
            <div className="box">
              <h1>Fast Leasing</h1>
              <h2>Tenant-ready units and property support</h2>
            </div>
            <div className="box">
              <h1>Local Experts</h1>
              <h2>Downtown condo management specialists</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
