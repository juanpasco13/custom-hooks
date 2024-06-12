import { useEffect, useState } from "react"

const dataIniti = {
    data:null,
    isLoading:true,
    hasError:false,
    errorMessage:null
};

const localCache = {};

export const useFetch = ( url ) => {
    
    const [state, setState] = useState(dataIniti);

    useEffect(() => {
        getFetch();
    }, [ url ])

    const setLoadingState = () => {setState(dataIniti)};
    
    const getFetch = async () => { 

        if(localCache[url]){
            setState({
                data:localCache[url],
                isLoading:false,
                hasError:false,
                errorMessage:null
            });
            return;
        }

        setLoadingState();
        const resp = await fetch(url);
        await new Promise( resolve => { setTimeout( resolve, 1500)});
        if (!resp.status){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                errorMessage:{
                    code: resp.status,
                    message: resp.statusText.toString
                }
            })
            return;
        }
        const data = await resp.json();
        setState({
            data:data,
            isLoading:false,
            hasError:false,
            errorMessage:null
        })
        localCache[url] = data;
        console.log({data})
    }

    return {...state}
}
