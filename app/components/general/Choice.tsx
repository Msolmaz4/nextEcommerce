import { IconType } from "react-icons"


interface ChoiceProps {
    text:string 
    icon:IconType
    onClick ?:(value:string)=>void
    selected?:boolean
}

const Choice:React.FC<ChoiceProps> = ({text,icon:Icon,onClick,selected}) => {
  return ( 
    <div  onClick={() => onClick && onClick(text)}  className={`p-2 my-8 flex items-center gap-2 justify-center h-16 border ${selected ? "border-black":"border-gray-300"} `}>
        <Icon/>
        <span>{text}</span>
        </div>
  )
}

export default Choice