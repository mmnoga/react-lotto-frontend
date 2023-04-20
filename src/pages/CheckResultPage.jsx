import {useState} from "react";
import useApiService from "../api/useApiService";
import {useNavigate} from "react-router-dom";

export default function CheckResultPage() {
    const navigate = useNavigate();
    const [ticketId, setTicketId] = useState("")
    const {checkResult, result, error} = useApiService()

    const onSubmit = async (e) => {
        e.preventDefault();
        await checkResult(ticketId)
        navigate('/result')
    }

    return (
        <div className="ResultPage mt-5 p-3 bg-light text-center rounded">
            <h2 className="mb-3">Check Results</h2>
            <>
                <div className="mb-4">Enter ticket ID</div>
                <form onSubmit={onSubmit}>
                    <div className="d-flex justify-content-center">
                        <div className="input-group w-50">
                            <input type="text" name="ticketId" className="form-control"
                                   placeholder="ticket ID" required
                                   value={ticketId} onChange={(e) => setTicketId(e.target.value)}/>
                            <button className="btn btn-success" type="submit button">Check Result</button>
                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}