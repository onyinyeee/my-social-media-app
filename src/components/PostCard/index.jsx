import './styles.css';
import { Buttons} from '../Buttons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import SMContext from '../../context/SMContext';

export const PostCard = (props) => {
    const {image, username, caption, id, email} = props;

    const globalState = useContext(SMContext);

    return (
        <div className="post">
            <Link to={`/me/${id}`}>
                <h1 className="post-user"> {username} </h1>
            </Link>
            <img className="post-image" src={image} alt={username  + "photo" + email}/>
            
            <h4 className = "post-caption"> {username}   <p className='post-captionText'>{caption}</p>
              </h4>
            

        </div>
    )
}