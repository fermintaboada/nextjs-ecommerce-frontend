"use client";

import { useFormik } from "formik";
import {
  RegisterFormValuesInterface,
  registerValidationSchema,
  initialValuesRegister,
} from "@/validators/RegisterSchema";
import { registerUserService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const navigate = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useFormik<RegisterFormValuesInterface>({
    initialValues: initialValuesRegister,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitError(null);

      try {
        const payload = {
          ...values,
          email: values.email.trim(),
          name: values.name.trim(),
          address: values.address.trim(),
          phone: values.phone.trim(),
        };

        const response = await registerUserService(payload);
        console.log("Formulario de registro enviado con exito", response);

        resetForm();
        navigate.push("/login");
      } catch (error) {
        console.error("Error registrando usuario:", error);
        setSubmitError("No se pudo completar el registro. Intentá nuevamente.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full">
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {submitError ? (
          <p className="text-sm text-red-400">{submitError}</p>
        ) : null}

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Correo electrónico
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="email"
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
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Contraseña
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="password"
            id="password"
            name="password"
            maxLength={64}
            autoComplete="new-password"
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

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Confirmación de contraseña
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            maxLength={64}
            autoComplete="new-password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="••••••••"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-sm text-red-400">{formik.errors.confirmPassword}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Nombre
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="text"
            id="name"
            name="name"
            maxLength={50}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Tu nombre"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-sm text-red-400">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="address"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Dirección
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="text"
            id="address"
            name="address"
            maxLength={80}
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Calle y número"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-sm text-red-400">{formik.errors.address}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: "var(--font-roboto-condensed), var(--font-roboto), system-ui" }}
          >
            Teléfono
          </label>
          <input
            className="w-full rounded-xl border px-3 py-2.5 text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)] outline-none transition"
            type="text"
            id="phone"
            name="phone"
            inputMode="numeric"
            maxLength={15}
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Ej: 1123456789"
            style={{
              background: "color-mix(in oklab, black 70%, transparent)",
              borderColor: "var(--c-border)",
            }}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p className="text-sm text-red-400">{formik.errors.phone}</p>
          ) : null}
        </div>

        <button
          className="w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition focus:outline-none disabled:opacity-70"
          type="submit"
          disabled={formik.isSubmitting}
          style={{
            background: "var(--c-primary)",
            color: "var(--c-primary-contrast)",
          }}
          onMouseEnter={(e) => {
            if (!formik.isSubmitting) e.currentTarget.style.background = "var(--c-hover)";
          }}
          onMouseLeave={(e) => {
            if (!formik.isSubmitting) e.currentTarget.style.background = "var(--c-primary)";
          }}
        >
          {formik.isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
