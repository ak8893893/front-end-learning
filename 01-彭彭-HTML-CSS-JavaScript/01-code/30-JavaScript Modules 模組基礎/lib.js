function echo(msg){
    console.log(msg);
}

function add(n1,n2){
    console.log(n1+n2);
}

let name = "我又大又肥"; // 彼此獨立所以變數名稱不會和 main.js 有衝突

let x = 123456

// export default 函式
// export default echo;

// export defult 資料
// export default x;

export default{
    echo:echo,
    add:add,
}