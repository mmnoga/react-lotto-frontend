import {useState} from "react";
import ApiService from "../api/ApiService";
import ResultComponent from "../components/ResultComponent";
import TicketNotFoundComponent from "../components/TicketNotFoundComponent";

export default function ResultPage() {

    const [ticketId, setTicketId] = useState("")
    const [result, setResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const checkResult = async () => {
        try {
            const response = await ApiService.checkResult(ticketId)
            setResult((response.data))
        } catch (error) {
            setErrorMessage(error.response.data.message)
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        checkResult();
    }

    return (
        <div className="ResultPage bg-light pb-5 pt-4 text-center rounded">

            <h1>Results</h1>

            {!result && !errorMessage && (
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col m-4">
                            <div>Enter ticket ID:</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="input-group w-75">
                            <input type="text" name="ticketId" className="form-control"
                                   placeholder="ticket ID"
                                   value={ticketId} onChange={(e) => setTicketId(e.target.value)}/>
                            <button className="btn btn-success" type="submit button">Check Result</button>
                        </div>
                    </div>
                </form>
            )}

            {result && (
                <div className="m-5">
                    {result && <ResultComponent result={result}/>}
                </div>
            )}

            {errorMessage && (
                <div className="m-5">
                    <TicketNotFoundComponent message={errorMessage}/>
                </div>
            )}

        </div>
    )
}