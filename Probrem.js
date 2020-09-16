const repeatNumbers = function(data) {

    let ans = '';
    data.forEach(outside => {
        // console.log(outside[0])
        for(i=0; i< outside[1]; i++){

            ans += outside[0];
        }
        ans += ' '
    });

    return ans ;
};



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));

