// Basic while loop

let counter = 3;

while (counter > 0) {
    console.log(counter);
    counter = counter - 1; // counter -= 1;
}

//-----------------------------------------------------------------


// using of Continue

let count = 0;

while (count < 10) {
    count += 1;
    if (count % 2 == 0){
        continue;   // it will skip all even number and print odd numbers
    }
    console.log(count);
}

