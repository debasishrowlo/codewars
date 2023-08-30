export class Pong {

  maxScore: number;
  currentPlayer: number;
  player1Score: number;
  player2Score: number;
  gameOver: boolean;
  
  constructor(_maxScore: number) {
    this.maxScore = _maxScore;
    this.currentPlayer = 1;
    this.player1Score = 0;
    this.player2Score = 0;
    this.gameOver = false;
  }
  
  play(ballPos: number, playerPos: number): string {
    if (this.gameOver) {
      return "Game Over!"
    }
    
    const playerHeight = 7
    
    const lowerLimit = playerPos - (playerHeight / 2)
    const upperLimit = playerPos + (playerHeight / 2)
    
    let message = ""

    if (ballPos >= lowerLimit && ballPos <= upperLimit) {
      message = `Player ${this.currentPlayer} has hit the ball!`
    } else {
      message = `Player ${this.currentPlayer} has missed the ball!`

      if (this.currentPlayer === 1) {
        this.player2Score++
      } else {
        this.player1Score++
      }

      if (this.player1Score === this.maxScore) {
        message = `Player 1 has won the game!`
        this.gameOver = true;
      } else if (this.player2Score === this.maxScore) {
        message = `Player 2 has won the game!`
        this.gameOver = true;
      }
    }
      
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1
      
    return message
  }
}
