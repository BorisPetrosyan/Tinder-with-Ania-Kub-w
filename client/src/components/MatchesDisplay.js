import axios from "axios";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const MatchesDisplay = ({matches, setClickedUser}) => {
    const [cookies, setCookies, removeCookie] = useCookies(['user'])

    const [matchedProfiles,setMatchedProfiles] = useState(null)
    const userId =cookies.UserId

    const matchedUserIds = matches.map(({user_id}) => user_id)
    const getMatches = async () => {
        try {
            const  response = await axios.get('http://localhost:8000/users-chat', {
                params:{ userIds: JSON.stringify(matchedUserIds) }
            })
            setMatchedProfiles(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getMatches()
    },[matches])

    const filteredMatchedProfiles = matchedProfiles?.filter(
        (matchedProfile) => matchedProfile.matches.filter(
            (profile) => profile.user_id === userId).length > 0)
    return (
        <div className='matches-display'>
            {filteredMatchedProfiles?.map((match) => (
                <div key={match.user_id} className="match-card" onClick={() => setClickedUser(match)}>
                    <div className='img-container'>
                        <img src={match?.url} alt={match?.first_name + 'profile'}/>
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            ))}
        </div>
    )
}

export default MatchesDisplay