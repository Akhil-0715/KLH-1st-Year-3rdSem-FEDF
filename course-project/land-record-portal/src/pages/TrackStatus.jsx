import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TrackStatus() {

  const [applicationId, setApplicationId] = useState("");
  const [application, setApplication] = useState(null);

  const handleTrack = () => {

    const data = localStorage.getItem(applicationId);

    if (!data) {
      setApplication({
        status: "Application Not Found"
      });
      return;
    }

    const applicationData = JSON.parse(data);

    setApplication(applicationData);
  };

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Track Application Status</h1>

        <input
          type="text"
          placeholder="Enter Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
        />

        <br /><br />

        <button onClick={handleTrack}>
          Check Status
        </button>

        {application && (
          <div className="card">

            <h3>Application ID: {applicationId}</h3>

            {application.status === "Approved" && (
              <h3>
                Survey Number Generated: {application.surveyNo}
              </h3>
            )}

            {application.owner && (
              <>
                <p><strong>Owner:</strong> {application.owner}</p>

                <p><strong>Survey Number:</strong> {application.surveyNo}</p>

                <p><strong>Village:</strong> {application.village}</p>

                <p><strong>Area:</strong> {application.area}</p>
              </>
            )}

            <div style={{ marginTop: "20px" }}>

  <h3>Application Progress</h3>

  <p>✔ Submitted</p>

  <p>✔ Under Review</p>

  {application.status === "Approved" && (
    <p>✔ Approved</p>
  )}

  {application.status === "Rejected" && (
    <p>❌ Rejected</p>
  )}

  {application.status === "Pending" && (
    <p>⏳ Pending Approval</p>
  )}

</div>

<h2>Status: {application.status}</h2>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default TrackStatus;