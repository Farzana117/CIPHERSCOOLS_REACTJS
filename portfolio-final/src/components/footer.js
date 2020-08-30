import React from "react";
//import './homestyle.css';
class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          className="container-fluid"
          style={{
            marginTop: "30px",
            backgroundColor: "blue",
            borderRadius: "20px",
            height: "400px",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "30px", paddingBottom: "150px" }}
          >
            <div
              className="col-xs-12 col-md-6"
              style={{
                textAlign: "center",
                paddingTop: "20px",
                color: "white",
              }}
            >
              <h1>Get IN Touch</h1>
              <h3>
                You can mail me at 99farzanask@gmail.com or open contact me
                page.
              </h3>
            </div>
            <div
              className="col-xs-12 col-md-6"
              style={{
                paddingTop: "40px",
                paddingLeft: "80px",
                color: "white",
              }}
            >
              <center>
                <h4>
                  <a href="https://github.com/Farzana117">
                    <span
                      className="fa fa-github-square"
                      style={{ color: "white" }}
                    >
                      Github
                    </span>
                  </a>
                </h4>
                <h4>
                  <a href="https://www.linkedin.com/in//farzana4">
                    <span
                      className="fa fa-linkedin-square"
                      style={{ color: "white" }}
                    >
                      Linkedin
                    </span>
                  </a>
                </h4>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
