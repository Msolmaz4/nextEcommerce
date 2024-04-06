import { FieldValues, UseFormRegister } from "react-hook-form"


interface CheckboxProps {
    id: string 
    register: UseFormRegister<FieldValues>
    label: string 
}


const Checkbox: React.FC<CheckboxProps> = ({id, register, label}) => { 
    return (
      <div className="flex items-center gap-1">
      <input type="checkbox" {...register(id)}/>
      <label htmlFor={id}>{label}</label> 
      </div>
    )
  }
  
  export default Checkbox 
  