import React from "react";
import "./homestyle.css";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <div>
          <center>
            <h1>Who I'm ?</h1>
          </center>
          <hr />
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "blue",
            margin: "0",
            borderRadius: "20px",
          }}
        >
          <div
            className="row"
            style={{ paddingTop: "30px", paddingBottom: "80px" }}
          >
            <div
              className="col-xs-12 col-md-6"
              style={{
                textAlign: "center",
                paddingTop: "0px",
                color: "white",
              }}
            >
              <h1>Hiii My name is Farzana</h1>
              <h3>
                I am a Full Stack Developer working from last 3 years and I have
                worked on many techonlogies and exploring more technologies to
                work on.
              </h3>
            </div>
            <div
              className="col-xs-12 col-md-6"
              style={{ textAlign: "center", paddingTop: "20px" }}
            >
              <img src="mypic.jpg" alt="pic" height="230" />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <center>
            <h1>My Projects</h1>
          </center>
          <hr />
          <div
            className="row"
            style={{ paddingTop: "20px", paddingBottom: "10px" }}
          >
            <div className="col-md-6 col-xs-12" style={{ textAlign: "center" }}>
              <h4>
                I have done a lot of projects till now. Click the below link to
                view my live projects!!!!
              </h4>
              <h3>
                <a href="https://my--projects.herokuapp.com/projects.html">
                  Projects
                </a>
              </h3>
            </div>
          </div>
        </div>
        <div className="container-fluid" style={{ marginTop: "40px" }}>
          <center>
            <h1>Technologies Worked On</h1>
          </center>
          <hr />
          <div
            className="row"
            style={{
              paddingTop: "80px",
              paddingBottom: "80px",
              textAlign: "center",
            }}
          >
            <div className="col-xs-12 ">
              <img src="logo192.png" alt="project" />
              <h2>ReactJs</h2>
            </div>
            <div className="col-xs-12 ">
              <img src="nodelogo.png" alt="project" />

              <h2>NodeJs</h2>
            </div>
            <div className="col-xs-12 ">
              <img src="phplogo.png" alt="project" />

              <h2>PHP</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
