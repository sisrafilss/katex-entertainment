import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Katex Entertainment – Contact" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Contact us"
                        excerpt="Please reach to us for any queries"
                        image="./images/contact/contact-us.svg"
                    />
                    <ContactContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
