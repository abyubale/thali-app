import { useDispatch } from "react-redux";
import { addItem } from "../AddSubItem/addSubSlice";
import PropTypes from "prop-types";
const ThaliCard = ({ title, description, category, price, id }) => {
  const dispatch = useDispatch();
  const imgSrc =
    title === "Chapati"
      ? `/AdobeStock_186324325.jpeg`
      : title === "Paneer Masala"
      ? `/AdobeStock_170878391.jpeg`
      : title === "Rice"
      ? `/cooked-rice-red-cup-placed-plywood-floor.jpg`
      : title === "Curd"
      ? `/turkish-yogurt-soup-wooden-table-flat-lay-traditional-thick-soup-made-from-best-dairy-products.jpg`
      : title === "Pickle"
      ? `/AdobeStock_201971237.jpeg`
      : title === "Sweet"
      ? `/AdobeStock_434936298.jpeg`
      : title === "Daal"
      ? `/AdobeStock_613998399.jpeg`
      : "";

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          paddingBottom: "20px",
          borderRadius: "20px",
          borderColor: "black",
          overflow: "hidden",
        }}
        className="d-flex flex-column justify-content-center align-items-center border border-2 border-black"
      >
        <div>
          <img src={imgSrc} width="400px" height="360px" />
        </div>

        <div style={{ paddingTop: "20px" }}>
          <h3>{title}</h3>
        </div>
        <div style={{ minHeight: "10%" }}>
          <p> {description} </p>
        </div>
        <div>
          <p>
            <span className="fs-5">Category :</span> {category}{" "}
          </p>
        </div>

        <button
          style={{
            width: "250px",
            backgroundColor: "green",
            padding: "10px",
            borderRadius: "15px",
            border: "none",
          }}
          className="d-block mt-4"
          onClick={() => {
            dispatch(addItem({ title, imgSrc, price, id }));
          }}
        >
          <div
            className=" d-flex justify-content-between align-items-center"
            style={{
              backgroundColor: "green",
              fontSize: "20px",

              textAlign: "center",
            }}
          >
            <div></div>
            <div className="text-white">
              <span> Add To Thali</span>
            </div>
            <div>
              <span className="text-white pe-2 ">₹ {price}</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

ThaliCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ThaliCard;
