import whiteLogo from '../images/logo-white.png'
import colorLogo from '../images/logo.png'

const Nav = ({minimal,setShowModal,showModal,setIsSignUp}) => {

    const handelClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = true

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimal ? colorLogo : whiteLogo} alt='logo'/>
            </div>
            {!authToken && !minimal && <button
                onClick={handelClick}
                disabled={showModal}
                className='nav-button'>Log in</button>}
        </nav>
    )
}
export  default  Nav