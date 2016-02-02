var fortune = require("./library/fortune.js");


process.argv.forEach((val, index, array) => {
    if (index ===2 ) {
        Number(val) 
        for (var i = 0; i < val; i++) {
            fortune();
        }
    }
    
//   console.log(`${index}: ${val}`);
});

