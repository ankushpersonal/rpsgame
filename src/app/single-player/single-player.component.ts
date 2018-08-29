import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.css']
})
export class SinglePlayerComponent implements OnInit {

  constructor() { }

  playerRock:boolean = false;
  playerPaper:boolean = false;
  playerScissor:boolean = false;
  comRock:boolean = false;
  comPaper:boolean = false;
  comScissor:boolean = false;
  a:any;
  draw:boolean = false;
  playerWin:boolean = false;
  playerLoose:boolean = false;
  playerScoreCount:any = 0;
  computerScoreCount:any = 0;
  computerWins:boolean = false;
  playerWins:boolean = false;
  comWinsMessage:boolean = false;
  playerWinsMessage:boolean = false;
  gameIsOn:boolean = true;
  gameOver:boolean = false;

  showRock(){
    this.playerRock = true;
    this.playerPaper = false;
    this.playerScissor = false;
    this.generateRandomNumber();
  }

  showPaper(){
    this.playerRock = false;
    this.playerPaper = true;
    this.playerScissor = false;
    this.generateRandomNumber();
  }

  showScissor(){
    this.playerRock = false;
    this.playerPaper = false;
    this.playerScissor = true;
    this.generateRandomNumber();
  }

  resultOfCom(){
    if(this.a >= 1 &&  this.a  <= 30 ){
      this.comRock = true;
      this.comPaper = false;
      this.comScissor = false;
      console.log('rock');
    }
    else if(this.a >=31 && this.a <= 60) {
      this.comRock = false;
      this.comPaper = true;
      this.comScissor = false;
      console.log('paper');
    }
    else if(this.a >=61 && this.a <= 99){
      this.comRock = false;
      this.comPaper = false;
      this.comScissor = true;
      console.log('scisscors');
    }
  }

  generateRandomNumber(){
    this.a = Math.floor(Math.random() * 99) + 1 ;
    console.log(this.a , 'value of a');
    this.resultOfCom();
    this.totalResultAfterTurn();
    this.matchResult();
  }

  totalResultAfterTurn(){
    if(this.playerRock == true){
      if(this.comRock == true){
        this.draw = true;
      }
      else if(this.comPaper == true){
        this.playerLoose = true;
        this.computerScoreCount = this.computerScoreCount + 1;
      }
      else if(this.comScissor == true){
        this.playerWin = true;
        this.playerScoreCount = this.playerScoreCount + 1;
      }
    }
    else if(this.playerPaper == true){
      if(this.comPaper == true){
        this.draw = true;
      }
      else if(this.comRock == true){
        this.playerWin = true;
        this.playerScoreCount = this.playerScoreCount + 1;
      }
      else if(this.comScissor == true){
        this.playerLoose = true;
        this.computerScoreCount = this.computerScoreCount + 1;
      }
    }
    else if(this.playerScissor == true){
      if(this.comScissor == true){
        this.draw = true;
      }
      else if(this.comPaper == true){
        this.playerWin = true;
        this.playerScoreCount = this.playerScoreCount + 1;
      }
      else if(this.comRock == true){
        this.playerLoose = true;
        this.computerScoreCount = this.computerScoreCount + 1;

      }
    }
  }

  matchResult(){
    if(this.computerScoreCount == 10){
      this.gameOver = true;
      this.gameIsOn = false;
      this.computerWins = true;

    }
    else if(this.playerScoreCount == 10){
      this.gameOver = true;
      this.gameIsOn = false;
      this.playerWins = true;
    }
  }

  ngOnInit() {
  }

}



