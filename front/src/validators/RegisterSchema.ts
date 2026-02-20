import * as Yup from "yup";

export interface RegisterFormValuesInterface {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  address: string;
  phone: string;
}

export const initialValuesRegister: RegisterFormValuesInterface = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

const LIMITS = {
  email: 254,
  password: 64,
  name: 50,
  address: 80,
  phone: 15,
};

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .max(LIMITS.email, `El correo no puede superar ${LIMITS.email} caracteres`)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),

  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(LIMITS.password, `La contraseña no puede superar ${LIMITS.password} caracteres`)
    .required("La contraseña es obligatoria"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es obligatoria"),

  name: Yup.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(LIMITS.name, `El nombre no puede superar ${LIMITS.name} caracteres`)
    .required("El nombre es obligatorio")
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/, "El nombre solo puede contener letras y espacios"),

  address: Yup.string()
    .trim()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(LIMITS.address, `La dirección no puede superar ${LIMITS.address} caracteres`)
    .required("La dirección es obligatoria"),

  phone: Yup.string()
    .trim()
    .max(LIMITS.phone, `El teléfono no puede superar ${LIMITS.phone} caracteres`)
    .matches(/^\d+$/, "El teléfono debe contener solo números")
    .min(8, "El teléfono debe tener al menos 8 números")
    .required("El teléfono es obligatorio"),
});
