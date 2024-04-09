"use client"
import { Product } from "@prisma/client"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import app from "@/libs/firebase";
import { deleteObject, getStorage, ref } from "firebase/storage"
interface ManageProps {
    products:Product[]
}


const ManageCilent:React.FC<ManageProps> = ({products}) => {
    const storage = getStorage(app)
    const router = useRouter()
    let rows:any = []
    if(products){
        rows= products?.map((item,i)=>{
            return{
         id:item.id,
         name:item.name,
         price:item.price,
         category:item.category,
         brand:item.brand,
         inStock :item.inStock,
         image:item.image
            }
        })
    }

    const columns: GridColDef[] = [
        {field: "id", headerName: "ID", width: 200},
        {field: "name", headerName: "Name", width: 150},
        {field: "price", headerName: "Price", width: 100},
        {field: "category", headerName: "Category", width: 100},
        {field: "brand", headerName: "Brand", width: 100},
        {field: "inStock", 
           headerName: "Brand", 
           width: 100,
           //truesa soyle degilse boyle ifadelerde rendercell kullanilir
           renderCell: (params) => {
            return (
                <div>
                    {params.row.inStock == true ? "okey" : "leider"}
                </div>
            )
           }
        },
        {field: "actions", 
           headerName: "Action", 
           width: 100,
           renderCell: (params) => {
            return (
                <button  onClick={() => handleDelete(params.row.id, params.row.image)}  className="mx-4 text-red-500 cursor-pointer ">
                    delete
                </button>
            )
           }
        },
        {field: "update", 
           headerName: "Update", 
           width: 100,
           renderCell: (params) => {
            return (
                <button  className="mx-4 text-blue-200 cursor-pointer ">
                    update
                </button>
            )
           }
        },
    ]

    const handleDelete = useCallback(async (id: string, image: any) => {
        toast.success('brauche Zeit...')
        const handleDeleteImg = async() => {
            try {
               // const imageRef = ref(storage, buraya silinmesi istemilen dosya gelir )
                const imageRef = ref(storage, image)
                await deleteObject(imageRef)
            } catch (error) {
               return console.log("bir hata mevcut", error) 
            }
        }
        await handleDeleteImg();
        axios.delete(`/api/products/${id}`)
        .then(() => {
          toast.success('gut delelte')
          router.refresh();
        })
        .catch((error: any) => {
            console.log(error)
        })
    }, [])


  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  )
}

export default ManageCilent