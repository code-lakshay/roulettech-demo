import { useState, useEffect } from "react";
import useAxios from "../utils/useAxios";
import jwtDecode from "jwt-decode";
function Dashboard() {
  const [res, setRes] = useState("");
  const api = useAxios();
  const token = localStorage.getItem("authTokens");

  if (token) {
    const decode = jwtDecode(token);
    var user_id = decode.user_id;
    var username = decode.username;
    var full_name = decode.full_name;
    var image = decode.image;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await api.post("/test/");
        setRes(response.data.response);
      } catch (error) {
        console.log(error);
        setRes("Something went wrong");
      }
    };
    fetchPostData();
  }, []);

  return (
    <div>
      <>
        <div className="container-fluid" style={{ paddingTop: "100px" }}>
          <div className="row">
            <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
              <div className="sidebar-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span data-feather="home" />
                      Dashboard <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <main
              role="main"
              className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">My Dashboard</h1>
                <span>Hello {username}!</span>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      Share
                    </button>
                    <button className="btn btn-sm btn-outline-secondary">
                      Export
                    </button>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" />
                    This week
                  </button>
                </div>
              </div>
              <div className="alert alert-success">
                <strong>{res}</strong>
              </div>
              <h2>Employee Directory</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Occupation</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>John</td>
                      <td>Doe</td>
                      <td>Software Engineer</td>
                      <td>New York</td>
                    </tr>
                    <tr>
                      <td>1,002</td>
                      <td>Jane</td>
                      <td>Smith</td>
                      <td>Data Scientist</td>
                      <td>San Francisco</td>
                    </tr>
                    <tr>
                      <td>1,003</td>
                      <td>Michael</td>
                      <td>Johnson</td>
                      <td>Product Manager</td>
                      <td>Chicago</td>
                    </tr>
                    <tr>
                      <td>1,004</td>
                      <td>Emily</td>
                      <td>Brown</td>
                      <td>Designer</td>
                      <td>Los Angeles</td>
                    </tr>
                    <tr>
                      <td>1,005</td>
                      <td>William</td>
                      <td>Davis</td>
                      <td>DevOps Engineer</td>
                      <td>Seattle</td>
                    </tr>
                    <tr>
                      <td>1,006</td>
                      <td>Olivia</td>
                      <td>Miller</td>
                      <td>QA Analyst</td>
                      <td>Austin</td>
                    </tr>
                    <tr>
                      <td>1,007</td>
                      <td>James</td>
                      <td>Wilson</td>
                      <td>HR Manager</td>
                      <td>Denver</td>
                    </tr>
                    <tr>
                      <td>1,008</td>
                      <td>Ava</td>
                      <td>Martinez</td>
                      <td>Content Writer</td>
                      <td>Miami</td>
                    </tr>
                    <tr>
                      <td>1,009</td>
                      <td>Alexander</td>
                      <td>Garcia</td>
                      <td>Marketing Specialist</td>
                      <td>Boston</td>
                    </tr>
                    <tr>
                      <td>1,010</td>
                      <td>Sophia</td>
                      <td>Rodriguez</td>
                      <td>Project Coordinator</td>
                      <td>Houston</td>
                    </tr>
                    <tr>
                      <td>1,011</td>
                      <td>Christopher</td>
                      <td>Martinez</td>
                      <td>IT Support</td>
                      <td>Phoenix</td>
                    </tr>
                    <tr>
                      <td>1,012</td>
                      <td>Isabella</td>
                      <td>Hernandez</td>
                      <td>Business Analyst</td>
                      <td>Philadelphia</td>
                    </tr>
                    <tr>
                      <td>1,013</td>
                      <td>Matthew</td>
                      <td>Lopez</td>
                      <td>Consultant</td>
                      <td>San Diego</td>
                    </tr>
                    <tr>
                      <td>1,014</td>
                      <td>Mia</td>
                      <td>Gonzalez</td>
                      <td>Sales Manager</td>
                      <td>Las Vegas</td>
                    </tr>
                    <tr>
                      <td>1,015</td>
                      <td>Daniel</td>
                      <td>Lee</td>
                      <td>Operations Manager</td>
                      <td>San Jose</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
        {/* Bootstrap core JavaScript
    ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* Icons */}
        {/* Graphs */}
      </>
    </div>
  );
}

export default Dashboard;
