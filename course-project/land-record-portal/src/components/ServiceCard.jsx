import { useNavigate } from "react-router-dom";

function ServiceCard(props) {

  const navigate = useNavigate();

  const handleClick = () => {

    if (props.title === "Pahani Search") {
      navigate("/search");
    }

    else if (props.title === "Mutation Request") {
      navigate("/mutation");
    }

    else if (props.title === "Status Tracking") {
      navigate("/track");
    }

    else if (props.title === "EC Application") {
  navigate("/ec");
}
    else {
      alert("Coming Soon");
    }
  };

  return (
    <div
      className="card"
      onClick={handleClick}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ServiceCard;