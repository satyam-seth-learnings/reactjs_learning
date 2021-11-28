import { useState } from 'react';

function useCustomCoubnter(){
    const [count, setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    };
    return {
        count,
        handleIncrement
    };
}

export default useCustomCoubnter;