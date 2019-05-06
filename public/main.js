let teamOneScore = 0
let teamTwoScore = 0
let teamNameOne = 'Team 1'

const main = () => {
  document.querySelector('.team1Score').textContent = teamOneScore
  document.querySelector('.team2Score').textContent = teamTwoScore
  document.querySelector('.team1Name').textContent = teamNameOne
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

const teamOneUpdateName = () => {
  teamNameOne = document.querySelector('.team-1-name').value
  document.querySelector('.team1Name').textContent = teamNameOne
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
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneUpdateName)
