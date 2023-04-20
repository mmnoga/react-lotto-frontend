export default function ResultComponent({result}) {

    return (
        <div className="d-flex justify-content-center">
            <div className="alert alert-success w-75">
                <p>
                    <span>Ticket Id.: </span>
                    <span className="fw-bold">{result.ticketId}</span>
                </p>
                <p>
                    <span>Your numbers: </span>
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
                <p className="fs-4 fst-italic">Thank you!</p>
            </div>
        </div>
    )
}