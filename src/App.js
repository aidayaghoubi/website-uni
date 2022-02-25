import Header from './components/Header';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ProductPage from './components/ProductPagese';
import Home from './components/Home';
import FunctionalProvider from './components/store/product-context';
import CartProduct from './components/store/cart/Cart_product';


function App() {
  return (

    <main>
      <FunctionalProvider>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/women'>
            <ProductPage colection='women' />
          </Route>
          <Route path='/men'>
            <ProductPage colection='men' />

          </Route>
          <Route path='/kid'>
          <ProductPage colection='kid' />
          </Route>
          <Route path='/cart'>
          <CartProduct />
          </Route>
          <Route path='*'>

          </Route>
        </Switch>
      </FunctionalProvider>
    </main>

  );
}

export default App;
