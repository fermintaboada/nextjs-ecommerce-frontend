"use client";

import { loginUserService } from "@/services/authServices";
import {
  initialValuesLogin,
  LoginFormValuesInterface,
  loginValidationSchema,
} from "@/validators/LoginSchema";
import { useFormik } from "formik";
import { UseAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { setDataUser } = UseAuth();
  const router = useRouter();

  const formik = useFormik<LoginFormValuesInterface>({
    initialValues: initialValuesLogin,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload = {
          ...values,
          email: values.email.trim(),
        };

        const response = await loginUserService(payload);
        setDataUser(response);

        alert("¡Bienvenido! Sesión iniciada con éxito.");
        router.push("/home");
        resetForm();
      } catch (error) {
        alert("Email o contraseña incorrectos.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{
              fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui",
            }}
          >
            Correo electrónico
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition focus:outline-none"
            type="text"
            id="email"
            name="email"
            maxLength={254}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="nombre@correo.com"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-sm text-red-400">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{
              fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui",
            }}
          >
            Contraseña
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition focus:outline-none"
            type="password"
            id="password"
            name="password"
            maxLength={64}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="••••••••"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-sm text-red-400">{formik.errors.password}</p>
          ) : null}
        </div>

        <button
          className="w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition focus:outline-none disabled:opacity-70"
          type="submit"
          disabled={formik.isSubmitting}
          style={{ background: "var(--c-primary)", color: "var(--c-primary-contrast)" }}
        >
          {formik.isSubmitting ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <div className="mt-1 flex items-center justify-between text-xs text-[color:var(--c-text-muted)]">
          <span>¿Olvidaste tu contraseña?</span>
          <a
            href="/register"
            className="font-medium hover:underline"
            style={{
              color: "var(--c-primary)",
              fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui",
            }}
          >
            Crear cuenta
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
