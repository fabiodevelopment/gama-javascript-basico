var colors = ["black", "white", "yellow", "green", "blue" ];

// FOR
console.log('### FOR ###');

for( var i = 0; i < colors.length; i++ ) {
    console.log(colors[i]);
}

for( var i = 1; i <= 10 ; i++ ) {
    console.log(i);
}

// WHILE
console.log('### WHILE ###');

i = 1;

while ( i <= 10 ) {
    console.log(i);
    i++;
}

// DO
console.log('### DO ###');

i = 1
do {
    console.log(i);
    i++;
} while(i <=10);