import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Mutation() {

  const [name, setName] = useState("");
const [surveyNo, setSurveyNo] = useState("");
const [village, setVillage] = useState("");
const [area, setArea] = useState("");
const [reason, setReason] = useState("");

  const handleSubmit = () => {

    if (
  name === "" ||
  surveyNo === "" ||
  village === "" ||
  area === "" ||
  reason === ""
)  {
      alert("Please fill all fields");
      return;
    }

    const appId = Math.floor(Math.random() * 9000) + 1000;
    localStorage.setItem(
  appId,
  JSON.stringify({
    status: "Pending",
    owner: name,
    surveyNo: surveyNo,
    village: village,
    area: area + " acres"
  })
);

alert(
  `Mutation Request Submitted Successfully\nApplication ID: ${appId}`
);

    setName("");
setSurveyNo("");
setVillage("");
setArea("");
setReason("");
  };

  return (
    <>

    <Navbar />
    <div className="page-container">

      <h1>Mutation Request Form</h1>

      <br />

      <input
        type="text"
        placeholder="Owner Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Survey Number"
        value={surveyNo}
        onChange={(e) => setSurveyNo(e.target.value)}
      />

      <br /><br />

<input
  type="text"
  placeholder="Village"
  value={village}
  onChange={(e) => setVillage(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Land Area"
  value={area}
  onChange={(e) => setArea(e.target.value)}
/>

      <br /><br />

      <textarea
        placeholder="Reason for Mutation"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit Request
      </button>

    </div>
    

    <Footer />

  </>
  );
}

export default Mutation;