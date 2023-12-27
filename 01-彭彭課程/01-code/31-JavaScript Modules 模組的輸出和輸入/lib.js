// // 預設的輸出
// let x = "Hello";

// // export default x;


// // 非預設的輸出
// let data =[5,6,7];
// let obj={x:10,y:2};

// // export{data,obj};

// // 整合的輸出
// export {x as default,data,obj};




// 練習
let add = function(n1,n2){
    console.log(n1+n2);
}
let multiply=function(n1,n2){
    console.log(n1*n2);
}

let math={
    add:add,multiply:multiply
}

export default math;
export {add,multiply};
