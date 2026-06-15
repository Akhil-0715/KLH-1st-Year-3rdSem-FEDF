import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admin() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    const data = [];

    for (let i = 0; i < localStorage.length; i++) {

      const key = localStorage.key(i);

      const value = localStorage.getItem(key);

      try {

        const application = JSON.parse(value);

        if (application.status) {

          data.push({
            appId: key,
            ...application
          });

        }

      } catch {}

    }

    setApplications(data);

  }, []);

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Admin Dashboard</h1>
        <h3>Total Applications: {applications.length}</h3>
        <p>Pending Applications Management</p>

        {applications.map((app) => (

          <div
            key={app.appId}
            className="card"
            style={{ marginBottom: "20px" }}
          >

            <h3>Application ID: {app.appId}</h3>

            <p>Owner: {app.owner}</p>

            <p>Survey No: {app.surveyNo}</p>

            <p>Status: {app.status}</p>

            {app.status === "Pending" && (

  <>

            <button
  onClick={() => {

    const updatedApp = {
      ...app,
      status: "Approved"
    };

    const records =
  JSON.parse(localStorage.getItem("landRecords")) || [];

const exists = records.find(
  (record) => record.surveyNo === app.surveyNo
);

if (!exists) {

records.push({
  surveyNo: app.surveyNo,
  owner: app.owner,
  area: app.area,
  village: app.village
});
}
localStorage.setItem(
  "landRecords",
  JSON.stringify(records)
);

    localStorage.setItem(
      app.appId,
      JSON.stringify(updatedApp)
    );

    alert("Application Approved");

    window.location.reload();

  }}
>
  Approve
</button>
<button
  onClick={() => {

    const updatedApp = {
      ...app,
      status: "Rejected"
    };

    localStorage.setItem(
      app.appId,
      JSON.stringify(updatedApp)
    );

    alert("Application Rejected");

    window.location.reload();

  }}
>
  Reject
</button>


  </>

)}

          </div>

        ))}

      </div>

      <Footer />
    </>
  );
}

export default Admin;