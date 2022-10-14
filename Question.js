import React from 'react'
import { myBasket } from '../App'
import { question } from '../myquestion'



function Question() {

    const [currentQuestion, setCurrentQuestion] = React.useState(0)

    const { setCurrentComponent, score, set } = React.useContext(myBasket)
    const [optionChoose, setOptionChoose] = React.useState("")

    function switchIt() {



        if (optionChoose === question[currentQuestion].answer) {
            set(score + 1)
        }


        setCurrentQuestion(currentQuestion + 1)

    }

    function goToResult() {
        if (optionChoose === question[currentQuestion].answer) {
            set(score + 1)
        }

        setCurrentComponent("Result")

    }
    return (
        <div>
            <div>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="modal-header">
                                <h5 className="modal-title">Please Answers the following questions one by one</h5>
                            </div>

                            <div class="modal-body">
                                <div class="container">
                                    <div class="row">

                                        <p style={{ fontSize: 30, margin: 15 }}>Que. {question[currentQuestion].name}</p>

                                        <div class="col" style={{ textAlign: "left"}}>
                                            A.<button style={{ fontSize: 20, margin: 15  }} className='btn btn-outline-primary' onClick={function () {
                                                setOptionChoose("A")
                                            }}>{question[currentQuestion].A}</button><br />
                                            B.<button style={{ fontSize: 20, margin: 15 }} className='btn btn-outline-primary' onClick={function () {
                                                setOptionChoose("B")
                                            }}>{question[currentQuestion].B}</button><br />

                                            C.<button style={{ fontSize: 20, margin: 15 }} className='btn btn-outline-primary' onClick={function () {
                                                setOptionChoose("C")
                                            }}>{question[currentQuestion].C}</button><br />

                                            D.<button style={{ fontSize: 20, margin: 15 }} className='btn btn-outline-primary' onClick={function () {
                                                setOptionChoose("D")
                                            }}>{question[currentQuestion].D}</button>
                                        </div>

                                    </div>
                                </div>


                            </div>


                            <div class="modal-footer">
                                {
                                    (question.length - 1 === currentQuestion) ? <button className='btn btn-primary' style={{ fontSize: 30, marginLeft: 200 }} onClick={goToResult}>Finish</button>
                                        :
                                        <button className='btn btn-primary' style={{ fontSize: 30, marginLeft: 200 }} onClick={switchIt}>Next</button>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Question