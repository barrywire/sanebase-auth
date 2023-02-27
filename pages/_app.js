// Custom styles import
import '../styles/globals.css';


// Utility imports
import { AuthContextProvider } from '../utility/AuthContext';

function MyApp({ Component, pageProps })
{
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )

}

export default MyApp
