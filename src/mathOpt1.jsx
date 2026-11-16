import './App.css'

const ArrayOperation = () =>{
    const numbers = [1,2,3,4,5]
    let sum = 0
    let maximum = numbers[0]
    let minimum = Infinity
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        if(numbers[i] > maximum){
            maximum = numbers[i]
        }
        if(numbers[i] < minimum){
            minimum = numbers[i]
        }
    }
    
    return(
        <div>
            <h1>Array Operation</h1>
            <p>{`The sum of all the numbers: ${sum}`}</p>
            <p>{`The sum of all numbers average: ${sum/numbers.length}`}</p>
            <p>Maximum: {maximum}</p>
            <p>Minimum: {minimum}</p>
        </div>
    )
}
const ObjectManipulation = () =>{
    const person = {
        name: "Sarah",
        age: 28,
        city: "New york",
    }
    person.age = 29
    return(
        <div>
            <h1>Person Details</h1>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>City: {person.city}</p>
        </div>
    )
}
const SquareArea = () =>{
    const sqaure = 5
    return(
        <div>
            <h2>Area of square</h2>
            <p>{`The Area of Square is: ${sqaure * sqaure}`}</p>
        </div>
    )
}
const CapitalizeString = () =>{
    const string = "hello world"
    return(
        <div>
            <h2>Capitalize Text</h2>
            <p>{string.toLocaleUpperCase()}</p>
        </div>
    )
}
const CircleArea = () =>{
    const circle = 8
    const areaOfCircle = circle * circle * 3.14
    return(
        <div>
            <h2>Area of circle</h2>
            <p>{`The Area of circle is: ${areaOfCircle}`}</p>
        </div>
    )
}
export default function CalculateMath(){
    return(
        <main>
            <ArrayOperation />
            <ObjectManipulation />
            <SquareArea />
            <CapitalizeString />
            <CircleArea />
        </main>
    )
}