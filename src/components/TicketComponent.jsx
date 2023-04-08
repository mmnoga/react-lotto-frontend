export default function TicketComponent({ticket}) {
    return (
        <div className="TicketComponent alert alert-success">
            <p>
                <span>Ticket Id.: </span>
                <span className="fw-bold">{ticket.lotteryId}</span>
            </p>
            <p>
                <span>Your numbers: </span>
                <span className="fw-bold">{ticket.userNumbers.map(number => <span
                    key={number}>{number}  </span>)}</span>
            </p>
            <p>
                <span>Draw date: </span>
                <span className="fw-bold">{ticket.drawDate}</span>
            </p>
            <p className="fs-4 fst-italic">Good luck!</p>
        </div>
    )
}