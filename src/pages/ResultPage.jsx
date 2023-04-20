import useApiService from "../api/useApiService";
import TicketNotFoundComponent from "../components/TicketNotFoundComponent";

export default function ResultPage() {
    const {result, error} = useApiService()

    return (
        <>
            {error && <TicketNotFoundComponent/>}

            {result && !error && (
                <div className="container mt-5 p-3 alert alert-success text-center rounded">
                    <>
                        <h2 className="mb-4">Your Result</h2>
                        <p>
                            <span>Ticket Id.: </span>
                            <span className="fw-bold">{result.ticketId}</span>
                        </p>
                        <p>
                            <span>Numbers: </span>
                            <span className="fw-bold">{result.playerNumbers.map(number => <span
                                key={number}>{number}  </span>)}</span>
                        </p>
                        <p>
                            <span>Draw date: </span>
                            <span className="fw-bold">{result.drawDate}</span>
                        </p>
                        <p>
                            <span>Lotto numbers: </span>
                            <span className="fw-bold">{result.winningNumbers.map(number => <span
                                key={number}>{number}  </span>)}</span>
                        </p>
                        <p>
                            <span>Hits: </span>
                            <span className="fw-bold">{result.hitNumber}</span>
                        </p>
                        {result.hitNumber > 3 ? (
                            <p className="fs-4 fst-italic">Congratulations!!!</p>
                        ) : (
                            <p className="fs-4 fst-italic">Please try again!</p>
                        )}

                    </>
                </div>
            )}
        </>
    )
}