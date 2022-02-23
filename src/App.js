import Header from './components/Header';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
   
      <main>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route component={Home} path='/home'>
            <Home />
        </Route>
        <Route path='/women'>

        </Route>
        <Route path='/men'>

        </Route>
        <Route path='/kids'>

        </Route>
        <Route path='*'>

        </Route>
      </Switch>
      </main>
    
  );
}

export default App;
