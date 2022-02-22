import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import Button from "../../components/button";
import SectionTitle from "../../components/section-title";

const AboutContainer = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row mb-n7 align-items-center">
                    <div className="col-xl-5 col-md-6 offset-xl-1 mb-7">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                subTitle="WHY CHOOSE US"
                                title="Best <span style='color:red'>
                                    Entertainment</span>
                                <br className='d-none d-xl-block' />
                                company in Town"
                            />
                            {/* <span className="date-meta">
                                Scince 2001 <span className="hr"></span>
                            </span> */}
                            {/* <p className="mb-5">
                                We are changing the trend of digital
                                entertainment by offering world class digital
                                media products. Our company is proud to be
                                backed by a very strong work force keeping us
                                sustainable over the years.
                            </p> */}
                            <p className="high-light mb-8">
                                We are changing the trend of digital
                                entertainment by offering world class digital
                                media products. Our company is proud to be
                                backed by a very strong work force keeping us
                                sustainable over the years.
                            </p>
                            {/* <Button
                                classOption="btn btn-lg btn-dark btn-hover-dark"
                                text="Learn more"
                                path="/about"
                            /> */}
                        </div>
                    </div>
                    <div className="col-xl-6 order-lg-first col-md-6 mb-7">
                        <div
                            className="about-photo scene text-center text-lg-left"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div>
                                <img
                                    src="./images/about/Why-choose-us-min.png"
                                    alt="about"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContainer;
