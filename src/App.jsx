import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollGallery from "./ScrollGallery";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Page8 from "./Pages/Page8";
import Page9 from "./Pages/Page9";
import Page10 from "./Pages/Page10";

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen">
        <Routes>
          <Route path="/" element={<ScrollGallery />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
