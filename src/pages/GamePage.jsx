import React, {useState} from "react";
import useApiService from "../api/useApiService";
import {useNavigate} from "react-router-dom";

const GamePage = () => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState([1, 2, 3, 4, 5, 6]);
    const [formError, setFormError] = useState(null);

    const {sendNumbers} = useApiService()

    const handleInputChange = (event, index) => {
        const value = Number(event.target.value);
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };

    const handleRandomClick = () => {
        const newValues = [];
        for (let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * 99) + 1;
            while (newValues.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 99) + 1;
            }
            newValues.push(randomNumber);
        }
        setInputValues(newValues);
        setFormError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const uniqueValues = Array.from(new Set(inputValues));

        if (uniqueValues.length !== 6) {
            setFormError("Please enter 6 unique numbers from 1 to 99.");
            return;
        }
        for (let i = 0; i < 6; i++) {
            if (inputValues[i] < 1 || inputValues[i] > 99) {
                setFormError("Please enter numbers between 1 and 99.");
                return;
            }
        }
        setFormError(null);
        await sendNumbers(uniqueValues)

        navigate('/ticket')
    };

    return (
        <div className="container mt-5 bg-light pb-2 pt-4 text-center rounded">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>

                        <h2 className="mb-3">Play Lotto Game</h2>
                        <div className="mb-4">Input 6 numbers (form 1 to 99)</div>

                        {formError && (
                            <div className="alert alert-danger" role="alert">
                                {formError}
                            </div>
                        )}
                        <div className="d-flex flex-nowrap gap-2 justify-content-center">
                            {inputValues.map((value, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        min="1"
                                        max="99"
                                        value={value}
                                        onChange={(event) => handleInputChange(event, index)}

                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mb-3">
                            <button
                                type="button"
                                className="btn btn-primary me-2"
                                onClick={handleRandomClick}
                            >
                                Random
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Ticket
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default GamePage;

