import React, { useState } from "react";
import Quiz from "./Quiz";
import Alerts from "./Alerts";




function MainDiv(props) {
    const questions = [
        {
          Question: "What is the capital of France?",
          Options: {
            first: "Berlin",
            second: "Madrid",
            third: "Paris",
            fourth: "Rome",
          },
          Correct: "Paris",
          Id:0
        },
        {
          Question: "Which planet is known as the Red Planet?",
          Options: {
            first: "Earth",
            second: "Mars",
            third: "Jupiter",
            fourth: "Saturn",
          },
          Correct: "Mars",
          Id:1
        },
        {
          Question: "Who wrote 'Hamlet'?",
          Options: {
            first: "Charles Dickens",
            second: "William Shakespeare",
            third: "Mark Twain",
            fourth: "Jane Austen",
          },
          Correct: "William Shakespeare",
          Id:2
        },
        {
          Question: "Which is the largest ocean on Earth?",
          Options: {
            first: "Atlantic Ocean",
            second: "Indian Ocean",
            third: "Pacific Ocean",
            fourth: "Arctic Ocean",
          },
          Correct: "Pacific Ocean",
          Id:3
        },
        {
          Question: "In which year did the Titanic sink?",
          Options: {
            first: "1912",
            second: "1905",
            third: "1898",
            fourth: "1920",
          },
          Correct: "1912",
          Id:4
        },
        {
            Question: "What is the chemical symbol for water?",
            Options: {
              first: "O2",
              second: "H2O",
              third: "CO2",
              fourth: "NaCl",
            },
            Correct: "H2O",
            Id:5
          },
          {
            Question: "Which country is home to the kangaroo?",
            Options: {
              first: "India",
              second: "Australia",
              third: "South Africa",
              fourth: "Canada",
            },
            Correct: "Australia",
            Id:6
          },
          {
            Question: "Who was the first person to walk on the moon?",
            Options: {
              first: "Neil Armstrong",
              second: "Buzz Aldrin",
              third: "Yuri Gagarin",
              fourth: "Michael Collins",
            },
            Correct: "Neil Armstrong",
            Id:7
          },
          {
            Question: "Which element is the most abundant in the Earth's atmosphere?",
            Options: {
              first: "Oxygen",
              second: "Hydrogen",
              third: "Nitrogen",
              fourth: "Carbon Dioxide",
            },
            Correct: "Nitrogen",
            Id:8
          },
          {
            Question: "Which artist painted the Mona Lisa?",
            Options: {
              first: "Vincent van Gogh",
              second: "Pablo Picasso",
              third: "Leonardo da Vinci",
              fourth: "Claude Monet",
            },
            Correct: "Leonardo da Vinci",
            Id:9
          },
          {
            Question: "What is the largest planet in our solar system?",
            Options: {
              first: "Earth",
              second: "Venus",
              third: "Jupiter",
              fourth: "Saturn",
            },
            Correct: "Jupiter",
            Id:10
          },
          {
            Question: "Which country hosted the 2016 Summer Olympics?",
            Options: {
              first: "Japan",
              second: "Brazil",
              third: "China",
              fourth: "Russia",
            },
            Correct: "Brazil",
            Id:11
          },
          {
            Question: "Who discovered penicillin?",
            Options: {
              first: "Marie Curie",
              second: "Alexander Fleming",
              third: "Isaac Newton",
              fourth: "Louis Pasteur",
            },
            Correct: "Alexander Fleming",
            Id:12
          },
          {
            Question: "Which number is represented by the Roman numeral 'X'?",
            Options: {
              first: "5",
              second: "10",
              third: "50",
              fourth: "100",
            },
            Correct: "10",
            Id:13
          },
          {
            Question: "What is the hardest natural substance on Earth?",
            Options: {
              first: "Gold",
              second: "Iron",
              third: "Diamond",
              fourth: "Silver",
            },
            Correct: "Diamond",
            Id:14
          },
          {
            Question: "What is the smallest prime number?",
            Options: {
              first: "0",
              second: "1",
              third: "2",
              fourth: "3",
            },
            Correct: "2",
            Id: 15,
          },
          {
            Question: "What is the capital city of Japan?",
            Options: {
              first: "Beijing",
              second: "Seoul",
              third: "Tokyo",
              fourth: "Bangkok",
            },
            Correct: "Tokyo",
            Id: 16,
          },
          {
            Question: "Who developed the theory of relativity?",
            Options: {
              first: "Isaac Newton",
              second: "Albert Einstein",
              third: "Nikola Tesla",
              fourth: "Galileo Galilei",
            },
            Correct: "Albert Einstein",
            Id: 17,
          },
          {
            Question: "What is the largest desert in the world?",
            Options: {
              first: "Sahara Desert",
              second: "Gobi Desert",
              third: "Antarctic Desert",
              fourth: "Arabian Desert",
            },
            Correct: "Antarctic Desert",
            Id: 18,
          },
          {
            Question: "Who painted the Sistine Chapel ceiling?",
            Options: {
              first: "Leonardo da Vinci",
              second: "Michelangelo",
              third: "Raphael",
              fourth: "Donatello",
            },
            Correct: "Michelangelo",
            Id: 19,
          },
          {
            Question: "What is the most widely spoken language in the world?",
            Options: {
              first: "Spanish",
              second: "English",
              third: "Mandarin",
              fourth: "Hindi",
            },
            Correct: "Mandarin",
            Id: 20,
          },
          {
            Question: "What is the currency of the United Kingdom?",
            Options: {
              first: "Euro",
              second: "Pound Sterling",
              third: "Dollar",
              fourth: "Yen",
            },
            Correct: "Pound Sterling",
            Id: 21,
          },
          {
            Question: "Which planet has the most moons?",
            Options: {
              first: "Jupiter",
              second: "Saturn",
              third: "Mars",
              fourth: "Neptune",
            },
            Correct: "Saturn",
            Id: 22,
          },
          {
            Question: "Which scientist is famous for his laws of motion?",
            Options: {
              first: "Isaac Newton",
              second: "Albert Einstein",
              third: "Stephen Hawking",
              fourth: "Galileo Galilei",
            },
            Correct: "Isaac Newton",
            Id: 23,
          },
          {
            Question: "What is the largest bone in the human body?",
            Options: {
              first: "Skull",
              second: "Femur",
              third: "Humerus",
              fourth: "Tibia",
            },
            Correct: "Femur",
            Id: 24,
          },
      ];

  const [currQues, setCurr] = useState(0);
  const [finished, setFinished] = useState(false);
  const [alert,setAlert]=useState({show:false,type:''})
  const [qn,setQn]=useState(Math.floor(Math.random() * 15));
  const [visited,setVisited]=useState([qn]);
  const [buttonState,setButtonState]=useState(false);

  
  const next = () => {
    if (currQues + 1 === 10) {
      setFinished(true);
    } 
    else 
    {   
        var n=Math.floor(Math.random() * questions.length);
        while (visited.includes(n)) {
            n=Math.floor(Math.random() * questions.length);
        }
        setVisited([...visited,n]);
        setQn(n);
      setCurr(currQues + 1);
      setButtonState(false);
    }
  };

  const handleReset=()=>{
    setVisited([]);
    setCurr(0);
    setFinished(false);
    setQn(Math.floor(Math.random() * 15));
    setButtonState(false);
    props.setScore(0);
  }

  const showAlert=(type)=>{
    setAlert({show:true,type:type});
    setTimeout(() => {
        setAlert({show:false,type:''});
    }, 700);
    
  }
  return (
    <>
      {finished ? (
        
        <div className="container text-center">
        <h3 className="my-5">Quiz Over! Your score: {props.score}/10</h3>
        <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-dark" onClick={handleReset}>
        Restart
        </button>
        </div>
        </div>
       
      ) : (
        <Quiz
          questions={questions[qn]}
          score={props.score}
          setScore={props.setScore}
          next={next}
          showAlert={showAlert}
          buttonState={buttonState}
          setButtonState={setButtonState}
          currQues={currQues}
          handleReset={handleReset}
        />
        
      )}
      {alert.show && <Alerts type={alert.type} />}
      
    </>
  );
}

export default MainDiv;
