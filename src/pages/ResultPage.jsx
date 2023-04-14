import {useState} from "react";
import {checkResult} from "../api/LottoApiService";
import ResultComponent from "../components/ResultComponent";
import TicketNotFoundComponent from "../components/TicketNotFoundComponent";

export default function ResultPage() {

    const [ticketId, setTicketId] = useState("")
    const [result, setResult] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const onSubmit = (e) => {
        e.preventDefault();
        checkResult(ticketId)
            .then(response => {
                setResult(response.data)
            })
            .catch(error => {
                    setErrorMessage(error.response.data.message)
                }
            )
    }

    return (
        <div className="ResultPage">

            <h1>Results</h1>

            {!result && !errorMessage && (
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col m-4">
                            <div>Enter ticket ID:</div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-9">
                            <input type="text" name="ticketId" className="form-control" placeholder="ticket ID"
                                   value={ticketId} onChange={(e) => setTicketId(e.target.value)}/>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-success" type="submit">Check Result</button>
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