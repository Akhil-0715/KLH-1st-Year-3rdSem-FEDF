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

          <h3>Owner: {record.owner}</h3>

          <p>Area: {record.area}</p>

          <p>Village: {record.village}</p>

        </div>
      )}

    </div>

    <Footer />
  </>
);
}

export default Search;