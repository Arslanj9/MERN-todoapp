import './App.css';
import Home from './pages/Home';
import LiveDate from './pages/Date';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center w-full h-screen bg-green-300">
      <div className='w-2/5 bg-white rounded-lg shadow-2xl'>
        <LiveDate />
        <Home />
      </div>
    </div>
  );
}

export default App;
