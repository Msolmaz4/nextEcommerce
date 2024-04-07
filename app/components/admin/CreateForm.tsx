"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Checkbox from "../general/ChexBox";
import { GiElectric } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiStudentDuotone } from "react-icons/pi";
import Choice from "../general/Choice";
import Button from "../general/Button";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/libs/firebase";

const categoryList = [
  {
    name: "Electornic",
    icon: GiElectric,
  },
  {
    name: "Laptop",
    icon: FaLaptop,
  },
  {
    name: "Telefon",
    icon: BsFillTelephoneFill,
  },
  {
    name: "Computer",
    icon: FaLaptop,
  },
  {
    name: "Home",
    icon: GiElectric,
  },
  {
    name: "Students",
    icon: PiStudentDuotone,
  },
];
const CreateForm = () => {
  const [img, setImg] = useState<File | null>(null);
  const [uploadImg,setUploadImg] = useState<String | null>()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => { 
    console.log(data, "defalr");
   // let uploadImg:string |null hata aldim bub assing nichr dedi bu yuzden bubna syara aldim
    const handleChange = async () => {
      try {
        const storage = getStorage(app);
        const storageRef = ref(storage, "images/next.jpg");
        const uploadTask = uploadBytesResumable(storageRef, img);
        await new Promise<void>((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              //burasu yukle,edei durum unu gosterir
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              reject(error);
            },
            () => {
              //bueasida basarili olma durumu
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
               // uploadImg :downloadURL
               setUploadImg(downloadURL)
              });
              resolve()
            }
          );
        });
      } catch (error) {
        
      }
    };
    await handleChange();
    //onsbmitt;le datayi almistim amam image yokyu bud ahakkettik sonra 
    let newData = {...data,image:uploadImg}
    console.log(newData,"newDATTTTTTTT")
  };
  
  const category = watch("category");
  const setValues = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const imgFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImg(e.target.files[0]);
    }
  };
  //console.log("img",img)
  return (
    <div>
      <Heading text="CREATE PRODUCTS" center />
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
      <Checkbox id="inStock" label="vorhanden ?" register={register} />
      <div className="flex flex-wrap gap-2 cursor-pointer ">
        {categoryList?.map((item, i) => (
          <Choice
            key={i}
            icon={item.icon}
            text={item.name}
            //burda her onclick yaptigimda categoryit gunelemem gerekit bunu saflmini yolu watch ile dir yukarda yaptik
            onClick={(item) => setValues("category", item)}
            selected={category === item.name}
          />
        ))}
      </div>
      <input type="file" onChange={imgFunc} />
      <Button text="create PRODUCT" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default CreateForm;

// Bu kod parçacığı, bir form oluşturucu bileşeni içerir ve kullanıcının ürün bilgilerini girmesine izin verir. Formda, ürün adı, açıklama, marka, fiyat, stoğun durumu ve kategori gibi bilgiler girilmelidir.

// watch fonksiyonu, formdaki belirli bir alanın değerini izlemek için kullanılır. Bu durumda, "category" alanını izleyerek seçilen kategoriyi takip ediyoruz.

// setValues fonksiyonu, bir form değerini güncellemek için kullanılır. Kullanıcı bir kategori seçtiğinde, bu fonksiyon aracılığıyla "category" alanının değeri güncellenir.

// İşte detaylar:

// const category = watch("category"): Bu satır, "category" alanının değerini izler ve güncel değeri category değişkenine atar.

// const setValues = (id:string,value:any) => { ... }: Bu fonksiyon, form değerlerini günceller. İlk parametre olarak güncellenmek istenen alanın adını alır ve ikinci parametre olarak yeni değeri alır. setValue fonksiyonunu kullanarak form değerlerini günceller.

// onClick={(item) => setValues("category", item)}: Kategoriler arasında gezinirken her bir kategoriye tıklandığında bu işlev çalışır. setValues fonksiyonunu çağırarak "category" alanının değerini seçilen kategoriye ayarlar.

// Bu kod parçacığı, React ile geliştirme yaparken form işlevselliğini nasıl uygulayabileceğinizi ve form değerlerini nasıl güncelleyebileceğinizi göstermektedir. Bu tür bir yapı, kullanıcıların formda yapılan seçimlere göre dinamik olarak formu doldurmasına olanak tanır.

// Promise'ler, JavaScript'te asenkron işlemleri yönetmek için kullanılan yapısal bir özelliktir. Genellikle ağ istekleri yapmak, dosya okuma/yazma işlemleri gibi uzun süren işlemlerle çalışırken veya zaman alabilecek herhangi bir işlemi gerçekleştirirken kullanılırlar.

// Neden kullanılır:

// Asenkron İşlemleri Yönetmek İçin Kolaylık: JavaScript, web tarayıcılarında ve sunucu taraflı uygulama geliştirme ortamlarında yaygın olarak kullanılan bir dil olduğundan, genellikle kullanıcı etkileşimlerini ve diğer asenkron işlemleri yönetmek önemlidir. Promise'ler, bu tür işlemleri daha okunabilir ve yönetilebilir hale getirir.

// Zaman Alıcı İşlemleri Yönetme: Örneğin, ağ istekleri (API çağrıları gibi) veya dosya okuma/yazma işlemleri gibi işlemler, sonuç beklerken diğer kodun çalışmasına izin vermek için Promise'ler kullanılır. Bu, web sayfalarının veya uygulamaların daha duyarlı olmasını sağlar.

// Zincirleme ve İşlemleri Sıralama: Birden çok asenkron işlemi sırayla çalıştırmak, bir işlem tamamlandığında diğerine geçmek için Promise'leri zincirlemek yaygındır. Bu, kodunuzu daha organize etmenizi ve karmaşıklığı azaltmanızı sağlar.

// Hata Yönetimi: Promise'ler, işlemlerin başarılı olup olmadığını kontrol etmek ve hata durumlarını ele almak için kullanılır. Bu, hata yönetimini daha düzenli bir şekilde yapmanıza yardımcı olur.

// Kısacası, Promise'ler JavaScript'te asenkron işlemleri düzenlemek, yönetmek ve sonuçları ele almak için kullanılan bir yapısal özelliktir. Bu, kodun daha okunabilir, yönetilebilir ve hataya karşı daha dayanıklı olmasını sağlar.
