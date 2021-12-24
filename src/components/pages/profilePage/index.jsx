import "./styles.css";
import {useContext, useEffect, useState} from 'react';
import { PostCard } from "../../PostCard";
import SMContext from "../../../context/SMContext";
//import { Search } from "../../search";
import { getAuth, onAuthStateChanged  } from "@firebase/auth";
import { useHistory } from "react-router-dom";


export const ProfilePage = () => {

const [posts, setPosts] = useState([]); 
const [filteredPosts, setFilteredPosts] = useState([]);
const [loading, setLoading] = useState(true);
//const [searchString, setSearchString] = useState('');
const globalState = useContext(SMContext);

const history = useHistory();

const auth = getAuth();
const user = auth.currentUser.email;

if (user) {
    console.log('User email: ', auth.currentUser.email);
    
}


useEffect(
  () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        
      if (!user) {
        history.push('/login');
      }
    })
  }, []
);


  


  useEffect(
    ()=>{
      getPosts();
    }, []
  );
    
        

  const getPosts = async() => {
    try {
      const response = await fetch('https://firestore.googleapis.com/v1/projects/socialmedia-8ba0e/databases/(default)/documents/myPosts/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields
      });
      setFilteredPosts(formattedData);

      const filteredPosts = formattedData.filter(
        (post) => {
          const email = post.email.stringValue ;
          const isMatch = email.indexOf(user);
  
          return isMatch !== -1;
        }
      )
  
      setFilteredPosts(filteredPosts);

      console.log (formattedData);
 
      
      setLoading(false);

    } catch(err) {
      console.log (err);
      setLoading(false);
    }
  }

  
  return (
      
    <div className="posts-page">
        <p>{user.email}</p>
      <h1 className="posts-title"> My Profile post</h1>
      <h1 className="posts-title"> {user}</h1>
     
      <div className="posts-container">
       {
         filteredPosts.map((post) => (
           <PostCard key={post.id.stringValue}
            image={post.image.stringValue} 
            id={post.id.stringValue}
            >
                
            </PostCard>
          ))
       }

       {
         loading && <p>loading data..</p>
       }

      </div>
    </div>
  );
};
