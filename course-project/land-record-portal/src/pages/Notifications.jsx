import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Notifications() {

  const notifications =
    JSON.parse(
      localStorage.getItem("notifications")
    ) || [];

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Notifications</h1>

        {notifications.length === 0 ? (

          <p>No Notifications Available</p>

        ) : (

          notifications
            .slice()
            .reverse()
            .map((note, index) => (

              <div
                key={index}
                className="card"
                style={{
                  marginBottom: "10px"
                }}
              >
                <p>{note}</p>
              </div>

            ))

        )}

      </div>

      <Footer />
    </>
  );
}

export default Notifications;