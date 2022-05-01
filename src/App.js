import React, { useState} from 'react';
import InputField from './Components/Input';
import inputAttr from './SharedData/InputAttr';
import MemoizedDiagram from './Components/Diagram';
import './App.css';


function App() {
  const [labels, setLabels] = useState('');
  const [values, setValues] = useState('')
  const [chartLabels, setChartLabels] = useState(['January', 'February', 'March', 'April', 'May']);
  const [chartValues, setChartValues] = useState([1, 5, 10, 1, 2]);
  const [type, setType] = useState('bar');
  
  const handleChange = (e) => {
    const target = e.target.name;
    switch (target) {
      case "labels":
        setLabels(e.target.value);
        break;
      case "values":
        setValues(e.target.value);
        break;
      default:
        return;
    }
  };
  
  const handleBlur = () => {
    setChartLabels(labels.split(','));
    setChartValues(values.split(','));
  };

  const handleChartTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key=== 'Enter') {
      e.preventDefault();
      handleBlur();
     console.log(e.key);
    }
  };
  return (
    <div className="App">
     <div className='InputGroup'>
        <InputField
        {...inputAttr.labels}
        value={labels}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
        />
        <InputField
        {...inputAttr.values}
        value={values}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyPress ={handleKeyPress}
        />
     </div>
     <MemoizedDiagram type={type} labels={chartLabels} values={chartValues} redraw/>
     <div className='RadioGroup'>
       <InputField {...inputAttr.bar}
       value={'bar'}
       onChange={handleChartTypeChange}/>
       <InputField {...inputAttr.line}
       value={'line'}
       onChange={handleChartTypeChange}/>
       <InputField {...inputAttr.pie}
       value={'pie'}
       onChange={handleChartTypeChange}/>
       <InputField {...inputAttr.doughnut}
       value={'doughnut'}
       onChange={handleChartTypeChange}/>
     </div>
    </div>
  );
}

export default App;

