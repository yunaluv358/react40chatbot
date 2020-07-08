import hello,{add} from "./hello";
let menu:number = 1

switch (menu) {
    case 0:
        let name: string ="홍길동"
        let message: string = hello(name)
        console.log(message)
        break
    case 1:
        let num1: number=5
        let num2: number=10
        let addResult: string=add(num1, num2)
        console.log(addResult)
        break


}