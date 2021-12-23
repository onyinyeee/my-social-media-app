import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./styles.css";

import { useState } from "react";

export const NewPostPage = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

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
            <form className="form-layout">
                <h2> Submit a new pet: </h2>
                <br/>



                <label htmlFor="username"> Username</label>
                <input {...register("username")} name="username" required type="text" />
               

                <label htmlFor="image"> Image  Url</label>
                <input
                {...register("image")}
                name="image"
                required />

<label htmlFor="\caption"> caption</label>
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