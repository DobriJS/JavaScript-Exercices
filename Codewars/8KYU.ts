// Reversed Strings
 function solution(str: string): string {
    let newString = "";
      for (let i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }

// Double Char
export function doubleChar(str: string): string{
    return str
    .split('')
    .map(c => c.repeat(2))
    .join('');
  }