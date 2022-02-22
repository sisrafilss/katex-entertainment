import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../data/logo.png";

const SEO = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta
                name="description"
                content="Hope – Health &amp; Medical React JS Template"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <meta
                property="og:title"
                content="Bringing Entertainment at your Fingertips"
            />
            <meta property="og:type" content="article" />
            <meta
                property="og:image"
                content="https://i.ibb.co/MnXxxWF/logo.png"
            />
            <meta
                property="og:url"
                content="https://katex-entertainments.netlify.app/"
            />
            <meta name="twitter:card" content={logo} />
            <meta
                property="og:description"
                content="Bringing Entertainment at your Fingertips"
            />
            <meta property="og:site_name" content="Katex Entertainment" />
            <meta name="twitter:image:alt" content="Katex Entertainment Logo" />
        </Helmet>
    );
};

SEO.propTypes = {
    title: PropTypes.string,
};

export default SEO;
