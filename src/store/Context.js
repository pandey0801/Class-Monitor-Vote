// import React from "react";
// import { useState } from "react";

// export const Context = React.createContext({
//   formdata:[],
//   sudata:[],
//   dedata:[],
//   abdata:[],


//   addData:()=>{},
//   deleteHandler:()=>{},
//   dedeleteHandler:()=>{},
//   abdeleteHandler:()=>{},


// });

// const ContextProvider = ({children})=>
// {
//   const [formdata, setFormdata] = useState([]);
//   const [sudata, setsudata] = useState([]);
//   const [dedata, setDedata] = useState([]);
//   const [abdata, setAbdata] = useState([]);

// const addData = (name, monitor, key) => {
//   const newData = [...formdata, { name: name, monitor: monitor, key: key }];
  
//   const sureshData = newData.filter((item) => item.monitor === "Suresh");
//   const deepankData = newData.filter((item) => item.monitor === "Deepank");
//   const abhikData = newData.filter((item) => item.monitor === "Abhik");

//   setFormdata(newData);
//   setsudata(sureshData);
//   setDedata(deepankData);
//   setAbdata(abhikData);

//   addDataApi(newData);


// };

//   const deleteHandler = (id) => {
//       const newdata = formdata.filter(item => item.key !== id);
//       const sureshData = newdata.filter((item) => item.monitor === "Suresh");
//       setsudata(sureshData); 
//       setFormdata(newdata);

//       fetchVoteData(newdata);

//       addDataApi(newdata);

//   };

//   const dedeleteHandler = (id) => {
//       const newdata = formdata.filter(item => item.key !== id);
//       const abData = newdata.filter((item) => item.monitor === "Deepank");
//       setDedata(abData); 
//       setFormdata(newdata);

//       addDataApi(newdata);
//   };

//   const abdeleteHandler = (id) => {
//       const newdata = formdata.filter(item => item.key !== id);
//       const deData = newdata.filter((item) => item.monitor === "Abhik");
//       setAbdata(deData);
//       setFormdata();

//       addDataApi(newdata);
//   };

//   const addDataApi = async (newdata) => {
//     try {
//         const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/vote.json`, {
//         method: 'PUT',
//         body: JSON.stringify(newdata),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to store cart data');
//       }

//       const data = await response.json();
//       console.log('Cart data stored successfully:', data);
//     } catch (error) {
//       console.error('Error storing cart data:', error.message);
//     }
//   };

//   const fetchVoteData = async () => {
//     try {
//       // const sanitizedEmail = email ? email.replace(/[@.]/g, '_') : '';
//       // console.log(sanitizedEmail);
  
//       const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/vote.json`);
//       if (!response.ok) {
//         throw new Error('Something went wrong while fetching cart data!');
//       }
//       const data = await response.json();
  
//       if (data) {
//         console.log(data);
//       }
//     } catch (error) {
//       console.log('Error fetching cart data:', error.message);
//     }
//   };

//   return(
//     <Context.Provider value={{
//       formdata:formdata,
//       sudata:sudata,
//       dedata:dedata,
//       abdata:abdata,

//       addData:addData,
//       deleteHandler:deleteHandler,
//       dedeleteHandler:dedeleteHandler,
//       abdeleteHandler:abdeleteHandler,   
//     }}> 
//     {children}
//     </Context.Provider>
//   );

// }
// export default ContextProvider;


import React, { useState, useEffect } from "react";

export const Context = React.createContext({
  formdata: [],
  sudata: [],
  dedata: [],
  abdata: [],

  addData: () => {},
  deleteHandler: () => {},
  dedeleteHandler: () => {},
  abdeleteHandler: () => {},
});

const ContextProvider = ({ children }) => {
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

    addDataApi(newData);
  };

  const deleteHandler = (id) => {
    const newdata = formdata.filter(item => item.key !== id);
    const sureshData = newdata.filter((item) => item.monitor === "Suresh");
    setsudata(sureshData);
    setFormdata(newdata);

    addDataApi(newdata);
  };

  const dedeleteHandler = (id) => {
    const newdata = formdata.filter(item => item.key !== id);
    const abData = newdata.filter((item) => item.monitor === "Deepank");
    setDedata(abData);
    setFormdata(newdata);

    addDataApi(newdata);
  };

  const abdeleteHandler = (id) => {
    const newdata = formdata.filter(item => item.key !== id);
    const deData = newdata.filter((item) => item.monitor === "Abhik");
    setAbdata(deData);
    setFormdata(newdata);

    addDataApi(newdata);
  };

  const addDataApi = async (newdata) => {
    try {
      const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/vote.json`, {
        method: 'PUT',
        body: JSON.stringify(newdata),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to store cart data');
      }

      const data = await response.json();
      console.log('Cart data stored successfully:', data);
    } catch (error) {
      console.error('Error storing cart data:', error.message);
    }
  };

  const fetchVoteData = async () => {
    try {
      const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/vote.json`);
      if (!response.ok) {
        throw new Error('Something went wrong while fetching cart data!');
      }
      const data = await response.json();

      if (data) {
        const newData = Array.isArray(data) ? data : Object.values(data);
        setFormdata(newData);

        const sureshData = newData.filter((item) => item.monitor === "Suresh");
        const deepankData = newData.filter((item) => item.monitor === "Deepank");
        const abhikData = newData.filter((item) => item.monitor === "Abhik");

        setsudata(sureshData);
        setDedata(deepankData);
        setAbdata(abhikData);
      }
    } catch (error) {
      console.log('Error fetching cart data:', error.message);
    }
  };

  useEffect(() => {
    fetchVoteData();
  }, []);

  return (
    <Context.Provider value={{
      formdata: formdata,
      sudata: sudata,
      dedata: dedata,
      abdata: abdata,

      addData: addData,
      deleteHandler: deleteHandler,
      dedeleteHandler: dedeleteHandler,
      abdeleteHandler: abdeleteHandler,
    }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

