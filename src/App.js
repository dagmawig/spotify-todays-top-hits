import './App.css';
import TodaysTop from './components/todaysTopHits';
import Loading from './components/Loading';
function App() {
  return (
    <div className="App">
      <Loading />
     <TodaysTop />
    </div>
  );
}

export default App;
