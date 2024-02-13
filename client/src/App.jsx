import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState({
    to: "",
    subject: "",
    desc: "",
  });
  function handleChange(e) {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(msg);
    try {
      const response = await axios.post("http://localhost:3000/", msg);
      console.log(response.data); // Move this line inside the `then()` block
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container">
        <h3>E-Mail Application </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="to">Enter receiver address:</label>
          <br />
          <input
            type="text"
            id="to"
            name="to"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="subject">Enter subject:</label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="desc">Enter description:</label>
          <br />
          <textarea
            type="text"
            id="desc"
            className="desc"
            name="desc"
            onChange={handleChange}
            required
          />
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default App;
