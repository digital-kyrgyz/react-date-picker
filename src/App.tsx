import React, {useState} from 'react';
import './App.css';
import YearPicker from "./components/YearPicker";

function App() {
  //states
  const [year, setYear] = useState<Date | null>(null);

  //event handlers
  const getYear = (year: Date | null) => {
    setYear(year);
    console.log("Year: ", year);
  }
  return (
    <div className="App mt-5">
      <YearPicker sendDataToParent={getYear}/>
        <br/>
        <div className="row d-flex justify-content-center">
            <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">Selected year</div>
                <div className="card-body">
                    <h5 className="card-title">{year?.getFullYear()}</h5>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
