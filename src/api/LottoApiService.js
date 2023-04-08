import {apiClient} from "./ApiClient";

export const createTicketApi =
    (numbers) => apiClient.post(`/inputNumbers?numbers=${numbers}`)

export const checkResult =
    (ticketId) => apiClient.get(`/winners/${ticketId}`)