import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;
  exception: string;

  calculate() {
    switch(this.operator) {
      case '+':
        this.result = this.firstOperand + this.secondOperand;
        break;
      case '-':
        this.result = this.firstOperand - this.secondOperand;
        break;
      case '*':
        this.result = this.firstOperand * this.secondOperand;
        break;
      case '/':
        if(this.secondOperand === 0) {
          this.exception = "error";
          break;
        } else {
          this.result = this.firstOperand / this.secondOperand;
          break;
        }
    }
    return this.result;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
