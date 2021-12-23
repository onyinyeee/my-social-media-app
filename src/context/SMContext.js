import React, {useState} from 'react';

const SMContext = React.createContext({
    posts: [],
    //order: [],
    initializePosts: () => {},
    //addPetToOrder: () => {},
});

export const SMContextProvider = (props) => {
    const [posts, setPosts] = useState([]);
    //const [order, setOrder] = useState([]);

    const initializePosts = (postsFromApi) => {
        setPosts(postsFromApi);
    }

  
    
    return (<SMContext.Provider
     value={{ posts: posts, initializePosts: initializePosts}}
    >
        {props.children}
    </SMContext.Provider>)

} 
export default SMContext;