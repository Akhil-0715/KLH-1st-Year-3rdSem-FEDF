import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <section className="hero">

      <h1>Digital Land Records & Pahani Portal</h1>

      <p>
        Access land records, apply for mutation,
        and track applications online.
      </p>

      <button onClick={handleSearch}>
        Search Records
      </button>

    </section>
  );
}

export default Hero;