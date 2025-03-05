import { Routes, Route } from "react-router";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import PrivateLayout from "./routes/PrivateLayout";
import { AuthProvider } from "./services/AuthContext";
import AddEvent from "./pages/AddEvent";
import AddSeason from "./pages/AddSeason";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route path="create-season" element={<AddSeason />} />
          <Route path="create-event" element={<AddEvent />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
