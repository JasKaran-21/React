import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})  // empty object for no crash/error
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())    // convert data string into JSON
            .then((res) => setData(res[currency]))    // hold data, [access of currency key]
            // console.log(data);
    }, [currency])  // if any change in currency then execute again 
    // console.log(data);
    return data
}

export default useCurrencyInfo;
