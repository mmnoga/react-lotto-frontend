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

                <div className="alert alert-info m-4">
                    <h5>Try your luck and <Link to="/game">play Lotto Game!</Link></h5>
                </div>
            </div>
        </>
    )
}