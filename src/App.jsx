import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails.jsx";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;