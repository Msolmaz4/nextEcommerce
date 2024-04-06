
import Link from "next/link"
import { IconType } from "react-icons"



interface AdminSiedaProps {
    selected?:boolean
    name:string
    icon:IconType
    url:string
}


const AdminSiderItme:React.FC<AdminSiedaProps> = ({selected,name,icon:Icon ,url}) => {
  return (
    <Link className={ `cursor-pointer flex items-center gap-2  ${selected ? "text-black font-bold" :"text-slate-500 font-medium"}`} href={url}>

 <Icon size={25}/>
{name}
    </Link>
  )
}

export default AdminSiderItme