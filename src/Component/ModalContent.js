import classes from './BackDrop.module.css'
import { Context } from '../store/Context';
import { useContext , useState} from 'react';

export default function ModalContent({ onClose }) {


  const {addData} = useContext(Context);

  const [name,setName] = useState("");
  const [monitor, setMonitor] = useState("Suresh");

  const nameHandler = (event) =>
  {
      setName(event.target.value);
  }

  const monitorHandler = (event)=>
  {
      setMonitor(event.target.value);
  }

  const submitHandler =(event)=>
  {
      event.preventDefault();

      const key = Math.random().toString();

      addData(name, monitor, key)
      onClose()
  }

    return (
    
      <div className={classes.modal}>
          <form onSubmit={submitHandler}>
          <label> Name
          <input
          type="text"
          onChange={nameHandler}
          />
          </label>
  
          <select value={monitor} onChange={monitorHandler}>
          <option value="Suresh">Suresh</option>
          <option value="Deepank">Deepank</option>
          <option value="Abhik">Abhik</option>
          </select>
  
          <button type="submit">Submit</button>
          <button onClick={onClose}>Close</button>
          </form>
        </div>

    );
  }

  