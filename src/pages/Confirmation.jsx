import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();

  const name = location.state?.name || "Attendee";
  const event = location.state?.event || "the selected event";

  return (
    <div className="container">
      <div className="confirmation-card">
        <h1>Registration Successful!</h1>

        <p>
          Thank you, <strong>{name}</strong>!
        </p>

        <p>
          You have successfully registered for{" "}
          <strong>{event}</strong>.
        </p>

        <Link to="/events" className="button">
          Back to Events
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;