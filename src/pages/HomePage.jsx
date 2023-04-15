import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="HomePage bg-light pb-2 pt-4 text-center rounded">
                <h1>Lotto Game Application</h1>
                <h4>Rules</h4>
                <p>Player chooses 6 different numbers in range 1 to 99. System returns ticket with ID and next draw
                    date.</p>
                <p>Draw numbers takes place at 12.oo on every Saturday.</p>
                <p>Player <Link to="/result">checks game results</Link> using ticket ID.</p>
                <h5>Try your luck and <Link to="/game">play Lotto Game!</Link></h5>
                <div className="alert alert-info m-4">
                    You can test application and check game results using IDs: 3f5b7169-4b88-4978-919a-3d857389c6ea
                    or dfe54e5d-37af-403a-a431-be98af44eca0
                </div>
            </div>
        </>
    )
}