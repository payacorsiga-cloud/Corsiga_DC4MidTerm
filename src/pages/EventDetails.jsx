import { Link, useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Development Night",
    date: "September 5, 2026",
    location: "Computer Laboratory 1",
    description:
      "Learn the basics of modern web development and create your first React application."
  },
  {
    id: 2,
    title: "Programming Workshop",
    date: "September 12, 2026",
    location: "ICT Room",
    description:
      "Improve your programming skills through hands-on coding activities."
  },
  {
    id: 3,
    title: "Student Tech Summit",
    date: "September 20, 2026",
    location: "University Auditorium",
    description:
      "Explore new technologies and listen to presentations from student developers."
  }
];

function EventDetails() {
  const { id } = useParams();

  const event = events.find(
    (event) => event.id === Number(id)
  );

  if (!event) {
    return (
      <div className="container">
        <h1>Event Not Found</h1>
        <Link to="/events" className="button">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="details-card">
        <h1>{event.title}</h1>

        <p>
          <strong>Date:</strong> {event.date}
        </p>

        <p>
          <strong>Location:</strong> {event.location}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{event.description}</p>

        <div className="actions">
          <Link to="/register" className="button">
            Register for this Event
          </Link>

          <Link to="/events" className="secondary-button">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;