const Addition = () =>{
    const  a = 2
    const b = 5
    return(
        <div>
            <p>The result {a} + {b} is {a + b}</p>
        </div>
    )
}

const Subtraction = () =>{
    const a = 15
    const b = 10
    return(
        <div>
            <p>The result of {a} - {b} is {a - b}</p>
        </div>
    )
}

const TemperatureCalculator = () =>{
    const celsius = 30
    const fahrenheit = (celsius * 9) / 5 + 32
    return(
        <div>
            <p>{celsius} degree is celsius equal to {fahrenheit} fahrenheit</p>
        </div>
    )
}

const CombinedOperation = () =>{
    const a = 15
    const b = 7
    const c = 3
    return(
        <div>
            <p>{a} + {b} + {c} equal to {a+b+c}</p>
            <p>{a} - {b} is equal to {a-b}</p>
            <p>{a} * {b} * {c} is equal to {a*b*c}</p>
        </div>
    )
}
const Welcome = () =>{
    const firstName = "John"
    const secondName = "Doe"
    return(
        <>
        <p>{`Welcome, ${firstName} ${secondName}`}</p>
        </>
    )
}

const ArrayOperation =() =>{
    const numbers = [1, 2, 3, 4, 5];
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    return(
        <>
        {`Sum of all numbers: ${sum}`}
        </>
    )
}
export default function MathematicalOperation(){
    return(
        <main>
        <Addition />
        <Subtraction />
        <TemperatureCalculator />
        <CombinedOperation />
        <Welcome />
        <ArrayOperation />
        </main>
    )
}