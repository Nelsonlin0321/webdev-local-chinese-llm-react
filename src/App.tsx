import "./App.css";
import "@radix-ui/themes/styles.css";
import "semantic-ui-css/semantic.min.css";
import Chatbot from "./components/Chatbot";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="w-screen min-h-screen p-3 bg-gradient-to-tl from-yellow-100 to-pink-100">
      <div className="container mx-auto px-4">
        <NavBar />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
