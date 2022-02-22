import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
import "./index.css";

const BlogGrid = ({ data, classOption }) => {
    return (
        <div
            style={{
                maxWidth: "360px",
                minWidth: "360px",
                maxHeight: "215px",
                minHeight: "215px",
            }}
            className="blog-card"
        >
            <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>
                <div
                    style={{
                        maxWidth: "360px",
                        minWidth: "360px",
                        maxHeight: "215px",
                        minHeight: "215px",
                    }}
                    className={`thumb bg-light text-center ${classOption}`}
                >
                    <img
                        style={{
                            maxWidth: "360px",
                            minWidth: "360px",
                            maxHeight: "215px",
                            minHeight: "215px",
                        }}
                        src={`${process.env.PUBLIC_URL}/${data.media.gridImage}`}
                        alt="img"
                    />
                </div>
                <div className="blog-content">
                    <span className="blog-meta author">{data.author}</span>

                    <span className="separator">-</span>

                    <span className="blog-meta date">{data.date}</span>

                    <h3 className="title blog-title">{data.title}</h3>
                </div>
            </Link>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogGrid.defaultProps = {
    classOption: "thumb",
};

export default BlogGrid;
