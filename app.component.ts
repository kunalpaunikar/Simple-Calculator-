import { Component } from '@angular/core';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpperCasePipe } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Ensure this is also standalone
  imports: [UserProfileComponent,UpperCasePipe,CalculatorComponent]  // Correctly import the standalone component
})
export class AppComponent {
  title = 'AngularProject';
//   currentNumber = '';
//   previousNumber = '';
//   operator = '';
//   result = '';

//   clear() {
//     this.currentNumber = '';
//     this.previousNumber = '';
//     this.operator = '';
//     this.result = '';
//   }

//   backspace() {
//     this.currentNumber = this.currentNumber.slice(0, -1);
//   }

//   appendNumber(number: number | string) {
//     if (number === '.') {
//       if (!this.currentNumber.includes('.')) {
//         this.currentNumber += '.';
//       }
//     } else {
//       this.currentNumber += number.toString();
//     }
//   }

//   calculate(operator: string) {
//     if (operator === '=') {
//       this.calculateResult();
//     } else if (operator === 'sqrt') {
//       this.currentNumber = Math.sqrt(parseFloat(this.currentNumber)).toString();
//     } else if (operator === '^2') {
//       this.currentNumber = (parseFloat(this.currentNumber) ** 2).toString();
//     } else {
//       this.previousNumber = this.currentNumber;
//       this.currentNumber = '';
//       this.operator = operator;
//     }
//   }

//   calculateResult() {
//     let result = 0;
//     switch (this.operator) {
//       case '+':
//         result = parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
//         break;
//       case '-':
//         result = parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
//         break;
//       case '*':
//         result = parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
//         break;
//       case '/':
//         result = parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
//         break;
//       default:
//         break;
//     }
//     this.currentNumber = result.toString();
//     this.previousNumber = '';
//     this.operator = '';
//  }
// user = [
//        { name: "kunal", isSalaried: false, age: 26 },
//        { name: "krunal", isSalaried: false, age: 27 },
//        { name: "pritish", isSalaried: false, age: 28 },
//        { name: "tushar", isSalaried: false, age: 29 }
//     ]

//      receivedData(e: { product : any }) {
//      const product = e.product;
//      console.log(product);
//     // Handle the product data
//   } 
}