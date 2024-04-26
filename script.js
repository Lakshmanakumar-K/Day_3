// programs in anonymous function & IIFE

// 1. Print odd numbers in an array
// Anonymous function
var odd = function(arr){
    var tmp = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i]!=0){
        if (arr[i]%2 != 0){
            tmp.push(arr[i]);
        }
        }
    }
    return tmp;
    //var str = tmp.join(' ');
    //return str;
}
console.log(odd([0,1,2,3,4,5,6]));
console.log(odd([-4,-3,-2,-1,0,1,2,3,4,5,6]));

// IIFE
(function(arr){
     var tmp = [];
     for (var i=0; i<arr.length; i++){
         if(arr[i]!=0){
         if (arr[i]%2 != 0){
             tmp.push(arr[i]);
             }
         }
     }
     //var str = tmp.join(' ');
     console.log(tmp);
     }) ([0,1,2,3,4,5,6]) ;

 // 2.Convert all the strings to title caps in a string array
 //Anonymous function
 var title_case = function(str_array){
    for (var i=0; i<str_array.length; i++){
    var sentence = str_array[i];
    var lw_case = sentence.toLowerCase();
    //console.log(lw_case);
    var arr = lw_case.split(' ');
    for (var j=0; j<arr.length; j++){
        arr[j]= arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
        //console.log(arr[i]);
    }
    var mod_sentence = arr.join(' ');
    str_array[i]=mod_sentence;
    }
    return str_array;
}
   console.log(title_case(["GUVI IS GREAT","guvi is doing great work"]));
   console.log(title_case(["JaVascriPt","TraiNing"]));

//IIFE
(function(str_array){
    for (var i=0; i<str_array.length; i++){
    var sentence = str_array[i];
    var lw_case = sentence.toLowerCase();
    //console.log(lw_case);
    var arr = lw_case.split(' ');
    for (var j=0; j<arr.length; j++){
        arr[j]= arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
        //console.log(arr[i]);
    }
    var mod_sentence = arr.join(' ');
    str_array[i]=mod_sentence;
    }
    console.log(str_array);
}) (["GUVI IS GREAT","guvi is doing great work"]);

// 3.Sum of all numbers in an array
//Anonymous
var sum = function(arr){
    var add =0;
    for (var i=0; i<arr.length; i++){
        add = add + arr[i];
    }
    return add;
}

console.log(sum([1,4,5,90]));
console.log(sum([-1,4,-5,90]));

//IIFE
(function(arr){
    var add =0;
    for (var i=0; i<arr.length; i++){
        add = add + arr[i];
    }
    console.log(add);
}) ([1,4,5,90]);

// 4. Return all the prime numbers in an array
//Anonymous
var prime = function(arr){
    var tmp =[];
    for (var i=0; i<arr.length; i++){
        var count =0;
        for (var j=2; j<arr[i]; j++){
            if(arr[i]%j == 0){
                count+=1;
            }
            }
            if(count == 0){
                tmp.push(arr[i]);
        }
    }
    return tmp;
}

console.log(prime([1,2,3,4,5,17,20,131]));
console.log(prime([4,6,8,10,15]));

//IIFE
(function(arr){
    var tmp =[];
    for (var i=0; i<arr.length; i++){
        var count =0;
        for (var j=2; j<arr[i]; j++){
            if(arr[i]%j == 0){
                count+=1;
            }
            }
            if(count == 0){
                tmp.push(arr[i]);
        }
    }
    console.log(tmp);
}) ([1,2,3,4,10,5,131,17]);

// 5.Return all the palindromes in an array
//Anonymous
var palindrome = function(arr){
    var tmp = [];
    for (var i=0; i<arr.length; i++){
        var rev = arr[i].toString().split('').reverse().join('');
        //console.log(arr[i] + "," + rev);
        if(arr[i] == rev){
            tmp.push(arr[i]);
        }
    }
    return tmp;
}
console.log(palindrome([123,456,22022022,"aba"]));
console.log(palindrome(["cfc",4554,2506,"bddb"]));

//IIFE
(function(arr){
    var tmp = [];
    for (var i=0; i<arr.length; i++){
        var rev = arr[i].toString().split('').reverse().join('');
        //console.log(arr[i] + "," + rev);
        if(arr[i] == rev){
            tmp.push(arr[i]);
        }
    }
    //return tmp;
    console.log(tmp);
}) ([123,897,"bddb","454",7557]);

