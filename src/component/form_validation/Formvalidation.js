
import { object, string } from 'yup';
const userValidate = object(
  {
    firstName: string().required("Lütfen bir is,m giriniz"),
    lastName: string().required(""),
    email: string().email().required("lütfen e posta adrresini girin"),
    password: string().min(8,"parola en az 8 karakter olmalı ").max(25,"parola en az 8 karakter olmalı ").required("zorunlu alan")
  }
)



export default userValidate