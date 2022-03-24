import {useState} from "react";

const AuthModal = ({setShowModal,isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const handleClick = () => {
        setShowModal(false)
        try {
            if(isSignUp && ( password !== confirmPassword)) {
                setError('Passwords need to match!')
            }
            console.log('make a post request to our database')
        } catch (error) {
            console.log(error)
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div className='auth-modal'>
            <div className="close-icon" onClick={handleClick}>ⓧ</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' :'Sign In' }</h2>
            <p>By clicking Log in, you agree to our terms,
                Learn how are process your data in our Privacy
                Policy and Cookie Policy.
            </p>
            <form onSubmit={handelSubmit}>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='email'
                    required={true}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='password'
                    required={true}
                    onChange={e => setPassword(e.target.value)}
                />
                { isSignUp &&
                    <input
                        type='password'
                        id='password-check'
                        name='password-check'
                        placeholder='confirm password'
                        required={true}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />

                }
                <input className='secondary-button' type='submit'/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>

        </div>
    )
}
export  default  AuthModal