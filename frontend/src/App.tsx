import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ComponentsPage } from "./pages/ComponentsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/components/:slug" element={<ComponentsPage />} />
      <Route path="/components" element={<ComponentsPage />} />
    </Routes>
  );
}

export default App;
