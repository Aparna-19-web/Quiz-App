import React from 'react'
import { myBasket } from '../App'
function Home() {

  const { setCurrentComponent } = React.useContext(myBasket)

  function changeIt() {
    setCurrentComponent("Question")
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div class="card" style={{ width: 500 , padding:15,margin:'auto'}}>
         
              <div class="card-header">
                Hello, Students
              </div>
              <div class="card-body">
              <img src="https://cdn.pixabay.com/photo/2017/06/22/20/33/quiz-2432440__340.png" style={{width: 150, height:150}} class="card-img-top" alt="..."/>
                <h5 class="card-title"> Best Of Luck !! </h5>
                <p class="card-text"></p>
                <a href="#" class="btn btn-primary" onClick={changeIt}>Start Quiz</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Home