import React from 'react';
import { useForm } from "react-hook-form";

const Reviews = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://fathomless-thicket-76558.herokuapp.com/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data)
    }
    return (
        <div>
            reviews


            <form onSubmit={handleSubmit(onSubmit)}>


                <br />
                <input
                    {...register("description", { required: true })}
                    defaultValue='description'

                />
                <br />
                <input
                    {...register("image", { required: true })}
                    defaultValue='https://i.ibb.co/Wx7vvbm/Customer-care-icon-resized.png'

                />
                <br />


                {errors.exampleRequired && <span>This field is required</span>}

                <input
                    type="submit"
                    value="Please Reviews"

                />
            </form>
        </div>
    );
};

export default Reviews;