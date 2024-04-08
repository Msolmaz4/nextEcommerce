"use client"
import AdminSiderItme from "./AdminSiderItme";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { usePathname } from "next/navigation";



const AdminSidebar = () => {
  const pathname = usePathname()
  const adminPalet = [
    {
      name: "Dashboard",
      icon: RxDashboard,
      url: "/admin",
    },
    {
      name: "Product",
      icon:MdProductionQuantityLimits,
      url: "/admin/create",
    },
    {
      name: "Manager",
      icon:MdProductionQuantityLimits,
      url: "/admin/manage",
    },
    {
      name: "Ordner",
      icon: MdOutlineBorderColor,
      url: "/admin/order",
    },
  ];

  return <div className="w-1/6 h-screen border justify-center items-center flex flex-col ">
    
    
    {
      adminPalet?.map((item,i)=>(
        <div key={i} className="p-7"> <AdminSiderItme icon={item.icon} selected={pathname == item.url} name={item.name} url={item.url}/>  </div>
      ))
    }
    
    
    </div>;
};

export default AdminSidebar;
