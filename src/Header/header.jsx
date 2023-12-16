import ItaliaDelCalcio from './ItaliaDelCalcio.png';
import './header.css';

const Header = () => {
    const openLink = () => {
        window.open("https://www.snai.it/sport/CALCIO/SERIE%20A", "_blank", "noopener,noreferrer");        
        window.open("https://www.tuttosport.com/live/calendario-serie-a", "_blank", "noopener,noreferrer");
        window.open("http://www.italiadelcalcio.it/i010100.htm", "_blank", "noopener,noreferrer");
    };
    
    return (
        <header className="flex items-center p-1 text-white text-2xl bg-blue-900">
            SERIE A
            <div className="pl-12 flex flex-col items-center">
                <button
                    className="bg-white text-blue-900 p-2 rounded flex items-center justify-center animate-gradient"
                    onClick={openLink}
                    style={{
                        backgroundImage: 'radial-gradient(circle at center, red, white, green, white)',
                        backgroundSize: '200% 200%',
                        width: '200px',
                        height: '50px',
                        boxShadow: '-6px 8px 10px rgba(221, 231, 248, 0.993)'
                    }}>
                    <img src={ItaliaDelCalcio} alt="Italia del Calcio" className="mr-2" style={{ width: '30px', height: 'auto' }} />
                    Italia del calcio
                </button>
            </div>
        </header >
    );
}

export default Header;
