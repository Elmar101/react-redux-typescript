import React from 'react'
import "./ExampleOne.css";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from 'zod';
import { string } from 'zod';

let r = 0;

const ExampleOne = () => {
  const {register , handleSubmit , formState:{errors , isValid}} = useForm({
    mode: 'onChange',
    defaultValues: {
      name: "",
      age: "",
      fullname: {
        sname: ""
      }
    }
  });

  console.log("ERRORS: ", errors);
  
  return (
    <div>
      <h1> RERENDER {r+1}</h1>

      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
        
      })}>
        <input
          {...register("name", {required: "name is required"})}
          type="text"
          placeholder='name'
        />

        <br/>{errors.name?.message && <p>{errors.name.message}</p>}<br/>

        <input
          {...register("fullname.sname", {required: "sname is required"})}
          type="text"
          placeholder='sname'
        />

        <br/>{errors.fullname?.sname?.message && <p>{errors.fullname?.sname?.message}</p>}<br/>

        <input
          {...register("age", {required: "enter your age" ,valueAsNumber: true , min: 5})}
          type="number"
          placeholder='age'
        />
       <br/>{errors.age?.message && <p>{errors.age.message}</p>}<br/>
        <input type="submit" disabled={!isValid}/>
    </form>
    </div>
  )
}

export default ExampleOne