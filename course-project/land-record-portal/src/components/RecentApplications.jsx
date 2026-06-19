function RecentApplications() {

  const applications = Object.keys(localStorage)
    .filter((key) => !isNaN(key))
    .slice(-5)
    .reverse();

  return (
    <div className="about">

      <h2>Recent Applications</h2>

      <br />

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
              style={{ marginBottom: "10px" }}
            >
              <p>
                <strong>ID:</strong> {id}
              </p>

              <p>
                <strong>Owner:</strong> {app.owner}
              </p>

              <p>
                <strong>Status:</strong> {app.status}
              </p>
            </div>
          );
        })
      )}

    </div>
  );
}

export default RecentApplications;