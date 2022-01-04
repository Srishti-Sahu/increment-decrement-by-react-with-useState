import React from 'react'

function Mount() {
    React.useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("interval is running")
        },1000);
        return ()=>{
          console.log('interval closed');
          clearInterval(interval)
        }
    },[]);
    return (
        <div>
            I AM HERE
        </div>
    )
}

export default Mount;
