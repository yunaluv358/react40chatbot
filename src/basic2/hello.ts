export default function hello(name:string):string {
    return `헬로 ${name}`

}
export function add(num1: number, num2: number):string {
    return `합: ${num1 + num2}`

}
export function birthday(name: string, year: number) {
    const profile = {
        name2: name, age: new Date().getFullYear() - year
    }
    return profile

}