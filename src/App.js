import './App.css';
import {useRoutes} from "react-router-dom"
import routes from './Pages/routes';

function App() {
  const RoutesApp = useRoutes(routes)
  return (
    <div className="App">
      {RoutesApp}
    </div>
  );
}

export default App;
