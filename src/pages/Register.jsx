import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation 1: Name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    // Validation 2: Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @.";
    }

    // Validation 3: Event
    if (formData.event === "") {
      newErrors.event = "Please select an event.";
    }

    setErrors(newErrors);

    // Stop if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Successful submission
    navigate("/confirmation", {
      state: {
        name: formData.name,
        event: formData.event
      }
    });
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Event Registration</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Select Event</label>

            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
            >
              <option value="">
                -- Select an event --
              </option>

              <option value="Web Development Night">
                Web Development Night
              </option>

              <option value="Programming Workshop">
                Programming Workshop
              </option>

              <option value="Student Tech Summit">
                Student Tech Summit
              </option>
            </select>

            {errors.event && (
              <p className="error">{errors.event}</p>
            )}
          </div>

          <button type="submit" className="button">
            Submit Registration
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;