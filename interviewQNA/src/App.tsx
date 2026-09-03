import { useState } from "react";
import explorer from "./data/folderData";
import "./App.css";
import Folder from "./components/Folder";
function App() {
  const [exploreData, setExploreData] = useState(explorer);
  console.log("exploreData", exploreData);

  return (
    <div className="App">
      <Folder explorer={exploreData} />
    </div>
  );
}

export default App;
