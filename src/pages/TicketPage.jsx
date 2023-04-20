import useApiService from "../api/useApiService";

export default function TicketPage() {
    const {ticket, error, isLoading} = useApiService()

    return (
        <div className="container mt-5 p-3 alert alert-success text-center rounded">
            {isLoading && !ticket && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {ticket && (
                <div>
                    <h2 className="mb-4">Your ticket</h2>
                    <div className="mb-3">
                        Ticket ID: <span className="fw-bold">{ticket.lotteryId}</span>
                    </div>
                    <div className="mb-3">
                        Numbers: <span className="fw-bold">{ticket.userNumbers.map(number => <span
                        key={number}>{number}  </span>)}</span>
                    </div>
                    <div className="mb-3">
                        Draw Date: <span className="fw-bold">{ticket.drawDate}</span>
                    </div>
                </div>
            )}
        </div>
    );
}