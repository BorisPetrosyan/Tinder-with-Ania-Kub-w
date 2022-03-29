import Nav from "../components/Nav";
import {useState} from "react";
import AuthModal from "../components/AuthModal";
import {useCookies} from "react-cookie";

const Home = () => {



    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookies, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken
    const handleClick = () => {
        if(authToken) {
            removeCookie('UserId',cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
        }

        setShowModal(true)
        setIsSignUp(true)
    }
    return (
        <div className='overlay'>
            <Nav
                authToken={authToken}
                minimal={false}
                setShowModal={setShowModal}
                showModal={showModal}
                setIsSignUp={setIsSignUp}
            />
            <div className='home'>
                <h1 className='primary-title'>Swipe Right®</h1>
                <button className='primary-button' onClick={handleClick}>
                    {authToken ? 'Sign out' : 'Creat Account'}
                </button>
                {showModal && (
                    <AuthModal
                        setShowModal={setShowModal}
                        isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home