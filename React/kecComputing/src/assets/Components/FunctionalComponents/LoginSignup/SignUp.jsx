import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var nagivate = useNavigate();

  async function signup(event) {
    event.preventDefault();
    var req = await axios.post("https://backend-q894.onrender.com/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    console.log(req);
    nagivate("/login");
  }

  return (
    <form onSubmit={signup}>
      <h2>Sign Up</h2>
      <div>
      <label htmlFor="name">First Name:</label>
      <input
        type="text"
        id="uname"
        value={firstName}
        onChange={(e) => setFName(e.target.value)}
        required
      />
      </div>
      <div>
      <label htmlFor="name">Last Name:</label>
      <input
        type="text"
        id="name"
        value={lastName}
        onChange={(e) => setLName(e.target.value)}
        required
      />
      </div>
      <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;