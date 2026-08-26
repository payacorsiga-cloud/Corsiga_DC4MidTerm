import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to EventHub</h1>

        <p>
          Discover upcoming events and register for events
          hosted by our student organization.
        </p>

        <Link to="/events" className="button">
          View Events
        </Link>
      </div>
    </div>
  );
}

export default Home;