
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import AuthContainer from "@/app/components/Container/AuthContanier";
import CreateForm from "@/app/components/admin/CreateForm";
import Heading from "@/app/components/general/Heading";

const CreateProduct = async () => {

  const currentUser = await getCurrentUser();
//console.log(currentUser)
if(!currentUser || currentUser?.role != "ADMIN"){
  return " leider ADMIN"
}


  return (
    <div className="">
      <AuthContainer > 
   
      <CreateForm />
      </AuthContainer>
    </div>
  );
};

export default CreateProduct;
