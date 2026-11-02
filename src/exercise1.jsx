import "./App.css"

const CarDetails = () =>{
    const car = {
        make: "Tesla",
        model: "Model S",
        year: 2022,
        color: "Black",
    }
    return(
        <div>
            <h1>Car Details</h1>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Color: {car.color}</p>
        </div>
    )
}

const MusicProfile = () =>{
    const artist = {
        name: "Beyounce",
        genre: "R&B",
        albums: 8,
        awards: ["Grammy Award", "MTV Video Music Award"],
    }
    return(
        <div>
            <h1>Music Profile</h1>
            <p>Name: {artist.name}</p>
            <p>Genre: {artist.genre}</p>
            <p>Albums: {artist.albums}</p>
            <p>Awards: {artist.awards.join(",")}</p>
        </div>
    )
}

const RecipeInformation = () =>{
    const recipe = {
        name: "Spaghetti Bolognese",
        chef:{
            name: "Jamie Oliver",
            nationality: "British",
        },
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Herbs"],
        cookingTime: 45
    }
    return(
        <div>
            <h2>Recipe Infromation</h2>
            <p>Name: {recipe.name}</p>
            <p>Chef: {recipe.chef.name}, {recipe.chef.nationality}</p>
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
        </div>
    )
}

const MusicAlbum = () =>{
    const album = {
        title: "Abbey Road",
        artist: {
            name: "The Beatles",
            nationality: "British",
        },
        releaseYear: 1969,
        genre:["Rock", "pop"]
    }
    return(
        <div>
            <h2>Music Albums</h2>
            <p>Title: {album.title}</p>
            <p>Artist: {album.artist.name}, {album.artist.nationality}</p>
            <p>Release Year: {album.releaseYear}</p>
            <p>Genre: {album.genre.join(",")}</p>
        </div>
    )
}
const LaptopDetails = () => {
    const laptop ={
        brand: "Apple",
        model: "Macbook Pro",
        screenSize: "13 Inch",
        price: 1299.99,
        feature: ["A15 Bionic Chip", "Dual-camera system", "5G capable"]
    }
    return(
        <div>
            <h1>Product Details</h1>
            <p>Brand: {laptop.brand}</p>
            <p>Model: {laptop.model}</p>
            <p>Screen Size: {laptop.screenSize}</p>
            <p>Price: {laptop.price}</p>
            <p>Feature: {laptop.feature.join(" ,")}</p>
        </div>
    )
}
export default function App(){
    return(
        <main>
            <CarDetails />
            <MusicProfile />
            <RecipeInformation />
            <MusicAlbum />
            <LaptopDetails />
        </main>
    )
}