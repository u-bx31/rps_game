import Headr from "./component/Headr";
import Selection from "./component/Selection";
import Game1 from "./component/Game1";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./component/footer";

function App() {
  const [playerChoice,setPlayerChoice]=useState('');
  const [pchoiseImage,setPchoiseImage] = useState('');
  const [score,setScore] = useState(0);
  return (
    <div className="container px-0">
      <Headr score = {score}/>
      <Routes>
        <Route path="/" element={<Selection setPlayerChoice={setPlayerChoice} setPchoiseImage={setPchoiseImage}/>}/>
        <Route path="/game" element={<Game1 playerChoice={playerChoice} pchoiseImage={pchoiseImage} score={score} setScore={setScore} />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
