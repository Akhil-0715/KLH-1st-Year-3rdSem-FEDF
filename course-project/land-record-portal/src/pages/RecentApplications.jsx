import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RecentApplications() {

  const applications = Object.keys(localStorage)
    .filter((key) => !isNaN(key))
    .reverse();

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Recent Applications</h1>

        {applications.length === 0 ? (

          <p>No Applications Found</p>

        ) : (

          applications.map((id) => {

            const app = JSON.parse(
              localStorage.getItem(id)
            );

            return (
              <div
                key={id}
                className="card"
                style={{ marginBottom: "15px" }}
              >

                <h3>Application ID: {id}</h3>

                <p>Owner: {app.owner}</p>

                <p>Survey No: {app.surveyNo}</p>

                <p>Village: {app.village}</p>

                <p>Area: {app.area}</p>

                <p>Status: {app.status}</p>

              </div>
            );

          })

        )}

      </div>

      <Footer />
    </>
  );
}

export default RecentApplications;