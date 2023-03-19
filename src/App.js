import Header from "./common/Header";
import "./App.css";
import MainContainer from "./common/MainContainer";
import Avatar from "./components/Avatar";
// import HelloComponents from "./common/HelloComponents";

// This app for the
function App() {
  return (
    <div className="App relative">
      <MainContainer />
      <div>
        <div className="bg-rose-600 w-full h-fit relative">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default App;
