import {useEffect, useState} from "react";
import axios from "axios";

let ticket = {}
let result = {}
let error = false
const useApiService = () => {
    const [isLoading, setIsLoading] = useState(true);
    const sendNumbers = async (numbers) => {
        ticket = {}
        error = false
        setIsLoading(true)

        try {
            const response = await axios
                .post(`/api/inputNumbers?numbers=${numbers}`);
            ticket = response.data;
        } catch (e) {
            error = true
        }
        setIsLoading(false);
    };
    const checkResult = async (ticketId) => {
        result = {}
        error = false
        setIsLoading(true);
        try {
            const response = await axios.get(`/api/winners/${ticketId}`);
            result = response.data;
        } catch (e) {
            error = true
        }
        setIsLoading(false);
    };

    return {
        sendNumbers,
        checkResult,
        ticket,
        result,
        isLoading,
        error
    };
};
export default useApiService;
