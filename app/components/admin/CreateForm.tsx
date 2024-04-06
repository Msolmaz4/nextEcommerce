"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading"
import Input from "../general/Input"
import Checkbox from "../general/ChexBox";




import { GiElectric } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";
import Choice from "../general/Choice";
import Button from "../general/Button";


const categoryList= [
    {
        name:"Electornic",
        icon: GiElectric 
    },
    {
        name:"Laptop",
        icon: FaLaptop 
    },
    {
        name:"Telefon",
        icon: BsFillTelephoneFill
    },
    {
        name:"Computer",
        icon: FaLaptop 
    },
    {
        name:"Home",
        icon: GiElectric 
    },
    {
        name:"Students",
        icon: PiStudentDuotone
    }
]
const CreateForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues:{
            name:"",
            description:"",
            brand:"",
            category:"",
            price:"",
            image:"",
            inStock:false
        }
      });
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data,"defalr")
      }
   const category = watch("category")
   const setValues = (id:string,value:any)=>{
    setValue(id,value,{
        shouldDirty:true,
        shouldTouch:true,
        shouldValidate:true
    })
   }

  return (
    <div>
    <Heading text="CREATE PRODUCTS" center/>
    <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={errors}
          required
        />
    <Input
          placeholder="Descriptiom"
          type="text"
          id="description"
          register={register}
          errors={errors}
          required
        />
    <Input
          placeholder="Brand"
          type="text"
          id="brand"
          register={register}
          errors={errors}
          required
        />
    <Input
          placeholder="Price"
          type="number"
          id="price"
          register={register}
          errors={errors}
          required
        />
        <Checkbox
    id="inStock"
    label="vorhanden ?" 
    register={register}
/>
<div className="flex flex-wrap gap-2 cursor-pointer ">
    {
        categoryList?.map((item,i)=>(
            <Choice 
            key={i}
             icon ={item.icon}
             text={item.name}
             //burda her onclick yaptigimda categoryit gunelemem gerekit bunu saflmini yolu watch ile dir yukarda yaptik
             onClick={(item)=>setValues("category", item)}
             selected={category === item.name}
             />
        ))
    }
</div>
   <Button text="create PRODUCT" onClick={handleSubmit(onSubmit)}/>
    </div>
  )
}

export default CreateForm


// Bu kod parçacığı, bir form oluşturucu bileşeni içerir ve kullanıcının ürün bilgilerini girmesine izin verir. Formda, ürün adı, açıklama, marka, fiyat, stoğun durumu ve kategori gibi bilgiler girilmelidir.

// watch fonksiyonu, formdaki belirli bir alanın değerini izlemek için kullanılır. Bu durumda, "category" alanını izleyerek seçilen kategoriyi takip ediyoruz.

// setValues fonksiyonu, bir form değerini güncellemek için kullanılır. Kullanıcı bir kategori seçtiğinde, bu fonksiyon aracılığıyla "category" alanının değeri güncellenir.

// İşte detaylar:

// const category = watch("category"): Bu satır, "category" alanının değerini izler ve güncel değeri category değişkenine atar.

// const setValues = (id:string,value:any) => { ... }: Bu fonksiyon, form değerlerini günceller. İlk parametre olarak güncellenmek istenen alanın adını alır ve ikinci parametre olarak yeni değeri alır. setValue fonksiyonunu kullanarak form değerlerini günceller.

// onClick={(item) => setValues("category", item)}: Kategoriler arasında gezinirken her bir kategoriye tıklandığında bu işlev çalışır. setValues fonksiyonunu çağırarak "category" alanının değerini seçilen kategoriye ayarlar.

// Bu kod parçacığı, React ile geliştirme yaparken form işlevselliğini nasıl uygulayabileceğinizi ve form değerlerini nasıl güncelleyebileceğinizi göstermektedir. Bu tür bir yapı, kullanıcıların formda yapılan seçimlere göre dinamik olarak formu doldurmasına olanak tanır.





