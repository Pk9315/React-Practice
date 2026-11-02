import './App.css'
// Write a props for greeting the user

const Greeting = (props) =>{
    return <h1>Hello, {props.name}</h1>
}

// write a user Details by using props
const UserDetails = (user) =>{
    return(
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>
    )
}
// Write a weather info
const WeatherInfo = (weather) =>{
    return(
        <div>
            <h1>Weather information</h1>
            <p>Temparature: {weather.temperature}</p>
            <p>Condition: {weather.condition}</p>
        </div>
    )
}

// User Avatar
const UserAvatar = (props) =>{
    return(
        <div>
            <h1>User Avatar</h1>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default function react(){
    return(
        <>
        <Greeting name = "Sanjeet" />
        <UserDetails name = "Sanjeet" age = {24} city = "Patna" />
        <WeatherInfo temperature = {29} condition = "Sunny" />
        <UserAvatar img = "https://via.placeholder.com/150" alt = "Placehold" />
        </>
    )
}