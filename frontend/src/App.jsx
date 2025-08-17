import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Routes>
      {/* Catch-all route → har path par HomePage */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
