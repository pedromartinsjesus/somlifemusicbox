import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ApplicationRoutes from './ApplicationRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
