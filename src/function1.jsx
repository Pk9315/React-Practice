import './App.css'

const GenerateGreeting = () =>{
    const greeting = (name) => {
        return "Hello, " + name + "!"
    }
    return (
        <h1>{greeting("John")}</h1>
    )
}
const CalculateArea = () => {
    const calculate = (length,width) => {
        return length * width
    }
    return (
        <div>
            <h1>Area of ractangle</h1>
            <p>The Area of Ractangle is: {calculate(10,5)}</p>
        </div>

    )
}
const CalculatePerimeter = () =>{
    const calculateRactangle = (length,width) => {
        return 2 * (length + width)
    }
    return(
        <div>
            <h1>Parimeter of Ractangle</h1>
            <p>Parimeter of Ractangle: {calculateRactangle(10,5)}</p>
        </div>
    )
}
const GenerateMessage = () => {
    const getHours = () => {
       const currentHours = new Date().getHours()
       if(currentHours < 12){
        return "Good Morning!"
       }else if(currentHours < 18){
        return "Good Afternoon!"
       }else{
        return "Good evening"

       }
        
    }
    return(
        <div>
            {getHours()}
        </div>
    )
}

const CalculateVolume = () =>{
    const cylinderVolume = (radius,height) =>{
        return (3.14 * radius * radius * height)
    }
    return (
        <div>
            <h1>Volume of Cylinder</h1>
            <p>{cylinderVolume(3,5)}</p>
        </div>
    )
}
export default function App(){
  return (
      <main>
        <GenerateGreeting />
        <CalculateArea />
        <CalculatePerimeter />
        <GenerateMessage />
        <CalculateVolume />
    </main>
  )
}