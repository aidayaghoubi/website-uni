import Header from './components/Header';
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ProductPage from './components/ProductPagese';
import Home from './components/Home';
import FunctionalProvider from './components/store/product-context';
import CartProduct from './components/store/cart/Cart_product';
import FavoriteContextProvider from './components/store/favorite-context';
import ProfilePage from './components/profilecomponents/ProfilePage';
import LoginPriveder from './components/store/login-context';
import UserLogedIn from './components/store/user-context';


function App() {


  return (

    <main>
      <FunctionalProvider>
        <LoginPriveder>
          <UserLogedIn>
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
              {/* <Route path='/women/:id'>
            <SingleWowenProduct colection='women' />
          </Route> */}
              <Route path='/men'>
                <ProductPage colection='men' />
              </Route>
              <Route path='/kid'>
                <ProductPage colection='kid' />
              </Route>
              <Route path='/cart'>
                <CartProduct />
              </Route>
              <Route path='/profile'>
                <ProfilePage />
              </Route>
              <Route path='/favorite'>
                {/* <ProductPage colection='favorite' /> */}
              </Route>1
              <Route path='*'>

              </Route>
            </Switch>
          </UserLogedIn>
        </LoginPriveder>
      </FunctionalProvider>
    </main>

  );
}

export default App;
