import { Routes, Route } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ComponentsPage } from "./pages/ComponentsPage";
import { ComingSoonPage } from "./pages/ComingSoonPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/components/:slug" element={<ComponentsPage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/docs" element={<ComingSoonPage title="Docs" />} />
      <Route path="/templates" element={<ComingSoonPage title="Templates" />} />
    </Routes>
  );
}

export default App;
