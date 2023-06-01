import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home/Home';
import GotoSignUp from './Components/pages/GotoSignUp/GotoSignUp';
import SignUpPage from './Components/pages/Register/SignUpPage';
import SignInPage from './Components/pages/SignIn/SignIn';
import { store } from './Components/Store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/enter-page' element={<GotoSignUp />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
