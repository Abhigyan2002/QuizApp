import React from "react";


function Quiz(props) {
    const handleReset=()=>{
      props.handleReset();
    }

    const handleNext=(s)=>{
        console.log(s);
        props.setButtonState(true);
        if (s===props.questions.Correct) {
            console.log("Correct");
            props.setScore(props.score+1);
            props.showAlert('success');
            console.log(props.score);
        }
        else
        {
            console.log("Incorrect");
            props.showAlert('danger');
        }
        
        setTimeout(() => {
            props.next();
        }, 700); 

    }

  return (
    <div className="container text-center">
      <h2 className="my-5">Q{props.currQues + 1}. {props.questions.Question}</h2>
      <h3 className="my-5">Options</h3>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-light m-3"
              onClick={()=>handleNext(props.questions.Options.first)}
              style={{fontSize:'20px'}}
              disabled={props.buttonState}
            >
              A. <span style={{fontWeight:'bold'}}>{props.questions.Options.first}</span>
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-light m-3"
              onClick={()=>handleNext(props.questions.Options.second)}
              style={{fontSize:'20px'}}
              disabled={props.buttonState}
            >
              B. <span style={{fontWeight:'bold'}}>{props.questions.Options.second}</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-light m-3"
              onClick={()=>handleNext(props.questions.Options.third)}
              style={{fontSize:'20px'}}
              disabled={props.buttonState}
            >
              C. <span style={{fontWeight:'bold'}}>{props.questions.Options.third}</span>
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-light m-3"
              onClick={()=>handleNext(props.questions.Options.fourth)}
              style={{fontSize:'20px'}}
              disabled={props.buttonState}
            >
              D. <span style={{fontWeight:'bold'}}>{props.questions.Options.fourth}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
      <button type="button" className="btn btn-dark" onClick={handleReset}>
        Restart
        </button>
        </div>
    </div>
  );
}

export default Quiz;
