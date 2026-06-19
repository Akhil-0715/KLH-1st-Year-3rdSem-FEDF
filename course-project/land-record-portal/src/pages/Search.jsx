import { useState } from "react";
import { getLandRecord } from "../services/landService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Search() {

  const [surveyNo, setSurveyNo] = useState("");
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {

    setLoading(true);

    const result = await getLandRecord(surveyNo);

    if (!result) {
      alert("Survey Number Not Found");
      setLoading(false);
      return;
    }

    setRecord(result);

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Search Land Records</h1>

        <input
          type="text"
          placeholder="Enter Survey Number"
          value={surveyNo}
          onChange={(e) => setSurveyNo(e.target.value)}
        />

        <br /><br />

        <button onClick={handleSearch}>
          Search
        </button>

        {loading && (
          <h3>Searching Records...</h3>
        )}

        {record && (
          <div className="card">

            <h2>Land Record Certificate</h2>

            <hr />

            <p>
              <strong>Certificate ID:</strong>{" "}
              LR{surveyNo}
            </p>

            <p>
              <strong>Issue Date:</strong>{" "}
              {new Date().toLocaleDateString()}
            </p>

            <p>
              <strong>Survey Number:</strong>{" "}
              {surveyNo}
            </p>

            <p>
              <strong>Owner:</strong>{" "}
              {record.owner}
            </p>

            <p>
              <strong>Area:</strong>{" "}
              {record.area}
            </p>

            <p>
              <strong>Village:</strong>{" "}
              {record.village}
            </p>

            <br />

            <button
              onClick={() => window.print()}
            >
              Print Record
            </button>

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Search;