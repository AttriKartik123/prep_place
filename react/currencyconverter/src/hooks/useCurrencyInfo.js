// these can also use built in hooks for ex use effect and usestate

import { useEffect , useState } from "react"
function useCurrencyInfo(currency) // currency is a variable
 {
    //jab hook load ho tabhi us Api ko call kro
    //useeffect hook - callback and dependency  
    const [data , setData] = useState({})
    useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.6.13/v1/currencies/${currency}.json`)
    .then((res) => res.json()) // object ki structuring 
    .then((res) => setData(res[currency])) //.then- used to handle the outut of an API 
    console.log(data);
    }, [currency, data]) // taaki jb bhi currency me change ho tabhi ye dobara se chle
    
    console.log(data);
    return data 

}

export default useCurrencyInfo ;


