import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Preview from "./Components/Preview/Preview";
import Edit from "./Components/Edit/Edit";
const router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/view/:id" element={<Preview />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<Edit create={true} />} />
    </Routes>
  </BrowserRouter>
);

export default router;
