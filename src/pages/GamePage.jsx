export default function GamePage() {
    return (
        <div className="GamePage">
            <h1>Lotto Game</h1>
            <form>
                <div className="row">
                    <div className="col">
                        <div>Input 6 numbers (from 1 to 99):</div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#1"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#2"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#3"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#4"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#5"/>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="#6"/>
                    </div>
                    <div className="col">
                        <button className="btn btn-success">Generate Ticket</button>
                    </div>
                </div>

            </form>
        </div>
    )
}