import {apiClient} from "./ApiClient";
import axios from "axios";

const createTicket =
    (numbers) => axios.post(`/api/inputNumbers?numbers=${numbers}`)

const checkResult =
    (ticketId) => axios.get(`/api/winners/${ticketId}`)

const ApiService = {createTicket, checkResult}

export default ApiService