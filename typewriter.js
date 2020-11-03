const sentence = "hello there from lighthouse labs";

let counter = 1;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), 50 * counter) 
  counter++;
}

// print new line after last char is printed
setTimeout(() => process.stdout.write('\n'), counter * 50);