import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      {/* <h1 className='text-stone-500 text-8xl'>Hello Youtube</h1> */}

      <Head/>
      <Body/>

      {/*
      -head
      -body
       -sidebar
        -menuItems
      -Mainconatiner
       -buttonList
       -videoContainer
        -videoCard
      */}
    </div>
  );
}

export default App;
