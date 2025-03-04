import { Routes, Route } from "react-router";
import "./App.css";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import PrivateLayout from "./routes/PrivateLayout";
import PrivateContent from "./routes/PrivateContent";
import { AuthProvider } from "./services/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateLayout>
              <PrivateContent />
            </PrivateLayout>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
