import React from "react";

const CallToAction = () => {
    return (
        <div style={styles.ctaContainer}>
            <div className="container">
                <p style={styles.p}>Email: support@designhubtechnologies.com</p>
            </div>
        </div>
    );
};

export default CallToAction;

const styles = {
    ctaContainer: {
        backgroundColor: "rgb(166, 22, 22)",
        height: "20px",
        width: "100%",
        marginTop: "-20px",
        padding: "7px 0px 35px 0px",
        // textAlign: "center",
    },
    p: {
        fontWeight: 500,
        marginTop: "3px",
        color: "#fff",
        paddingLeft: "3px",
    },
    icon: {
        // fontSize: "30px",
        color: "#fff",
    },
};
