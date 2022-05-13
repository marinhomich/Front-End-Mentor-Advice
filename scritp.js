const getAdvice = () => {
  const api = 'https://api.adviceslip.com/advice';

  return fetch(api)
    .then(response => response.json())
    .then(displayAdvice)

};

const displayAdvice = (data) => {
  const advice = data.slip.advice
  const id = data.slip.id

  document.getElementById('advice-text').innerHTML = advice
  document.getElementById('advice-texta').innerHTML = id
};

getAdvice()