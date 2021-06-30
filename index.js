


//All const and variables

//Turnos
let userTurno = false
let computerTurno = false

//Total turnos
let totalTurnos = 0

//Puntajes
let userPoints = 0
let computerPoints = 0

//Opcion seleccionada
let userOptionSelected = ''
let computerOptionSelected = ''

let startGame = false

const turno = document.getElementById('turno')


const setTurno = () => {
  turno.innerHTML = `Turnos: ${totalTurnos}`
}

setTurno()


//Establecer los puntos iniciales de los jugadores
const pointUserText = document.getElementById('points-user')
pointUserText.innerHTML = userPoints
    
const pointComputerText = document.getElementById('points-computer')
pointComputerText.innerHTML = computerPoints


//Actualizacion de puntajes en cada jugada
const setAllPoints = () => {
  const pointUserText = document.getElementById('points-user')
  pointUserText.innerHTML = userPoints
    
  const pointComputerText = document.getElementById('points-computer')
  pointComputerText.innerHTML = computerPoints
}



//User elements
const piedraUser = document.getElementById('piedra-usuario');
const papelUser = document.getElementById('papel-usuario');
const tijeraUser = document.getElementById('tijera-usuario');

piedraUser.addEventListener('click', () => {
  if (userTurno) {
    piedraUser.classList.add('selected')
    userOptionSelected = 'PIEDRA'
    computerTurno = true
    game()
  }
})

papelUser.addEventListener('click', () => {
  if (userTurno) {
    papelUser.classList.add('selected')
    userOptionSelected = 'PAPEL'
    computerTurno = true
    game()
  }
})

tijeraUser.addEventListener('click', () => {
  if (userTurno) {
    tijeraUser.classList.add('selected')
    userOptionSelected = 'TIJERA'
    computerTurno = true
    game()
  }
})

//Computer events
const piedraComputer = document.getElementById('piedra-computer');
const papelComputer = document.getElementById('papel-computer');
const tijeraComputer = document.getElementById('tijera-computer');


//Check winner

const checkWinner = () => {
  if ( userPoints > computerPoints){
    alert('El usuario ha ganado, puedes iniciar una nueva partida')
    initGame()
    init.style.display = 'block'
    userPoints = 0
    computerPoints = 0
    setAllPoints()
    userTurno = false
  } else if ( userPoints === computerPoints){
    alert('Se ha declarado empate, puedes iniciar una nueva partida')
    initGame()
    init.style.display = 'block'
    userPoints = 0
    computerPoints = 0
    setAllPoints()
    userTurno = false
  } else {
    alert('La computadora ha ganado, puedes iniciar una nueva partida')
    initGame()
    init.style.display = 'block'
    userPoints = 0
    computerPoints = 0
    setAllPoints()
    userTurno = false
  }
}



const generateOption = () => {
  //Generar una opcion random
  const value = Math.floor(Math.random() * 3)
  
  if (value === 0){
    return 'PIEDRA'
  } else if (value === 1){
    return 'PAPEL'
  } else {
    return 'TIJERA'
  }
}



const cleanBoard = () => {
  setTimeout(() => {
    removeAllClases()
    if (startGame){
      userTurno = true
    }
  }, 3000)
}



const game = () => {
  let valueComputer = generateOption()
  
  if (valueComputer === 'PIEDRA'){
    piedraComputer.classList.add('selected')
    computerOptionSelected = 'PIEDRA'
    checkRound()
    totalTurnos = totalTurnos + 1
    console.log(totalTurnos)
    cleanBoard()
    setTurno()
    userTurno = false
    

    if ( totalTurnos === 10){
      userTurno = false
      checkWinner()
    }
  } else if (valueComputer === 'PAPEL'){
    papelComputer.classList.add('selected')
    computerOptionSelected = 'PAPEL'
    checkRound()
    totalTurnos = totalTurnos + 1
    console.log(totalTurnos)
    cleanBoard()
    userTurno = false
    setTurno()
    
    if ( totalTurnos === 10){
      userTurno = false
      checkWinner()
    }
  } else {
    tijeraComputer.classList.add('selected')
    computerOptionSelected = 'TIJERA'
    checkRound()
    totalTurnos = totalTurnos + 1
    console.log(totalTurnos)
    cleanBoard()
    setTurno()

    if ( totalTurnos === 10){
      userTurno = false
      checkWinner()
    }
  }
}



const checkRound = () => {
  console.log(userOptionSelected, computerOptionSelected)
  if (userOptionSelected === 'PIEDRA'){
    
    if (computerOptionSelected === 'PIEDRA') {
      userPoints = userPoints
      computerPoints = computerPoints
      setAllPoints()      
    } else if (computerOptionSelected === 'PAPEL'){
      userPoints = userPoints
      computerPoints = computerPoints + 1
      setAllPoints()
    } else if (computerOptionSelected === 'TIJERA'){
      userPoints = userPoints + 1
      computerPoints = computerPoints
      setAllPoints()
    }

  } else if (userOptionSelected === 'PAPEL'){

    if (computerOptionSelected === 'PIEDRA') {
      userPoints = userPoints + 1
      computerPoints = computerPoints
      setAllPoints()      
    } else if (computerOptionSelected === 'PAPEL'){
      userPoints = userPoints
      computerPoints = computerPoints
      setAllPoints()
    } else if (computerOptionSelected === 'TIJERA'){
      userPoints = userPoints
      computerPoints = computerPoints + 1
      setAllPoints()
    }

  } else if (userOptionSelected === 'TIJERA'){

    if (computerOptionSelected === 'PIEDRA') {
      userPoints = userPoints
      computerPoints = computerPoints + 1
      setAllPoints()      
    } else if (computerOptionSelected === 'PAPEL'){
      userPoints = userPoints + 1
      computerPoints = computerPoints
      setAllPoints()
    } else if (computerOptionSelected === 'TIJERA'){
      userPoints = userPoints
      computerPoints = computerPoints
      setAllPoints()
    }

  }
}


//remove styles
const removeAllClases = () => {
  piedraUser.classList.remove('selected')
  papelUser.classList.remove('selected')
  tijeraUser.classList.remove('selected')
  papelComputer.classList.remove('selected')
  piedraComputer.classList.remove('selected')
  tijeraComputer.classList.remove('selected')
}


//Buttons click events
let init = document.getElementById('init')
init.addEventListener('click', () => {
  initGame()
})

let restart = document.getElementById('restart')
restart.addEventListener('click', () => {
  restartGame()
})

//Iniciar una nueva partida
const initGame = () => {
  console.log('Que inicie el juego')
  init.style.display = 'none'
  startGame = true
  userTurno = true
  totalTurnos = 0
  setTurno()
  setAllPoints()
  restart.style.display = 'block'
}
  
//Reiniciar una partida
const restartGame = () => {
  console.log('juego reiniciado')
  init.style.display = 'block'
  removeAllClases()
  userPoints = 0
  computerPoints = 0
  setAllPoints()
  totalTurnos = 0
  userTurno = false
  console.log(totalTurnos)
  setTurno()
  cleanBoard()
  setAllPoints()
  restart.style.display = 'none'
}


