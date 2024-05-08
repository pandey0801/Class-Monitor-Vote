import { useContext } from "react";
import { Context } from "../store/Context";

const LenForm =()=>
{
    // console.log(data.length)
    const {formdata} = useContext(Context);
    // console.log(formdata)

return(
<>
<p>total Vote {formdata.length}</p>
</>
);
}
export  default LenForm;