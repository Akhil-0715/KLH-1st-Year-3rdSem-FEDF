import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext.jsx";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Mutation from "./pages/Mutation";
import TrackStatus from "./pages/TrackStatus";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import EncumbranceCertificate from "./pages/EncumbranceCertificate";
import Notifications from "./pages/Notifications";
import RecentApplications from "./pages/RecentApplications";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />

          <Route path="/mutation" element={<Mutation />} />

          <Route path="/track" element={<TrackStatus />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/ec" element={<EncumbranceCertificate />} />
          <Route
  path="/applications"
  element={<RecentApplications />}
/>
          <Route
  path="/notifications"
  element={<Notifications />}
/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;