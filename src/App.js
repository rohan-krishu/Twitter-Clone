import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home/Home';
import GotoSignUp from './Components/pages/GotoSignUp/GotoSignUp';
import SignUpPage from './Components/pages/Register/SignUpPage';
import SignInPage from './Components/pages/SignIn/SignIn';
import { store } from './Components/Store/store';
import { Provider } from 'react-redux';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes >
          <Route element={<ProtectedRoutes />} >
            <Route path='/' element={<Home />} />
          </Route>
          
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/enter-page' element={<GotoSignUp />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
