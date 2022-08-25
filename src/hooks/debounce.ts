import { useEffect, useState } from "react";

interface IDebounced {
    debounced: string
}

export const useDebounce = (value: string , delay: number = 300): IDebounced  => {
    const [debounced , setDebounced] = useState<string>(value);
    useEffect(()=>{
        const handler = setTimeout(()=> {
            setDebounced(value);
        },delay)
        return () => clearInterval(handler);
    },[value , delay])
    return { debounced };
}