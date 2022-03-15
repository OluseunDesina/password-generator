import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  includeStrings: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  alphabets: string = 'abcdefghijklmnopqrstuvwxyz';
  numbers: string = '0123456789';
  symbols: string = '~!@#$%^&*()_+=-`/.,<>';
  generatedPw = '';

  onSetLength(event: any) {
    const value = event.target.value;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      return;
    }
    alert('Please enter a valid integer');
  }

  onChangeIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeIncludeStrings() {
    this.includeStrings = !this.includeStrings;
  }

  onChangeIncludeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onGenerate() {
    let validValues = '';
    let generatedPassword: string = '';

    if (this.includeStrings) {
      validValues += this.alphabets;
    }

    if (this.includeNumbers) {
      validValues += this.numbers;
    }

    if (this.includeSymbols) {
      validValues += this.symbols;
    }

    for (let index = 0; index < this.length; index++) {
      let newIndex = Math.floor(Math.random() * validValues.length);
      generatedPassword += validValues[newIndex];
    }

    this.generatedPw = generatedPassword;
  }
}
