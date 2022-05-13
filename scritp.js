const getAdvice = () => {
  const api = 'https://api.adviceslip.com/advice';

  return fetch(api)
    .then(response => response.json())
    .then(displayAdvice)

};

const displayAdvice = (data) => {

  const id = data.slip.id
  const advice = data.slip.advice

  document.getElementById('advice-id').innerHTML = "ADVICE #" + id
  document.getElementById('advice-text').innerHTML = '"' + advice + '"'
};


getAdvice()