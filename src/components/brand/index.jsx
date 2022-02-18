import PropTypes from "prop-types";

const Brand = ({ data }) => {
    return (
        <div className="single-brand">
            <img
                style={{ width: "200px", height: "120px" }}
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
