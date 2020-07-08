export default function loop() {
    whileLoop() // 0 es5
    doWhileLoop() // 1 es5
    forLoop() // 2 es5
    forInArrayLoop() // 3
    forInObjectLoop() // 4
    forOfArrayLoop() //5
    forOfMapLoop() // 6
    forOfSetLoop()  // 7
    forOfStringLoop() // 8
    symbolIterator() // 9

}
function whileLoop() {
    console.log(`------ 0. while-loop ---------`)
    let count: number = 0
    let sum: number = 0
    while(count<100){
        count++
        sum  += count
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function doWhileLoop() {
    console.log(`------ 1. doWhileLoop ---------`)
    let count: number = 0
    let sum: number = 0
    do{count++
        sum += count
    }while(count != 100)
    console.log(`1부터 100까지 합: ${sum}`)

}
function forLoop(){
    console.log(`------ 2. doWhileLoop ---------`)
    let count: number = 0
    let sum: number = 0
    for(count=0; count<=100; count++){
        sum += count
    }
    console.log(`1부터 100까지의 합: ${sum}`)
}
function forInArrayLoop(){

}
function forInObjectLoop(){

}
function forOfArrayLoop() {

}
function forOfMapLoop() {

}
function forOfSetLoop() {

}
function forOfStringLoop() {

}
function symbolIterator() {

}