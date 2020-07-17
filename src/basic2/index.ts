import hello, {add, birthday} from "./hello";

let menu: number = 2
let name, profile: string = ""
switch (menu) {
    case 0:
        name = "홍길동"
        let message: string = hello(name)
        console.log(message)
        break
    case 1:
        let num1: number = 5
        let num2: number = 10
        let addResult: string = add(num1, num2)
        console.log(addResult)
        break
    case 2:
        name = "김유신"
        let year: number = 2002
        profile = JSON.stringify(birthday(name, year))
        console.log(profile)
        break


}