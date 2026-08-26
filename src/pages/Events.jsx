import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Web Development Night",
    date: "September 5, 2026",
    location: "Computer Laboratory 1",
    description: "Learn the basics of modern web development."
  },
  {
    id: 2,
    title: "Programming Workshop",
    date: "September 12, 2026",
    location: "ICT Room",
    description: "Improve your programming skills through hands-on activities."
  },
  {
    id: 3,
    title: "Student Tech Summit",
    date: "September 20, 2026",
    location: "University Auditorium",
    description: "A technology event featuring talks and student projects."
  }
];

function Events() {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>

      <div className="event-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h2>{event.title}</h2>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>{event.description}</p>

            <Link
              to={`/events/${event.id}`}
              className="button"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;