import './App.css'

const WelcomeMessage = () =>{
    return(
        <h1>Discover the world of JSX!</h1>
    )
}
const GreetActor = () =>{
    return(
        <h2>Welcome,Tom hardy fans!</h2>
    )
}
const ExternalLink = () =>{
    const urlLink = "https://www.reactjs.org"
    return(
        <div>
            <a href={urlLink} target="_blank">Explore React Documentation</a>
        </div>
    )
}

const VideoPlayer = () =>{
    const videoUrl = "https://www.example.com/video.mp4"
    return(
        <div>
           <video controls>
            <source src={videoUrl} />
           </video>
        </div>        
    )
}
const MovieDetails = () =>{
    const movie = {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        rating: "PG-13",
        duration: "2h 22m",
    }
    return(
        <div>
            <h1>Movie Details</h1>
            <p>Title: {movie.title}</p>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Duration: {movie.duration}</p>
        </div>
    )
}
export default function App(){
    return(
        <main>
            <WelcomeMessage />
            <GreetActor />
            <ExternalLink />
            <VideoPlayer />
            <MovieDetails />
        </main>
    )
}