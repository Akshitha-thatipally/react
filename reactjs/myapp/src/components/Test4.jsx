import {useState} from 'react';
function Test4(){
    const [city,setCity]=useState("Warangal");
    useEffect(()=>{
      if(city=='warangal')
      {
         setCity("Telangana");
      }
      else{
         setCity("chennai");
      }
},[])
    return(
        <div>
            {city}
        </div>
    )
}
export default Test4;
