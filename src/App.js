import './styles/index.scss'
import NavBar from './components/nav';
import MessageBlock from './components/messageBlock';

function App() {

  return (
    <div className="App">
    <NavBar />
      <div className="scroll-contianer">
        <MessageBlock/>
        <MessageBlock/>
        <MessageBlock/>
        <MessageBlock/>
      </div>
    </div>
  );
}

export default App;