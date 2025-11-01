import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'; 
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return( 
   <ThemeProvider>
    <AppRoutes />
    </ThemeProvider>

  )
}

export default App;