function Stats() {

  const applications = Object.keys(localStorage)
    .filter((key) => !isNaN(key));

  let approved = 0;
  let pending = 0;

  applications.forEach((id) => {
    const app = JSON.parse(localStorage.getItem(id));

    if (app.status === "Approved") {
      approved++;
    }

    if (app.status === "Pending") {
      pending++;
    }
  });

  const landRecords =
    JSON.parse(localStorage.getItem("landRecords")) || [];

  return (
    <section className="stats">

      <div className="stat-card">
        <h2>{landRecords.length}</h2>
        <p>Land Records</p>
      </div>

      <div className="stat-card">
        <h2>{applications.length}</h2>
        <p>Applications</p>
      </div>

      <div className="stat-card">
        <h2>{approved}</h2>
        <p>Approved</p>
      </div>

      <div className="stat-card">
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>

    </section>
  );
}

export default Stats;