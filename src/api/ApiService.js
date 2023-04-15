// import {useEffect, useState} from "react";
// import axios from "axios";
//
// import {apiClient} from "./ApiClient";
//
// export const useFetch = (method, url) => {
//     const [data, setData] = useState(null)
//     const [isLoading, setIsLoading] = useState(true)
//     const [error, setError] = useState(null)
//
//     useEffect(() => {
//         axios({
//             url,
//             method: method
//         })
//             .then(response => {
//                 setData(response.data)
//                 setIsLoading(false)
//             })
//             .catch(error => {
//                 console.log(error.message)
//                 setError(error)
//                 setIsLoading(false)
//             });
//     }, [url])
//
//     return {data, isLoading, error}
// }


import {apiClient} from "./ApiClient";

const createTicket =
    (numbers) => apiClient.post(`/inputNumbers?numbers=${numbers}`)

const checkResult =
    (ticketId) => apiClient.get(`/winners/${ticketId}`)

const ApiService = {createTicket, checkResult}

export default ApiService