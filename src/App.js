
import {Header} from './components/Header.js';
import {Beers} from './components/Beers.js';

export function App() {

    return (
      // empty tag is short from for <React.Fragment></>
      <>  
        <Header title="React Data Table Test App" className="sticky"/>
        <Beers/>
      </>
    )
  
}