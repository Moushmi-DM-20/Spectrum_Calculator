let result = localStorage.getItem('result')||'0';
    let value = '';
    const onButton = document.querySelector('.on-button');
    const outputPlace = document.querySelector('.output')

    function onoffbutton(){
      
      if (onButton.innerText === 'ON'){
        onButton.innerText = 'OFF';
      }
      else{
        onButton.innerText = 'ON'
      }  

      saveState();
      }

      function saveState(){
      localStorage.setItem('result',result);
      localStorage.setItem('onButton',onButton.innerText);
      }

    function loadState(){
      result = localStorage.getItem('result')||'';
      const savedButtonState = localStorage.getItem('onButton')||'ON';
      onButton.innerText = savedButtonState;
      outputPlace.innerHTML = result;
    }

    function calculation(value){

      if (onButton.innerText === 'OFF'){
        result += value;
        console.log(result); 
          
        outputPlace.innerHTML = `${result}`
        
        saveState();
      }
      else{
        result = '';

        outputPlace.innerHTML = ``;
      }   
    }
    
    window.onload = function(){
      loadState();
    }
