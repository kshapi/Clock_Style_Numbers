const sec = document.querySelector('.orignal');
const digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
];


const time = () => {
  let elements_In_Seconds = document.querySelectorAll('.seconds');
  
  setInterval(() => {
    //Get Secends
    const date = new Date();
    const seconds = date.getSeconds(); 
    
    setNumber({
      digit: elements_In_Seconds[0],
      number: Math.floor(seconds / 10),
      on: 1
    });
    setNumber({
      digit: elements_In_Seconds[1],
      number: seconds % 10,
      on: 1
    });
    
    
    sec.innerText = `${seconds<10? '0'+seconds:seconds}`;
    
  }, 1000);
};


const setNumber = (args) => {
  const {digit, number, on} = args;
  
  let segments = digit.querySelectorAll('.segment');
  let current = parseInt(digit.getAttribute('data-value'));
  
  if (!isNaN(current) && current != number ) {
    //Unset previous number
    digitSegments[current].forEach((digitSegment, i) => {
      setTimeout(() => {
        segments[digitSegment - 1].classList.remove('on');
      }, i * 45);
    });
  };
  
  if (isNaN(current) || current != number) {
    //Set new number
    setTimeout(() => {
      digitSegments[number].forEach((digitSegment, i) => {
        setTimeout(() => {
          segments[digitSegment - 1].classList.add('on');
        }, i * 45);
      });
    }, 250);
    digit.setAttribute('data-value', number);
  };
  
};

//When Content Will Fully Loaded
document.addEventListener('DOMContentLoaded',time);