// 6.Return median of two sorted arrays of the same size
//Anonymous
var median = function(arr1,arr2){
    arr1.sort();
    arr2.sort();
    var arr3 = [...arr1,...arr2];
    console.log(arr3);
    var median_number = (arr3[(arr3.length/2)] + arr3[(arr3.length/2)-1]) / 2 ;
    return median_number;
}

console.log(median([1,2,3],[4,5,6]));
console.log(median([21,25,50,35],[121,150,166,110]));

//IIFE
(function(arr1,arr2){
    arr1.sort();
    arr2.sort();
    var arr3 = [...arr1,...arr2];
    console.log(arr3);
    var median_number = (arr3[(arr3.length/2)] + arr3[(arr3.length/2)-1]) / 2 ;
    console.log(median_number);
}) ([21,25,50,35],[121,150,166,110]);

// 7.Remove duplicates from an array
//Anonymous
var duplicate = function(arr){
    arr.sort();
    console.log(arr);
    var tmp =[];
    for (var i=0; i<arr.length -1; i++){
        if (arr[i] != arr[i+1]){
            tmp.push(arr[i]);
        }
        }
        tmp.push(arr[arr.length -1]);
        return tmp;
}

console.log(duplicate([1,1,2,3,2,5,6,3,1,6]));
console.log(duplicate([45,46,45,60,20,30,46]));

//IIFE
(function(arr){
    arr.sort();
    console.log(arr);
    var tmp =[];
    for (var i=0; i<arr.length -1; i++){
        if (arr[i] != arr[i+1]){
            tmp.push(arr[i]);
        }
        }
        tmp.push(arr[arr.length -1]);
        console.log(tmp);
}) ([1,1,2,3,2,5,6,3,1,6]);

// 8.Rotate an array by k times
//Anonymous
var rotate = function(arr,num){
    for (var j=1; j<=num; j++){
        //console.log(arr);
        var tmp = arr[arr.length -1];
        var arr2 =[];
        for (var k=0; k<arr.length; k++){
            arr2[k] = arr[k];
        }
        //console.log(arr2);
        for (var i=0; i<arr.length -1; i++){
            arr[i+1] = arr2[i];
        }
        arr[0] = tmp;
    }
    return arr;
}

console.log(rotate([1,2,3,4],3));

//IIFE
(function(arr,num){
    for (var j=1; j<=num; j++){
        //console.log(arr);
        var tmp = arr[arr.length -1];
        var arr2 =[];
        for (var k=0; k<arr.length; k++){
            arr2[k] = arr[k];
        }
        //console.log(arr2);
        for (var i=0; i<arr.length -1; i++){
            arr[i+1] = arr2[i];
        }
        arr[0] = tmp;
    }
    console.log(arr);
}) (["abc","def","ghi","jkl"],2);

// programs in arrow functions
// 1. Print odd numbers in an array
var odd = (arr)=>{
    var tmp = [];
    for (var i=0; i<arr.length; i++){
        if(arr[i]!=0){
        if (arr[i]%2 != 0){
            tmp.push(arr[i]);
        }
        }
    }
    return tmp;
    //var str = tmp.join(' ');
    //return str;
}
console.log(odd([0,1,2,3,4,5,6]));
console.log(odd([-4,-3,-2,-1,0,1,2,3,4,5,6]));

// 2.Convert all the strings to title caps in a string array
var title_case = (str_array)=>{
    for (var i=0; i<str_array.length; i++){
    var sentence = str_array[i];
    var lw_case = sentence.toLowerCase();
    //console.log(lw_case);
    var arr = lw_case.split(' ');
    for (var j=0; j<arr.length; j++){
        arr[j]= arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
        //console.log(arr[i]);
    }
    var mod_sentence = arr.join(' ');
    str_array[i]=mod_sentence;
    }
    return str_array;
}
   console.log(title_case(["GUVI IS GREAT","guvi is doing great work"]));
   console.log(title_case(["JaVascriPt","TraiNing"]));

// 3.Sum of all numbers in an array
var sum = (arr)=>{
    var add =0;
    for (var i=0; i<arr.length; i++){
        add = add + arr[i];
    }
    return add;
} 
console.log(sum([1,4,5,90]));
console.log(sum([-1,4,-5,90]));

// 4. Return all the prime numbers in an array
var prime = (arr)=>{
    var tmp =[];
    for (var i=0; i<arr.length; i++){
        var count =0;
        for (var j=2; j<arr[i]; j++){
            if(arr[i]%j == 0){
                count+=1;
            }
            }
            if(count == 0){
                tmp.push(arr[i]);
        }
    }
    return tmp;
}

console.log(prime([1,2,3,4,5,17,20,131]));
console.log(prime([4,6,8,10,15]));