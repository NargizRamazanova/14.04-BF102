// let data = [
//     { name: 'daniel', age: 45 },
//     { name: 'john', age: 34 },
//     { name: 'robert', age: null },
//     { name: 'jen', age: undefined },
//     { name: null, age: undefined }];

// const filterData= data.filter( item=>item.age!=null && item.age!=undefined && item.name != null)
// console.log(filterData);

// const students = [ 
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
//   ];

// let newArr = students.map((value)=> {
//     return{
//         name:value.name,
//         points:value.points+30
//     }
// })
// console.log(newArr)



// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

// bdays.forEach((elem, index ) => {
//     bdays[index]=elem.replace('-', '/')
// })
// console.log(bdays);


// let numbers = [1.5, 2.56, 5.1, 12.33];
// numbers.forEach((element,index)=>{
//     numbers[index]=Math.round(element)
// })
// console.log(numbers);



// const b = "5,4,3,2,1";
// const result= b.split(",").reduce((n1,n2)=> Number(n1)+Number(n2),0);
// console.log(result);



// CustomFilter function-u yazin yazin


// function CustomFilter (arr, condition){
//     let result=[];
//     console.log(condition)
//     condition
//     condition()
//     for(let i = 0; i< arr.length; i++ ){
//         if(condition(arr[i]) == true){
//             result.push(arr[i])
//             // result[result.length] = arr[i];
//         }
//     }
//     return result;
// }

// const numArr = [3, 1, 5]

// var filteredArr = CustomFilter(numArr, (num)=> {
//     console.log("ishledim")
//     return num%2==0
// })

// console.log(filteredArr)



// CustomReplace function yazin

function CustomReplace (word, letterToReplace, letterToReplaceWith){
    let result = ""
    for(let i = 0; i<word.length; i++){
        if(word[i] == letterToReplace){
            result+=letterToReplaceWith
        }else{
            result+=word[i]
        }
    }
    return result;
}

console.log(CustomReplace("BF-102", "2", "0 "))