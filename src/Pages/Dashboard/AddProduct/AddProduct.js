import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://fathomless-thicket-76558.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    }
    return (
        <div>
            <h4>Add an product</h4>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input{...register("name")} placeholder="Name" />

                <br />
                <input{...register("description")} placeholder="Description" />
                <br />
                <input{...register("price", { required: true })} placeholder="Price" type="number" /> <br />
                <input{...register("image", { required: true })} placeholder="Image Link" />
                <br />

                {errors.exampleRequired && <span>This field is required</span>}


                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;