import React from "react";
import Newsletter from "../../../components/newsletter";
import SectionTitle from "../../../components/section-title";
import "./index.css";

const NewsletterArea = () => {
    return (
        <div className="news-letter-section section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        {/* <SectionTitle
                            classOption="title-section mb-10 text-center"
                            subTitle="NEWSLETTER"
                            title="Subscribe to our <span style='color:red'>Newsletter</span> and
                            get latest updates..."
                        /> */}

                        <div
                            id="new-letter-title-wrapepr"
                            className="title-section title-section mb-10 text-center"
                        >
                            <span className="sub-title">NEWSLETTER</span>
                            <h3 className="title">
                                Subscribe to our{" "}
                                <span style={{ color: "red" }}>Newsletter</span>{" "}
                                <br />
                                and get latest updates...
                            </h3>
                            {/* <p className="undefined"></p> */}
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-10 mx-auto">
                        <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterArea;
