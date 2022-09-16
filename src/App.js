import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import TicketModal from "./components/TicketModal";
import { dashboardData, completedTasks,users } from "../src/Mock-data.js";
import LoginForm from '../src/components/LoginForm/LoginForm.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

let initial = {
  title: "",
  description: "",
  file: "",
};
function App() {
  const [cols, setCols] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ticketModal, setTicketModal] = useState(false);
  const [text, setText] = useState("");

  const [currentIndex, setCurrentIndex] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");
  const [ticketData, setTicketData] = useState(initial);

  const saveTicket = () => {
    //console.log(ticketData);
    cols[currentIndex][currentActivity].push(ticketData);
    setTicketData(initial);
    setTicketModal(false);
  };

  console.log(dashboardData);

  return (
<>
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={<Navigate to={`/auth/loginStudent`} replace />}
        /> */}
         <Route
          path="/"
          element={<Dashboard />}
        /> 
        <Route
          path="/auth/loginAdmin"
          element={
            <LoginForm 
            title="a Admin"
            child1="Admin"
            child2="User"
          />
        }
      />
      <Route
        path="/auth/loginUser"
        element={
          <LoginForm
            title="a User"
              child1="User"
              child2="Admin"
            />
          }
        />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
