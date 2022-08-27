import React from 'react'
import "./ExampleOne.css";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from 'zod';
import { string } from 'zod';

let r = 0;
const schema = z.object({
  name: z.string().nonempty({message: "This is required"}),
  age: z.number().min(10)
});

const ExampleOne = () => {
  const {register , handleSubmit} = useForm({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: true
  });

  return (
    <div>
      <h1> RERENDER {r+1}</h1>

      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
        
      })}>
        <input
          {...register("name", {})}
          type="text"
        />

        <br/><br/>
        <input
          {...register("age", {valueAsNumber: true})}
          type="number"
        />
        <br/><br/>
        <input type="submit"/>
    </form>
    </div>
  )
}

export default ExampleOne