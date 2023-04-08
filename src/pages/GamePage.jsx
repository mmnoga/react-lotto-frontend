import {createTicketApi} from "../api/LottoApiService";
import {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import TicketComponent from "../components/TicketComponent";

export default function GamePage() {

    const [ticket, setTicket] = useState(null)
    const onSubmit = (values) => {
        const queryParam = values.num1 + ',' + values.num2 + ',' + values.num3 + ','
            + values.num4 + ',' + values.num5 + ',' + values.num6

        createTicketApi(queryParam)
            .then(response => {
                setTicket(response.data)
            })
            .catch(error => console.log(error))
    }

    function validate(values) {
        let errors = {}

        if (Number(values.num1) < 1 || Number(values.num1 > 99)
        ) {
            errors.num1 = '#1 must be at range 1 to 99'
        }
        if (Number(values.num2) < 1 || Number(values.num2 > 99)
        ) {
            errors.num2 = '#2 must be at range 1 to 99'
        }
        if (Number(values.num3) < 1 || Number(values.num3 > 99)
        ) {
            errors.num3 = '#3 must be at range 1 to 99'
        }
        if (Number(values.num4) < 1 || Number(values.num4 > 99)
        ) {
            errors.num4 = '#4 must be at range 1 to 99'
        }
        if (Number(values.num5) < 1 || Number(values.num5 > 99)
        ) {
            errors.num5 = '#5 must be at range 1 to 99'
        }
        if (Number(values.num6) < 1 || Number(values.num6 > 99)
        ) {
            errors.num6 = '#6 must be at range 1 to 99'
        }

        if (values.num1 === '') {
            errors.num1 = '#1 must not be null'
        }
        if (values.num2 === '') {
            errors.num2 = '#2 must not be null'
        }
        if (values.num3 === '') {
            errors.num3 = '#3 must not be null'
        }
        if (values.num4 === '') {
            errors.num4 = '#4 must not be null'
        }
        if (values.num5 === '') {
            errors.num5 = '#5 must not be null'
        }
        if (values.num6 === '') {
            errors.num6 = '#6 must not be null'
        }

        if (checkDuplicate(values, values.num1, 0)) {
            errors.num1 = "#1 cannot be repeated"
        }
        if (checkDuplicate(values, values.num2, 1)) {
            errors.num2 = "#2 cannot be repeated"
        }
        if (checkDuplicate(values, values.num3, 2)) {
            errors.num3 = "#3 cannot be repeated"
        }
        if (checkDuplicate(values, values.num4, 3)) {
            errors.num4 = "#4 cannot be repeated"
        }
        if (checkDuplicate(values, values.num5, 4)) {
            errors.num5 = "#5 cannot be repeated"
        }
        if (checkDuplicate(values, values.num6, 5)) {
            errors.num6 = "#6 cannot be repeated"
        }

        return errors
    }

    function checkDuplicate(obj, value, id) {
        let numbers = Object.values(obj)
        numbers[id] = ''
        return numbers.includes(value)
    }

    return (
        <div className="GamePage">
            <h1>Lotto Game</h1>

            {!ticket && (
                <div>
                    <div className="col m-4">
                        <div>Input 6 numbers (from 1 to 99):</div>
                    </div>
                    <Formik
                        initialValues={{
                            num1: '', num2: '', num3: '', num4: '', num5: '', num6: ''
                        }}
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validate={validate}
                        validateOnChang={false}
                        validateOnBlur={false}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="num1" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="num2" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="num3" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="num4" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="num5" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="num6" component="div" className="alert alert-warning"/>
                                    <div className="row">
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num1"
                                                   placeholder="#1"/>
                                        </div>
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num2"
                                                   placeholder="#2"/>
                                        </div>
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num3"
                                                   placeholder="#3"/>
                                        </div>
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num4"
                                                   placeholder="#4"/>
                                        </div>
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num5"
                                                   placeholder="#5"/>
                                        </div>
                                        <div className="col">
                                            <Field type="number" className="form-control" name="num6"
                                                   placeholder="#6"/>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-success" type="submit">Ticket</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            )}

            <div className="m-5">
                {ticket && <TicketComponent ticket={ticket}/>}
            </div>

        </div>
    )
}