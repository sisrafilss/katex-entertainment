import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative">
                {/* <img
                    className="footer-shape"
                    src={process.env.PUBLIC_URL + "/images/footer/1.png"}
                    alt="shape"
                /> */}
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-md-4 col-sm-12 mb-7">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-5"
                                    image={`${process.env.PUBLIC_URL}/images/logo/logo-footer.png`}
                                />
                                <p className="mb-2">
                                    Bringing Entertainment at your Fingertips
                                    through seamless streaming services.
                                </p>
                                <p className="mb-4">
                                    Feel free to message us for any queries:{" "}
                                    <ul className="address">
                                        <li>
                                            <a
                                                className="address-link"
                                                href="mailto:support@katexentertainment.com"
                                            >
                                                support@katexentertainment.com
                                            </a>
                                        </li>{" "}
                                    </ul>
                                </p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://facebook.com/Katex-Entertainment-Ltd-103731102248863/"
                                            icon="icofont-facebook"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://instagram.com/katex_entertainment/"
                                            icon="icofont-instagram"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://twitter.com/"
                                            icon="icofont-twitter"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://linkedin.com/company/katex-entertainment-ltd/"
                                            icon="icofont-linkedin"
                                        />
                                    </li>

                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.pinterest.com/katexentertainment/"
                                            icon="icofont-pinterest"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={process.env.PUBLIC_URL + "/"}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/about"
                                            }
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service"
                                            }
                                        >
                                            Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL + "/blog"
                                            }
                                        >
                                            Blog Post
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/contact"
                                            }
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <div>
                                    <h5 className="h5">
                                        Corporate Head Office
                                    </h5>
                                    <p>
                                        House#424, Road#07, DOHS Baridhara,{" "}
                                        <br />
                                        Dhaka, Bangladesh <br />
                                        <ul className="address">
                                            <li>
                                                <a
                                                    className="address-link"
                                                    href="tel:+ +88-02-8411765"
                                                >
                                                    +88-02-8411765
                                                </a>
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                                <div>
                                    <h5 className="h5">German Office</h5>
                                    <p>
                                        Stellwerk, str.48, 85386 <br />
                                        Moosburg, Germany <br />
                                        <ul className="address">
                                            <li>
                                                <a
                                                    className="address-link"
                                                    href="tel:+4915783801162"
                                                >
                                                    Mobile Number:
                                                    +4915783801162
                                                </a>
                                            </li>{" "}
                                        </ul>
                                    </p>
                                </div>

                                {/* <ul className="address">
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+12354569874"
                                        >
                                            +12354 569 874
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="tel:+98745612398"
                                        >
                                            +98745 612 398
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:info@example.com"
                                        >
                                            info@example.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="address-link"
                                            href="mailto:info@example.com"
                                        >
                                            www.example.com
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; 2022{" "}
                                    {/* <i className="icofont-heart-alt"></i> */}
                                    By{" "}
                                    <a
                                        href="https://katex-entertainments.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Katex Entertainment LTD
                                    </a>
                                    , All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

{
    /* <div className="col-lg-2 col-sm-6 mb-7">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/2`
                                            }
                                        >
                                            Business Plan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/3`
                                            }
                                        >
                                            Creative Strategy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/4`
                                            }
                                        >
                                            Branding{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/1`
                                            }
                                        >
                                            Digital Solution
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/5`
                                            }
                                        >
                                            Marketing Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="footer-link"
                                            to={
                                                process.env.PUBLIC_URL +
                                                `/service-details/6`
                                            }
                                        >
                                            Campaign &amp; PR
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */
}
