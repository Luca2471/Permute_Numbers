/**
* The following is the function where the solution shall be written
*/

function solution(input) {
  this.input = input;
  this.errorMessage = 'Error, no numbers were given';

  // checks to see if input is null
  if (this.input == null) {
    return this.errorMessage;
  } else {
    this.stringifiedInput = this.input.toString();
    this.alphanumericCharactersSeparated = [];
    this.filteredInputs = [];

    // separetas every character and pushes them to the alphanumericCharactersSeparated array
    for (let i = 0; i < this.stringifiedInput.length; i++) {
      this.alphanumericCharactersSeparated.push(this.stringifiedInput[i]);
    }

    // filters for numbers
    this.filteredInputs = this.alphanumericCharactersSeparated.filter(Number);

    // checks to see if the array filteredInputs has content, if empty it returns a error message
    if (filteredInputs.length !== 0) {
      let possibleCombinations = [];
      let arrayWithTheNumbersAndJoined = [];

      // permutes the numbers that were given
      const permute = (filteredInputs, m = []) => {
        if (filteredInputs.length === 0) {
          possibleCombinations.push(m);
        } else {
          for (let i = 0; i < filteredInputs.length; i++) {
            const curr = filteredInputs.slice();
            const next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next));
          }
        }
      }
      permute(this.filteredInputs);

      // joins the numbers into their groups 
      for (let i = 0; i < possibleCombinations.length; i++) {
        arrayWithTheNumbersAndJoined.push(possibleCombinations[i].join(''));
      }

      // order the numbers in descending order
      this.permuteSortedInDescendingOrder = arrayWithTheNumbersAndJoined.sort(function (a, b) {
        return (b - a);
      });
      return this.permuteSortedInDescendingOrder.join(',');
    } else {
      return this.errorMessage;
    }
  }
}

module.exports = solution;

// some example inputs
console.log(solution()); // expected ouput 632,623,362,326,263,236
console.log(solution('ABC')); // expected ouput 632,623,362,326,263,236
console.log(solution(326)); // expected ouput 632,623,362,326,263,236
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D 4')); // expected ouput 632,623,362,326,263,236