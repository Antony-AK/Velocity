import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Models from "./pages/Models";
import ModelDetails from "./pages/ModelDetails";
import Technology from "./pages/Technology";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ScrollTrigger } from "./animations/gsapConfig";

export default function App() {
  // Recalculate trigger positions once webfonts and images have settled.
  useEffect(() => {
    let live = true;
    document.fonts?.ready.then(() => { if (live) ScrollTrigger.refresh(); });
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => { live = false; window.removeEventListener("load", onLoad); };
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:slug" element={<ModelDetails />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
