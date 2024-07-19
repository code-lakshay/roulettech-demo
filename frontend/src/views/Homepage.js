import React from "react";

const homeContainerStyle = {
  backgroundColor: "#fff",
  width: "100%",
};

function Homepage() {
  return (
    <div style={homeContainerStyle}>
      <>
        <main role="madin" style={{ marginTop: 50 }}>
          {/* Main jumbotron for a primary marketing message or call to action */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">Welcome to My Demo!</h1>
              <p>
                This is a demonstration of a web application built with React
                and Django. Explore the features and capabilities of this
                project, designed to showcase my skills and expertise.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Project Overview</h2>
                <p>
                  This demo project integrates a React frontend with a Django
                  backend. It demonstrates the seamless interaction between the
                  two frameworks, providing a robust and dynamic web
                  application.
                </p>
              </div>
              <div className="col-md-4">
                <h2>Key Features</h2>
                <p>
                  Explore the key features of this project, including real-time
                  user authentication, and responsive design. Each feature
                  highlights the technical skills and best practices used in
                  development.
                </p>
              </div>
              <div className="col-md-4">
                <h2>Contact Me</h2>
                <p>
                  Have any questions or feedback? Feel free to reach out. I am
                  open to discussing the technical details of this project or
                  potential job opportunities - lakshay7167@gmail.com.
                </p>
                <p></p>
              </div>
            </div>
            <hr />
          </div>

          {/* /container */}
        </main>
        <footer className="container">
          <p>© Lakshay Madaan Demo</p>
        </footer>
      </>
    </div>
  );
}

export default Homepage;
