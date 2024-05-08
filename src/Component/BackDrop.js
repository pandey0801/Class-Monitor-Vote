import React from 'react';
import classes from './BackDrop.module.css'

export default function BackDrop({ onClose }) {
  // return <div className="back" onClick={onClose}></div>;
  return ( <div className={classes.back}  onClick={onClose} />);
}


// const BackDrop = ({onClose})=>
//   {
//       return ( <div className={classes.back}  onClick={onClose} />);
//   };