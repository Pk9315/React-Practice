import './App.css'

const Header = () =>{
    return(
        <header>
            <h1>Welcome to our website</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="home">About</a>
                    </li>
                    <li>
                        <a href="home">Contact</a>
                    </li>
                </ul>
                
            </nav>

        </header>
    )
}

const SmartPhoneDetails = ({details}) =>{
    return(
        <div>
            <h1>Smartphone</h1>
            <p>Category: {details.category}</p>
            <p>Price: {details.price}</p>
            <p>Stock: {details.stock}</p>
        </div>
    )
}
const Footer = () =>{
    return(
        <footer>
            <p>&copy; 2024 Our Company. All rights reserved</p>
        </footer>
    )
}
export default function App(){
    const phoneDetails = {
        category: "Electronic",
        price: 799.99,
        stock: 100,
    }
    return(
        <>
        <main>
            <Header />
            <SmartPhoneDetails details={phoneDetails} />
        </main>
        <Footer />
        </>
    )
}