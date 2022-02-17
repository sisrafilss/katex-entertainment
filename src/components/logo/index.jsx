import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.css";

const Logo = ({ image, classOption }) => {
    return (
        <Link className={`${classOption}`} to={process.env.PUBLIC_URL + "/"}>
            <img
                className="logo-main"
                src={process.env.PUBLIC_URL + image}
                style={{ height: "40px", width: "40px" }}
                alt="Logo"
            />
            <span className="logo-text">Katex Entertainment</span>
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
