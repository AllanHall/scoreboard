let teamOneScore = 0
let teamTwoScore = 0

const main = () => {
  document.querySelector('.team1Score').textContent = teamOneScore
  document.querySelector('.team2Score').textContent = teamTwoScore
}

const teamOneAddOne = () => {
  teamOneScore += 1
  document.querySelector('.team1Score').textContent = teamOneScore
}

const teamOneSubtractOne = () => {
  teamOneScore -= 1
  document.querySelector('.team1Score').textContent = teamOneScore
}

const teamTwoAddOne = () => {
  teamTwoScore += 1
  document.querySelector('.team2Score').textContent = teamTwoScore
}

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1
  document.querySelector('.team2Score').textContent = teamTwoScore
}

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamOneAddOne)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamOneSubtractOne)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoAddOne)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoSubtractOne)
