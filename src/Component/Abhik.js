// import Button from "./Button";
import { Context } from "../store/Context";
import { Fragment, useContext } from "react";
const Abhik = ()=>
{
    const {abdata, abdeleteHandler} = useContext(Context);

    return(
        <Fragment>
        <h3>Abhik</h3>

        {abdata.map((item) => (
         <p key={item.key} >{item.name} <button type="button" onClick={() => abdeleteHandler(item.key)}>Delete</button></p> 
        ))}
        <p>total {abdata.length}</p>
        </Fragment>
    );
}
export default Abhik;


