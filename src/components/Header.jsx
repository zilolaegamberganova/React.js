import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="header-container">
                <a href='/' className='logo'>
                    <img src='/Frame.svg' alt='Wealthfront'/>
                </a>
                <nav className='nav-links'>
                    <a href='#invest'>Invest</a>
                    <a href='#cash'>Cash</a>
                    <a href='#borrow'>Borrow</a>
                    <a href='#blog'>Blog</a>
                </nav>
                <div className="auth-buttons">
                    <button className='btn-login'>Log in</button>
                    <button className='btn-signup'>Get started</button>
                </div>
            </div>
        </header>
    );
}

export default Header;