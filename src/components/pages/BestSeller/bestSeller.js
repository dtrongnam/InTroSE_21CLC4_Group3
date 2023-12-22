import "./bestSeller.css";
import BestList from "./bestSellerList";

function BestSell() {
  return (
    <>
      <div className="ic-title">
        <div className="ic"></div>
        BEST SELLERS
      </div>
      <hr style={{ width: "1290px", marginTop: "30px" }}></hr>
      <hr
        style={{
          marginLeft: "65px",
          width: "130px",
          height: "5px",
          backgroundColor: "#eb5d44",
          border: "none",
          outline: "none",
          marginTop: "-13px",
        }}
      ></hr>
      <BestList></BestList>
    </>
  );
}

export default BestSell;
