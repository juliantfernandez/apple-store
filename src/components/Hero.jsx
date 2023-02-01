import './hero.css'
const Hero = (props) => {
    return(
        <main className='hero-container'>
                <h3>{props.iphone}</h3>
                <a href='{#}'>Comprar Ahora</a>
            <img src='/imgs/hero-iphone14.jpeg' alt='iphone 14'/>
        </main>
    )
}

export default Hero