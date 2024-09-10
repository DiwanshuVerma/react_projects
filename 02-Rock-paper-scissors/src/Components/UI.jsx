import { useState, memo } from "react"

// Memoized component to show user and computer choices
const ShowInputs = memo(({ userInput, computerInput }) => {
  return (
    <div className="flex gap-6">
      <p className="text-2xl text-green-400 font-semibold">You: <span className="text-5xl">{userInput}</span></p>
      <p className="text-2xl text-red-600 font-semibold">Computer: <span className="text-5xl">{computerInput}</span></p>
    </div>
  )
})

// Memoized component to show the result
const ShowResult = memo(({ result }) => {
  return (
    <div className="flex gap-6">
      {result}
    </div>
  )
})

export default function UI() {
  const [result, setResult] = useState('')
  const [userInput, setUserInput] = useState('')  // state for user input
  const [computerInput, setComputerInput] = useState('')  // state for computer input
  const [isChecked, setIsChecked] = useState(false)

  const he = () => {
    
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    setIsChecked(true)

    switch (randomNumber) {
      case 1: return 'rock';
      case 2: return 'paper';
      case 3: return 'scissor';
    }
    
  }

  const emoji = (input) => {
    if (input === 'rock') {
      return '✊'
    } else if (input === 'paper') {
      return '✋'
    } else {
      return '✌'
    }
  }

  const showInputs = (user, computer) => {
    setUserInput(emoji(user))      // Update the user's choice with emoji
    setComputerInput(emoji(computer))  // Update the computer's choice with emoji
  }

  function userScore(input) {
    const computerChoice = he()

    if (
      (input === 'rock' && computerChoice === 'paper') ||
      (input === 'paper' && computerChoice === 'scissor') ||
      (input === 'scissor' && computerChoice === 'rock')
    ) {
      showInputs(input, computerChoice)
      setResult('Computer won')
    } else if (
      (input === 'rock' && computerChoice === 'scissor') ||
      (input === 'paper' && computerChoice === 'rock') ||
      (input === 'scissor' && computerChoice === 'paper')
    ) {
      showInputs(input, computerChoice)
      setResult('You won')
    } else {
      showInputs(input, computerChoice)
      setResult('It\'s a tie')
    }
  }

  return (
    <div className="font-mono flex flex-col justify-center items-center gap-10 text-3xl text-white">
      <h1 className='shad'>Rock-Paper-Scissors</h1>
      <div className="flex gap-10 flex-wrap justify-center">
        <button className="bg-gray-700 p-7 border-4 text-white rounded-full text-6xl"
                onClick={() => userScore('rock')}>✊</button>
                
        <button className="bg-gray-700 p-7 border-4 rounded-full text-6xl"
                onClick={() => userScore('paper')}>✋</button>

        <button className="bg-gray-700 p-7 border-4 rounded-full text-6xl"
                onClick={() => userScore('scissor')}>✌</button>
      </div>

      {/* Render the ShowInputs and ShowResult components */}

      {isChecked && (
        <>
         <ShowInputs userInput={userInput} computerInput={computerInput} />
         <ShowResult result={result} />
        </>
      )}
      
    </div>
  )
}
