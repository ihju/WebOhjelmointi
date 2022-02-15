
import './App.css';
import Yläpalkki from './components/Yläpalkki'
import OikeaLaita from './components/OikeaLaita'
import Yläpalkki2 from './components/Yläpalkki2'
import YlinPalkki from './components/YlinPalkki'
import Sisältö from './components/Sisältö'


function App() {

  return (
    <div className="Tausta"> 
      <YlinPalkki/>
      <Yläpalkki />
      <OikeaLaita />
      <Yläpalkki2 />
      <Yläpalkki2 />
      <Sisältö />
      <Sisältö />
      <Sisältö />
      <Sisältö />
      
    </div>
  );
}

export default App;
