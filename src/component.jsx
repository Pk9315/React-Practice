import "./App.css"

const Heading = () =>{
    return <h2>React Playground</h2>
}

const Greeting = () =>{
    return <p>Hello, Alice Smith</p>
}
const ExternalLink = () =>{
    const link = "https://www.reactexamples.com "
    return (
        <a href={link} target="_blank">Visit React Examples</a>
    )
}
const Avatar = () =>{
    const imageUrl = "https://via.placeholder.com/200"
    return (
        <div>
            <img src={imageUrl} alt="placeholder" />
        </div>
    )
}
const UserInfo = () =>{
    const userDetails = {
        name: "James Smith",
        age: 28,
        email: "alice.smith@example.com",
        bio: "Passionate about react and building innovative web application"
    }
    return(
        <div>
            <h1>User Details</h1>
            <p>Name: {userDetails.name}</p>
            <p>Age: {userDetails.age}</p>
            <p>Email: {userDetails.email}</p>
            <p>Bio: {userDetails.bio}</p>
        </div>
    )
}
export default function App(){
    return(
        <main>
            <Heading />
            <Greeting />
            <ExternalLink />
            <Avatar />
            <UserInfo />
        </main>
    )
}