import './App.css';
import Carlist from './components/Carlist';
import {AgGridReact} from'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
function App() {
  return (
    <div className="App">
      <Carlist />
    </div>
  );
}

export default App;
