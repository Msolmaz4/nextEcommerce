import AdminSidebar from "../components/admin/AdminSidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex gap-3 ">
        <AdminSidebar />
     
      {children} </div>
    </div>
  );
};

export default layout;
