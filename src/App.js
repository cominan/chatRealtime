import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ChatroomApp from './ChatroomApp/ChatroomApp';
import { Provider } from 'react-redux'
import AuthProvider, { authProvider } from './Context/AuthProvider';
import AuthRoomsProvider from './Context/AuthRoomdProvider';
import ModalAddRoom from './ModalAddRoom/ModalAddRoom';
import ModalInviteUser from './ModalAddRoom/ModalInviteUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <AuthRoomsProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<ChatroomApp />} />
            </Routes>
            <ModalAddRoom />
            <ModalInviteUser />
          </AuthRoomsProvider>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
