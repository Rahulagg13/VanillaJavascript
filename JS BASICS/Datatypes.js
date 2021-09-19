// VARIABLE DECLARATION
/*

1. let
2. var
3. const

*/
// when we declare any variable with let then we can reassign the variable and change it or modify anywhere in that code.
//but not same for var
//const cannot be changed or reassigned

/*******************************************************/

// DATATYPES IN JAVASCRIPT

// 1. PRIMITIVE DATATYPE
/*
1.NUMBER
        ANY NUMBER --- 1,23,2321,1233211,1232.22,13131.233131
        ANY MATHEMATICAL OPERATION CAN BE DONE
        -----  +,-,*,/,%....


2.STRING
    EXAMPLES --- "PULKIT GUPTA",'CLASS',`OBJECTS`,"JAVASCRIPT'S",`FUN'CHILL"ENJOY`


3.BOOLEAN
        ----- TRUE,FALSE

4.UNDEFINED
        ---- let MyName;
            value of MyName is undefined


5.NULL
        ----let User=null;

6.SYMBOLS
        ---- let newSymbols=Symbol()
        ----  Symbol()===Symbol()    //false
        //exceptionally use

7.BIGINT
        ---- let BigInitNum=123456789012345678901234567890n;
        n in the end shows that it is a bigint number
        we can also define bigint num by
        let BigIntNum2=BigInt('12345678901234567890n)
        //exceptionally use

*/
// 2.REFERENCE DATATYPE
/*
1.ARRAYS
    ---- example :- const Names=["pulkit","rohan","mohan"];
                console.log(Names[0]);//'pulkit'
                console.log(Names[2]);//'mohan'

2.FUNCTIONS
    ---- example :- function add(num1,num2){
        return num1+num2;
    }
    add(2,2)//4
    ES7
    const add =(num1,num2)=>num1+num2;
    add(2,2)//4


3.OBJECTS
    ----example :- const Names={
        person1:"pulkit",
        person2:"rohan",
        person3:"mohan"
    }
    //this is the key value pairs
    person1,person2,person3 -> keys
    "pulkit,"rohan","mohan" -> values
    console.log(Names.person1);//'pulkit'
    console.log(Names.person3);//'mohan;

*/

/******************** NaN = Not a Number *********************/
