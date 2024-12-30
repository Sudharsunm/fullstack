arrow=async()=>{
    return "Hello1"
}
console.log(arrow())

async function fun() {
    return "Async1 "
}
console.log(fun())

//using timeout
arrow2=async()=>{
    setTimeout(()=>{
        console.log("Hello2")
    },2000)
    //return "Hello2"
}
console.log(arrow2())

async function fun2() {
    return "Async2"
}
console.log(fun2())

//using timeout,await
arrow3=async()=>{
    return "Hello3"
}

async function fun3() {
    setTimeout(()=>{
        console.log("KEc")
    })
}
