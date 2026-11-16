import './App.css'

const RandomNumber = () =>{
    const number = Math.random()
    return(
        <div>
            <p>{number}</p>
        </div>
    )
}
const AbsoluteValue = () =>{
    const numbers = -10
    return(
        <div>
            <p>Absolute Value: {Math.abs(numbers)}</p>
        </div>
    )
}
const SumOfEvenNumbers=() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    let sumOfEven = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            sumOfEven += numbers[i]
        }
    }
    return(
        <div>
            <p>{`Sum of Even Number: ${sumOfEven}`}</p>
        </div>
    )
}
const SqaureParameter = () =>{
    const square = 5
    const parameter = 4 * square
    return(
        <div>
            <h1>Square Parameter Calculator</h1>
            <p>side of length: {square}</p>
            <p>parameter: {parameter}</p>
        </div>
    )
}
const CurrencyConverter = () =>{
    const usDollar = 50
    const exchangeAmount = 74.5
    const indianRupees = usDollar * exchangeAmount
    return(
        <div>
            <h1>Currency Converter</h1>
            <p>Amount in USD: {usDollar}</p>
            <p>Exchange Amount: {`1 USD = ${exchangeAmount}`}</p>
            <p>Amount in INR: {indianRupees}</p>
        </div>
    )

}
export default function CalculateMath(){
    return(
        <main>
            <RandomNumber />
            <AbsoluteValue />
            <SumOfEvenNumbers />
            <SqaureParameter />
            <CurrencyConverter />
        </main>
    )
}