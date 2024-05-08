import Abhik from "./Component/Abhik";
import Deepank from "./Component/Deepank";
import LenForm from "./Component/LenForm";
import Modal from "./Component/Modal";
import ContextProvider from "./store/Context";
import Suresh from "./Component/Suresh";


function App() {
  return (
    <ContextProvider>
      <h1>Class Monitor Vote</h1>
      <Modal/>
      <LenForm/>
      <Suresh/>
      <Deepank/>
      <Abhik/>
</ContextProvider>
  );
}
export default App;