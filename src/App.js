import { Element } from "react-scroll";
import Header from './components/Header';
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Element name="link" className="section-content-1">
          Link
        </Element>
        <Element name="career" className="section-content-2">
          403 Forbidden
        </Element>
        <Element name="qualification" className="section-content-3">
          403 Forbidden
        </Element>
      </div>
    </div>
  );
}

export default App;
