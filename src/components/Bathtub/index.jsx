import { useState, useEffect } from 'react';
import './styles.css';

const Bathtub = () => {
  const [levels, setLevels] = useState([]);
  const [maxLeveles, setMaxLevels] = useState(5);
  const [increase, setIncrease] = useState(false);
  const [decrease, setDecrease] = useState(false);

  const increaseWaterLevel = () => {
    setIncrease(true);
    setDecrease(false);
  };

  const decreaseWaterLevel = () => {
    setIncrease(false);
    setDecrease(true);
  };

  useEffect(() => {
    if (increase) {
      setTimeout(() => {
        if (levels.length <= maxLeveles - 1) {
          setLevels(levels.concat(levels.length + 1));
        }
      }, 2000);
    }
    if (decrease) {
      setTimeout(() => {
        if (levels.length >= 0) {
          setLevels(levels.slice(0, levels.length - 1));
        }
      }, 2000);
    }
  }, [increase, decrease, levels]);

  return (
    <div className='container'>
      <div className='buttons-div'>
        <div className='button-container'>
          <button className='button' onClick={increaseWaterLevel}>
            Increase water level
          </button>
        </div>
        <div>
          <button className='button' onClick={decreaseWaterLevel}>
            Decrease water level
          </button>
        </div>
      </div>
      <div className='bathub'>
        {levels.map((level, index) => (
          <div className='bathub-level' key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default Bathtub;
