import "./App.css";
import Homepage from "./pages/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatpage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chats" element={<Chatpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
