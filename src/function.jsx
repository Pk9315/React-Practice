import './App.css'
const MathOperation = () => {
    const a = 20
    const b = 8
    const getSum = (x,y) =>{
        return x + y
    }

    const difference = (a,b) => {
        return a - b 
    }
    return(
        <div>
            <p>{a} + {b} equals {getSum(a,b)}</p>
            <p>{a} - {b} equals {difference(a,b)}</p>
        </div>
    )
}

const CallGreetingFunction = () => {
    const getGreeting = () => {
        return "Hello World!"
    }
    return (
        <div>
            <h1>{getGreeting()}</h1>
        </div>
    )
}

const GetFormat = () =>{
    const getCurrentDate = () =>{
        return new Date().toLocaleDateString()
    }
    return (
        <p>Current Date: {getCurrentDate()}</p>
    )
}

export default function App(){
    return(
        <main>
            <MathOperation />
            <CallGreetingFunction />
            <GetFormat />
        </main>
    )
}