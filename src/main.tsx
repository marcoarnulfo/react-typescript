
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(


  // <React.StrictMode>
  // </React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
)
