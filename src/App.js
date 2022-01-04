import React,{useState} from "react";
import Button from "./Button";
import Mount from "./Mount";

function App(props) {
  const [count, setCount] = useState(0);
  const [showMount,setShowMount] = useState(true);
  

  React.useEffect(()=>{
    setTimeout(() => {
      setShowMount(false);
    },1000)
      },[]);

  return (
    <>
 <h1>
   {count}
 </h1>
 <Button inc={true} setCount={setCount}/>
 <Button inc={false} setCount={setCount}/>
{
 showMount?<Mount />:null}
</>
  );
}
  export default App;