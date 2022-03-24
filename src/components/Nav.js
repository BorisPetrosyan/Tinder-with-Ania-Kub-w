import whiteLogo from '../images/logo-white.png'
import colorLogo from '../images/logo.png'

const Nav = ({minimal,authToken,setShowModal,showModal,setIsSignUp}) => {

    const handelClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className='logo-container'>
                <img className='logo' src={minimal ? colorLogo : whiteLogo}/>
            </div>
            {!authToken && !minimal && <button
                onClick={handelClick}
                disabled={showModal}
                className='nav-button'>Log in</button>}
        </nav>
    )
}
export  default  Nav