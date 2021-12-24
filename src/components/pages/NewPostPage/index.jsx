import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged  } from "@firebase/auth";
import {useContext, useEffect, useState} from 'react';
import { PostCard } from "../../PostCard";
import SMContext from "../../../context/SMContext";


import "./styles.css";


export const NewPostPage = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const globalState = useContext(SMContext);



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

    const submitPost = async (formVals) => {
        const formattedData = {
            fields: {
                id: {
                    stringValue: formVals.id
                },
                caption: {
                    stringValue: formVals.caption
                },
                username: {
                    stringValue: formVals.username
                },
                
                image: {
                    stringValue: formVals.image
                },
                email: {
                    stringValue: formVals.email
                },
            }
        }
        
        console.log(formVals, formattedData);
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/socialmedia-8ba0e/databases/(default)/documents/myPosts/',
            {
                headers: {
                    'content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(formattedData)
            });
            history.push("/");

        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <div className = "posts-page">
            <form className="form-layout" onSubmit={handleSubmit(submitPost)}>
                <h2> Add a new pet </h2>
                <br/>

                <label htmlFor="username"> Username</label>
                <input {...register("username")} name="username" required type="text" />

                <label htmlFor="email"> Email</label>
                <input
                {...register("email")}
                name="email"
                required />
               

                <label htmlFor="image"> Image  Url</label>
                <input
                {...register("image")}
                name="image"
                required />

                <label htmlFor="caption"> caption</label>
                <input
                {...register("caption")}
                name="caption"
                required />

                <label htmlFor="id"> Unique ID</label>
                <input
                {...register("id")}
                name="id"
                required />

                <input type="submit" value="Add post" />
                <br/>

            </form>
            
        </div>
    );
}