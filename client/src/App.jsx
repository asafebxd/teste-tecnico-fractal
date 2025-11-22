import AddLocker from "./components/AddLocker";
import EditLocker from "./components/EditLocker";
import Home from "./components/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locker" element={<AddLocker />} />
        <Route path="/locker/:id" element={<EditLocker />} />
      </Routes>
    </>
  );
}

export default App;
