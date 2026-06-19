import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContext";


function Admin() {

  const { user } = useContext(UserContext);

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
if (
  !user &&
  !localStorage.getItem("user")
) {

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Access Denied</h1>

        <p>Please login as Admin first.</p>

      </div>

      <Footer />
    </>
  );

}

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Welcome Administrator</h1>

        <h2>Land Records Management Dashboard</h2>

        <br />

        <h3>Total Applications: {applications.length}</h3>

        <p>Pending Applications Management</p>

        <br />

        {applications.map((app) => (

          <div
            key={app.appId}
            className="card"
            style={{ marginBottom: "20px" }}
          >

            <h3>Application ID: {app.appId}</h3>

            <p>Owner: {app.owner}</p>

            <p>Survey No: {app.surveyNo}</p>

            <p>Village: {app.village}</p>

            <p>Area: {app.area}</p>

            {app.status === "Approved" && (
              <p>
                <strong>Status:</strong> 🟢 Approved
              </p>
            )}

            {app.status === "Pending" && (
              <p>
                <strong>Status:</strong> 🟡 Pending
              </p>
            )}

            {app.status === "Rejected" && (
              <p>
                <strong>Status:</strong> 🔴 Rejected
              </p>
            )}

            {app.status === "Pending" && (

              <>
                <button
                  onClick={() => {

                    const updatedApp = {
                      ...app,
                      status: "Approved"
                    };

                    const records =
                      JSON.parse(
                        localStorage.getItem("landRecords")
                      ) || [];

                    const exists = records.find(
                      (record) =>
                        record.surveyNo === app.surveyNo
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

                    const notifications =
                      JSON.parse(
                        localStorage.getItem("notifications")
                      ) || [];

                    notifications.push(
                      `✔ Application ${app.appId} approved successfully`
                    );

                    localStorage.setItem(
                      "notifications",
                      JSON.stringify(notifications)
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

                    const notifications =
                      JSON.parse(
                        localStorage.getItem("notifications")
                      ) || [];

                    notifications.push(
                      `❌ Application ${app.appId} rejected`
                    );

                    localStorage.setItem(
                      "notifications",
                      JSON.stringify(notifications)
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