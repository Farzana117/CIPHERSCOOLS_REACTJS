import React from "react";
//import './homestyle.css';
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
    };
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row"
            style={{ paddingTop: "10px", paddingBottom: "5px" }}
          >
            <center>
              <div className="col-xs-12">
                <h1>MY PROJECTS</h1>
                <hr />
              </div>
            </center>
          </div>
        </div>

        <div className="container-fluid">
          {this.state.projects.map((item) => {
            return (
              <div
                className="row"
                key={item.id}
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  backgroundColor: "black",
                  borderRadius: "40px",
                }}
              >
                <div
                  className="col-xs-12 col-md-6"
                  style={{ textAlign: "center", color: "white" }}
                >
                  <h1>{item.name}</h1>
                  <h3>{item.description}</h3>
                  <p>
                    <h3>Technologies Used: </h3>
                    {item.technology}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    className="btn btn-primary buttn"
                    style={{ color: "yellow" }}
                  >
                    SEE PROJECT
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Project;
