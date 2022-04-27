import {useState,useEffect,useRef}from 'react'
import { getData } from '../../helpers/getData'

export const useFetch = (url) => {

const [state, setData ] = useState({data:null,loading:true,error:null})

const isMounted = useRef(true);

useEffect( () => {
    return () => {
        isMounted.current = false;
    }
}, [])

useEffect(()=>{
    try {
    getData(url)
    .then ( p => {
        if(isMounted.current){

            setData({
                data:p.data.res,
                loading:false,
                error:null
            })
        }
        console.log("use fetch",state)
    })  
} catch (error) {
        setData({
            data:null,
            loading:false,
            error:error
        })
    }
},[url])

return state;

}
