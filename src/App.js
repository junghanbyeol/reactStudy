import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
