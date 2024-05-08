// import Button from "./Button";
import { Fragment, useContext } from "react";
import { Context } from "../store/Context";

const Deepank = ()=>
{
    const {dedata, dedeleteHandler} = useContext(Context);

    // const deleteHandeler = (id)=>
    // {
    //     dedeleteItem(id)
    // }

    return(
        <Fragment>
        <h3>Deepank</h3>

        {dedata.map((item) => (
        <p key={item.key}>{item.name} <button type="button" onClick={() => dedeleteHandler(item.key)}>Delete</button> </p> 
        ))}
        <p>total {dedata.length}</p>
        </Fragment>
    );
}
export default Deepank;