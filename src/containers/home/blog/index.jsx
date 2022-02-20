import React from "react";
import { Link } from "react-router-dom";
import BlogGrid from "../../../components/blog";
import Button from "../../../components/button";
import SectionTitleTwo from "../../../components/section-title-two";
import BlogData from "../../../data/blog.json";

const HomeBlog = () => {
    return (
        <div className="blog-section section-pb">
            <div className="container">
                {/* className="mt-lg-10 pt-lg-3 mb-10 mb-lg-0" */}
                {/* <Button
                        classOption="btn btn-lg btn-dark btn-custom-hover"
                        text="Read All Blogs"
                        path="/blog"
                    /> */}

                <div className=" d-flex justify-content-between">
                    <div>
                        <div className="title-section title-section mb-lg-10 pb-lg-1">
                            <span className="sub-title">BLOG POST</span>
                            <h3 className="title mb-lg-0">
                                Latest{" "}
                                <span style={{ color: "red" }}>Post</span>{" "}
                                <br /> from Blog
                            </h3>
                        </div>
                    </div>
                    <div>
                        <Button
                            classOption="btn btn-lg btn-dark btn-custom-hover mt-8 pt-4"
                            style={{ paddingTop: "10px !important" }}
                            text="See All"
                            path="/blog"
                        />
                    </div>
                </div>

                <div className="row mb-n7">
                    {BlogData &&
                        BlogData.slice(0, 3).map((single, key) => {
                            return (
                                <div
                                    key={key}
                                    className="col-lg-4 col-sm-6 mb-7"
                                >
                                    <BlogGrid
                                        classOption="null"
                                        key={key}
                                        data={single}
                                    />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
