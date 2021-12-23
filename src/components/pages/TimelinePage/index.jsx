import "./styles.css";
import {useContext, useEffect, useState} from 'react';
import { PostCard } from "../../PostCard";
import SMContext from "../../../context/SMContext";
//import { Search } from "../../search";
import { getAuth, onAuthStateChanged  } from "@firebase/auth";
import { useHistory } from "react-router-dom";


export const TimelinePage = () => {

const [posts, setPosts] = useState([]); 
const [loading, setLoading] = useState(true);
const globalState = useContext(SMContext);

const history = useHistory();

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

      console.log (formattedData);

      setPosts(formattedData);
      
      globalState.initializePosts(formattedData);
      setLoading(false);

    } catch(err) {
      console.log (err);
      setLoading(false);
    }
  }
  
  return (
    <div className="posts-page">
      <h1 className="posts-title"> My feed</h1>
     
      <div className="posts-container">
       {
         posts.map((post) => (
           <PostCard key={post.id.stringValue}
            image={post.image.stringValue}
            username={post.username.stringValue} 
            id={post.id.stringValue}
            caption={post.caption.stringValue}>
                
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
