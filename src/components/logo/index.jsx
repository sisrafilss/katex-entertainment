import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const Logo = ({ image, classOption }) => {
    return (
        <Link
            className={`${classOption} d-flex align-items-center pt-1`}
            to={process.env.PUBLIC_URL + "/"}
        >
            <img
                className="logo-main logo-in-mobile"
                src={process.env.PUBLIC_URL + image}
                style={{ height: "40px", width: "40px" }}
                alt="Logo"
            />
            <span style={{ lineHeight: "1.1" }} className="logo-text">
                Katex Entertainment
            </span>
        </Link>
    );
};

Logo.propTypes = {
    image: PropTypes.string,
    classOption: PropTypes.string,
};

Logo.defaultProps = {
    classOption: "text-center",
};

export default Logo;
