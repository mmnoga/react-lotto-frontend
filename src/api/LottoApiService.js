import {apiClient} from "./ApiClient";

export const createTicketApi =
    (numbers) => apiClient.post(`/inputNumbers?numbers=${numbers}`)