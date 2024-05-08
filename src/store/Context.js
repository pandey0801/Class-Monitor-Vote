import React from "react";
import { useState } from "react";

export const Context = React.createContext({
  formdata:[],
  sudata:[],
  dedata:[],
  abdata:[],


  addData:()=>{},
  deleteHandler:()=>{},
  dedeleteHandler:()=>{},
  abdeleteHandler:()=>{},


});

const ContextProvider = ({children})=>
{
  const [formdata, setFormdata] = useState([]);
  const [sudata, setsudata] = useState([]);
  const [dedata, setDedata] = useState([]);
  const [abdata, setAbdata] = useState([]);

const addData = (name, monitor, key) => {
  const newData = [...formdata, { name: name, monitor: monitor, key: key }];
  
  const sureshData = newData.filter((item) => item.monitor === "Suresh");
  const deepankData = newData.filter((item) => item.monitor === "Deepank");
  const abhikData = newData.filter((item) => item.monitor === "Abhik");

  setFormdata(newData);
  setsudata(sureshData);
  setDedata(deepankData);
  setAbdata(abhikData);
};

  const deleteHandler = (id) => {
      const newdata = formdata.filter(item => item.key !== id);
      const sureshData = newdata.filter((item) => item.monitor === "Suresh");
      setsudata(sureshData); 
      setFormdata(newdata)
  };

  const dedeleteHandler = (id) => {
      const newdata = formdata.filter(item => item.key !== id);
      const abData = newdata.filter((item) => item.monitor === "Deepank");
      setDedata(abData); 
      setFormdata(newdata);
  };

  const abdeleteHandler = (id) => {
      const newdata = formdata.filter(item => item.key !== id);
      const deData = newdata.filter((item) => item.monitor === "Abhik");
      setAbdata(deData);
      setFormdata(newdata);

  };
  return(
    <Context.Provider value={{
      formdata:formdata,
      sudata:sudata,
      dedata:dedata,
      abdata:abdata,

      addData:addData,
      deleteHandler:deleteHandler,
      dedeleteHandler:dedeleteHandler,
      abdeleteHandler:abdeleteHandler,   
    }}> 
    {children}
    </Context.Provider>
  );

}
export default ContextProvider;
