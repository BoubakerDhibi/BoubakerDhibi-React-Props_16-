import Profile from '../Profile/Profile.js';
import pImg from '../../ProfilePic.jpg';
import "./app.css";
function App () {

  return (
    <div className="App">
      <Profile fullName="Boubaker Dhibi" bio="PHD" profession="Professeur" imge={pImg} />
    </div>
    );
}

export default App;
