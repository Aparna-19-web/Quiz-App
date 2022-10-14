import React from 'react'
import { myBasket } from '../App'

function Result() {

  const { score } = React.useContext(myBasket)
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>


            <div class="card text-center">
             
              <div class="card-body">
              <img src="https://media.istockphoto.com/vectors/thank-you-thanks-expressing-gratitude-note-on-a-sign-vector-id1147584034?k=20&m=1147584034&s=612x612&w=0&h=iqlBNQ6UrY_3Sxm5sC3v7IA3rw2PFSRqgOMwhfn8-l0=" style={{width: 150, height:150}} class="card-img-top" alt="..."/>
                <h5 class="card-title"> <br/></h5>
                <p class="card-text">Your Exam is finished. </p>
                <a href="#" class="btn btn-primary">  <h3>Your Score is :{score} </h3></a>
              </div>

            </div>





          </div>
        </div>
      </div>
    </div>
  )
}

export default Result