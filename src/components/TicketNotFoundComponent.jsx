export default function TicketNotFoundComponent({message}) {
    return (
        <div className="alert alert-danger">
            <p>{message}</p>
        </div>
    )
}