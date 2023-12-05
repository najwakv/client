import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import GallerySection from "./pages/GallerySection";
import ContactUs from "./pages/ContactUs";
import KarateDetails from "./pages/KarateDetails";
import KungFuDetails from "./pages/KungFuDetails";
import BoxingDetails from "./pages/BoxingDetails";
import KickBoxingDetails from "./pages/KickBoxingDetails";
import YogaDetails from "./pages/YogaDetails";
import FitnessDetails from "./pages/FitnessDetails";
import WeightLossDetails from "./pages/WeightLossDetails";
import PersonalTrainingDetails from "./pages/PersonalTrainingDetails";
import Registration from "./pages/Registration";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GallerySection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/karate" element={<KarateDetails />} />
          <Route path="/kungfu" element={<KungFuDetails />} />
          <Route path="/boxing" element={<BoxingDetails />} />
          <Route path="/kickboxing" element={<KickBoxingDetails />} />
          <Route path="/yoga" element={<YogaDetails />} />
          <Route path="/fitness" element={<FitnessDetails />} />
          <Route path="/weightloss" element={<WeightLossDetails />} />
          <Route path="/personaltraining" element={<PersonalTrainingDetails />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
