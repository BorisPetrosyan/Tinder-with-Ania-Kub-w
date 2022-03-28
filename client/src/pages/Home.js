import Nav from "../components/Nav";
import {useState} from "react";
import AuthModal from "../components/AuthModal";

const Home = () => {

    const authToken = false

    const [showModal,setShowModal] = useState(false)
    const [isSignUp,setIsSignUp] =useState(true)

    const  handleClick = () => {
        setShowModal(true)
        setIsSignUp(true)
    }
    return (
        <div className='overlay'>
            <Nav
                minimal={false}
                authToken={authToken}
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
export  default  Home