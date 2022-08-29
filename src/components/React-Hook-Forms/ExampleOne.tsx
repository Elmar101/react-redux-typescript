import React from 'react'
import "./ExampleOne.css";
import { useFieldArray, useForm } from "react-hook-form";
import { watch } from 'fs';

let r = 0;
interface IFORMVALUE {
  firstname: string,
  age: string,
  fullname: {
    sname: string
  },
  pets: {name: string}[]
  test: string
}
const ExampleOne = () => {
  const {control, register , handleSubmit , formState:{errors , isValid}, watch} = useForm<IFORMVALUE>({
    mode: 'onChange',
    defaultValues: {
      firstname: "",
      age: "",
      fullname: { sname: ""},
      pets:[],
      test: ""
    },
    delayError: 1000
  });

  const {fields ,append , prepend} = useFieldArray({name:'pets' , control: control})
  console.log("ERRORS: ", errors);
  register("test")
  //watch 
  const [firstname , age] = watch(['firstname', 'age']);
  console.log("FIRSTNAME:", firstname , " AGE: ", age);
  return (
    <div>
      <h1> RERENDER {r+1}</h1>

      <form onSubmit={handleSubmit((data)=>{
        console.log(data);
        
      })}>
        <input
          {...register("firstname", {required: "name is required"})}
          type="text"
          placeholder='name'
        />

        <br/>{errors.firstname?.message && <p>{errors.firstname.message}</p>}<br/>

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
        <div>
          {
            fields.map((field , index)=> <input key={field.id} {...register(`pets.${index}.name`) } />)
          }
        </div>
        <button type='button' onClick={()=> append({name: 'append'})}> APPEND </button>
        <button type='button'  onClick={()=> prepend({name: 'prepend'})}> PREPEND </button>
    </form>
    </div>
  )
}

export default ExampleOne