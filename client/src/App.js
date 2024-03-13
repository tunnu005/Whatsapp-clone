import Messanger from './components/messanger'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId='3770122182-bt02dchjnpa4ulhqn0v8kshvvsbbd696.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
            <Messanger />
        </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
