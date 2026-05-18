function Navbar() {

  const handleClick = (name) => {
    alert(`${name} page will be available soon`);
  };

  return (
    <nav className="navbar">
      <h2>Land Records Portal</h2>

      <ul>
        <li onClick={() => handleClick("Home")}>Home</li>

        <li onClick={() => handleClick("Search")}>
          Search
        </li>

        <li onClick={() => handleClick("Services")}>
          Services
        </li>

        <li onClick={() => handleClick("Track Status")}>
          Track Status
        </li>

        <li onClick={() => handleClick("Login")}>
          Login
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;