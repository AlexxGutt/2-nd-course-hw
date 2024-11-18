// Task - 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => a.age - b.age));

//  Task - 2
    function filter(array, ruleFunction) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
    };

    function isPositive(num) {
    return num > 0;
    };

    function isMale(person) {
    return person.gender === `male`;
    };
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const peopleTwo = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(peopleTwo, isMale));

// Task - 3

