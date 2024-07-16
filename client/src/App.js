import "./App.css";
import Homepage from "./pages/HomePage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Chatpage from "./pages/ChatPage";
import { Box } from "@chakra-ui/react";
import img from "./assets/Images/background.jpg";
import ChatProvider from "./context/ChatProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ChatProvider>
          <Box
            bgImage={img}
            bgPosition={"center"}
            bgSize={"cover"}
            h="calc(100%)"
            w="calc(100%)"
            pos={"fixed"}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/chats" element={<Chatpage />} />
            </Routes>
          </Box>
        </ChatProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
