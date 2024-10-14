import React from "react";

function Quiz(props) {
    

    const handleNext=(s)=>{
        console.log(s);
        props.setState(true);
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
              disabled={props.state}
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
              disabled={props.state}
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
              disabled={props.state}
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
              disabled={props.state}
            >
              D. <span style={{fontWeight:'bold'}}>{props.questions.Options.fourth}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;