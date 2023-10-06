import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form.jsx";
import PasswordForm from "./components/PasswordForm.jsx";
import { useState } from "react";
export default function App() {

  const [email,setEmail] = useState("");

  const handleEmail = (email) => {
    setEmail(email);

  }

  return (
    <>
      <Router>
        <Routes>
        <Route path="/"element={<Form  handleEmail={handleEmail} />} />
          <Route path="/signin/identifier" element={<Form handleEmail={handleEmail} />} />
          <Route path="/signin/challenge"   element={<PasswordForm email={email}/>} />
        </Routes>
      </Router>
    </>
  );
}
