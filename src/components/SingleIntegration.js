import '../App.css';
import { useCallback } from 'react';
import { getLinkToken } from '../services/fetchLinkToken';

export const SingleIntegration = ({details, category, updateLinkToken, ready}) => {
    
    const handleClick = useCallback(async () => {
        const {link_token} = await getLinkToken(details.slug, category)
        updateLinkToken(link_token)
    }, [category, details.slug, updateLinkToken])

    return (
        <button className="int-wrapper" style={{borderColor: details.color}} onClick={handleClick} disabled={!ready}>
                <img className="int-image" src={details.image} alt={details.name}/>
        </button>
    )
}