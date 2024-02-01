import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./components/contact/contact.jsx";
import HomePage from "./components/homepage/homePage.jsx"
function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden ">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact-me" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
