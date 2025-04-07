
import { useState,useEffect } from "react"
import {Rest_URL} from './constant'

const useResInfoData =  (resId) =>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchResInfo();
    },[])

    const fetchResInfo= async () =>{
        const data = await fetch(Rest_URL+resId);
        const res = await data.json()
        setResInfo(res);
    }
    return resInfo;
}

export default useResInfoData;