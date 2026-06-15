import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EncumbranceCertificate() {
  const [surveyNo, setSurveyNo] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const records =
      JSON.parse(localStorage.getItem("landRecords")) || [];

    const land = records.find(
      (item) => item.surveyNo === surveyNo
    );

    if (!land) {
      alert("Land Record Not Found");
      return;
    }

    setResult({
      surveyNo: land.surveyNo,
      owner: land.owner,
      status: "No Encumbrance Found",
      fromDate: "01-01-2020",
      toDate: new Date().toLocaleDateString(),
    });
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        <h2>Encumbrance Certificate</h2>

        <input
          type="text"
          placeholder="Enter Survey Number"
          value={surveyNo}
          onChange={(e) =>
            setSurveyNo(e.target.value)
          }
        />

        <br />
        <br />

        <button onClick={handleSearch}>
          Generate EC
        </button>

        {result && (
          <div
            className="card"
            style={{ marginTop: "20px" }}
          >
            <h3>EC Details</h3>

            <p>
              <strong>Survey No:</strong>{" "}
              {result.surveyNo}
            </p>

            <p>
              <strong>Owner:</strong>{" "}
              {result.owner}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {result.status}
            </p>

            <p>
              <strong>Period:</strong>{" "}
              {result.fromDate} - {result.toDate}
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default EncumbranceCertificate;