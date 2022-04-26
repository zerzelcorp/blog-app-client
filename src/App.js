import "./index.css";
import { AppRouter } from "./routes/AppRouter";

import {Footer} from './components/footer/Footer'

function App() {
  return (
    <div className="container-fluid position-relative">
      <AppRouter/>
    </div>


  );
}

export default App;
