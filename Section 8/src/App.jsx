import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.tsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Easy' targetTime={1}/>
        <TimerChallenge title='Not easy' targetTime={1}/>
        <TimerChallenge title='Getting tough' targetTime={1}/>
        <TimerChallenge title='Pros only' targetTime={1}/>
      </div>
    </>
  );
}

export default App;
