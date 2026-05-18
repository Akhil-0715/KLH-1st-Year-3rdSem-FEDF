function Services() {

  const showAlert = (service) => {
    alert(`${service} module will be implemented soon`);
  };

  return (
    <section className="services">

      <div
        className="card"
        onClick={() => showAlert("Pahani Search")}
      >
        <h3>Pahani Search</h3>
        <p>Search land records using survey number.</p>
      </div>

      <div
        className="card"
        onClick={() => showAlert("Mutation Request")}
      >
        <h3>Mutation Request</h3>
        <p>Apply for ownership transfer online.</p>
      </div>

      <div
        className="card"
        onClick={() => showAlert("EC Application")}
      >
        <h3>Encumbrance Certificate</h3>
        <p>Apply for encumbrance certificate.</p>
      </div>

      <div
        className="card"
        onClick={() => showAlert("Status Tracking")}
      >
        <h3>Status Tracking</h3>
        <p>Track all submitted applications.</p>
      </div>

    </section>
  );
}

export default Services;