import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home/Home';
import GotoSignUp from './Components/GotoSignUp/GotoSignUp';
import SignUpPage from './Components/Register/SignUpPage';
import SignInPage from './Components/SignIn/SignIn';
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
