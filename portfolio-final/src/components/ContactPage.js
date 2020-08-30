import React from "react";
import "./homestyle.css";
class ContactPage extends React.Component {
  render() {
    return (
      <>
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
            style={{ paddingTop: "20px", paddingBottom: "10px" }}
          >
            <div
              className="col-xs-12"
              style={{
                textAlign: "center",
                paddingTop: "0px",
                color: "white",
              }}
            >
              <h1>CONTACT ME</h1>
              <h3>Fill this form to contact me or you can mail me</h3>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <center>
            <h1>WELCOME</h1>
          </center>
          <hr />
          <div className="row">
            <div
              className="col-xs-12 col-md-6"
              style={{ textAlign: "center", paddingTop: "0px" }}
            ></div>
            <div className="col-xs-12 col-md-4">
              <form>
                <center>
                  <h3>Contact Me</h3>

                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      style={{ width: "50%" }}
                      required
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      style={{ width: "50%" }}
                      required
                      className="form-control"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      style={{ width: "50%" }}
                      className="form-control"
                      rows={7}
                      placeholder="Message"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-success form-control"
                      style={{
                        width: "10%",
                        background: "lime",
                        color: "white",
                        cursor: "pointer",
                      }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </center>
              </form>
              <center>
                <h3>or</h3>
                <a
                  href="mailto: 99farzanask@gmail.com"
                  className="btn btn-primary form-control"
                >
                  Mail Me
                </a>
              </center>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactPage;
