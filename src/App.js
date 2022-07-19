import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { ArticlesPage } from "./pages/Articles";
import { ProjectsPage } from "./pages/Projects";
import { ContactModal } from "./components/Modals";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setModal={setModal} />
      {modal && <ContactModal modal={modal} setModal={setModal} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
