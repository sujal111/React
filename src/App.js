import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name="Sujal"
function App() {
  return (
    <>
    
<Navbar title="TextUtils" aboutText="About Us"/>
<div className="container my-3">

<TextForm heading="Enter the text to analyse"/>
</div>


</>
  );
}

export default App;
