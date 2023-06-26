import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

import { Colors, Result } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ])
    ]),
    trigger('openAnimationComputer', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 0 })),
        animate(1000, style({ opacity: 1 })),
      ])
    ]),
    trigger('resultAnimation', [
      transition(':enter', [
        style({ transform: 'scale(1)' }),
        animate(1000, style({ transform: 'scale(1.1)' })),
        animate(1000, style({ transform: 'scale(1)' }))
      ])])
  ]
})

export class AppComponent {

  title = 'rock-paper-scissors';
  public score: number = 0;
  public paper: string = 'paper'
  public scissor: string = 'scissor'
  public rock: string = 'rock'
  public isUserSelect: string = ''
  public isApponentSelect: string = ''
  public computerSelect: string = ''
  public userDecided: boolean = false;
  public result: string = '';
  public isRulesModelOpen: boolean = false;
  public showResult: boolean = false;


  public resultObject: any = {
    paper: {
      paper: 'IT\'\S A TIE',
      rock: 'YOU WON',
      scissor: 'YOU LOSE',
    },
    rock: {
      paper: 'YOU LOSE',
      rock: 'IT\'\S A TIE',
      scissor: 'YOU WON',
    },
    scissor: {
      paper: 'YOU WON',
      rock: 'YOU LOSE',
      scissor: 'IT\'\S A TIE',
    }
  }
  constructor() {
    console.log(Colors.RED)
    console.log(Result)
  }

  /**
   * @description user select decision
   * @param name name which user is seleted
   */
  public userSelect(name: string) {
    if (name && !this.userDecided) {
      this.isUserSelect = name
      this.computerSelect = this.randomIntFromInterval()
      this.userDecided = true;
      this.result = this.resultObject[this.isUserSelect][this.computerSelect];
      setTimeout(() => {
        if (this.result === 'YOU WON') {
          this.score++;
        }
        else if (this.result === 'YOU LOSE') {
          if (this.score > 0) {
            this.score--;
          }
        }
        this.showResult = true;
      }, 2000)
    }
  }

  /**
   * @description This will return random number between 0 to 2
   */
  public randomIntFromInterval() {
    const selectedNumber = Math.floor(Math.random() * 3)
    if (selectedNumber === 0) {
      return 'paper'
    }
    else if (selectedNumber === 1) {
      return 'scissor'
    }
    else {
      return 'rock'
    }
  }

  /**
   *@description reseting game 
   */
  public resetGame() {
    this.isUserSelect = '';
    this.userDecided = false;
    this.showResult = false;
  }


  /**
   * @description close rules model
   */
  public openCloseModel() {
    this.isRulesModelOpen = !this.isRulesModelOpen;
  }


}
