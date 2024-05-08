import { Fragment, useContext } from "react";
import { Context } from "../store/Context";
const Suresh = ()=>
{

    const {sudata, deleteHandler} = useContext(Context)
    return(
        <Fragment>
        <h3>Suresh</h3>

        {sudata.map((item) => (
         <p key={item.key} >{item.name} <button type="button" onClick={() => deleteHandler(item.key)}>Delete</button></p>  
        ))}
        <p>total {sudata.length}</p>
        </Fragment>
    );
}
export default Suresh;
