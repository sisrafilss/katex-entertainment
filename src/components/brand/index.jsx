import PropTypes from "prop-types";
import "./index.css";

const Brand = ({ data }) => {
    return (
        <div className="single-brand" style={{ width: "100px !important" }}>
            <img
                style={{ width: "100px", height: "80px" }}
                src={process.env.PUBLIC_URL + data.image}
                alt="brand logo"
            />
        </div>
    );
};

Brand.propTypes = {
    data: PropTypes.object,
};

export default Brand;
