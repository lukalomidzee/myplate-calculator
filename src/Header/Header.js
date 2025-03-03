import './Header.css';
import plateLogo from '../assets/icons/myplate-brand.svg';

function Header(){
    return (
        <header className='header'>
            <div>
                <img src={plateLogo} className='plate-image' alt='plate-icon'/>
            </div>
            <div>
                <p className='header-link'>MyPlate</p>
            </div>
        </header>
    );
}

export default Header;