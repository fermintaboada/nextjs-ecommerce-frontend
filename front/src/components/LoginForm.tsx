"use client";

import { loginUserService } from "@/services/authServices";
import { initialValuesLogin, LoginFormValuesInterface, loginValidationSchema } from "@/validators/LoginSchema";
import { useFormik } from "formik";
import { UseAuth } from "@/contexts/AuthContext";
import React from "react";

const LoginForm = () => {
  const { setDataUser } = UseAuth();
  
  const formik = useFormik<LoginFormValuesInterface>({
    initialValues: initialValuesLogin,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await loginUserService(values);
      setDataUser(response);
      // to-do: manejar la logica de persistencia de la sesion 
      console.log("sesion iniciada con exito", response);
      resetForm(); 
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: 'var(--font-roboto-condensed), var(--font-roboto), system-ui' }}
          >
            Correo electrónico
          </label>
          <input
            className="
              w-full rounded-xl border px-3 py-2.5
              text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)]
              outline-none transition
              focus:outline-none
            "
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="nombre@correo.com"
            style={{
              background: 'color-mix(in oklab, black 70%, transparent)',
              borderColor: 'var(--c-border)',
              boxShadow: '0 0 0 0 rgba(0,0,0,0)',
            }}
          />
          {formik.errors.email ? (
            <p className="text-sm text-red-400">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-sm font-medium text-[color:var(--c-text)]/90"
            style={{ fontFamily: 'var(--font-roboto-condensed), var(--font-roboto), system-ui' }}
          >
            Contraseña
          </label>
          <input
            className="
              w-full rounded-xl border px-3 py-2.5
              text-[color:var(--c-text)] placeholder:text-[color:var(--c-text-muted)]
              outline-none transition
              focus:outline-none
            "
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="••••••••"
            style={{
              background: 'color-mix(in oklab, black 70%, transparent)',
              borderColor: 'var(--c-border)',
            }}
          />
          {formik.errors.password ? (
            <p className="text-sm text-red-400">{formik.errors.password}</p>
          ) : null}
        </div>

        <button
          className="
            w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold
            transition focus:outline-none
          "
          type="submit"
          style={{
            background: 'var(--c-primary)',
            color: 'var(--c-primary-contrast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--c-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--c-primary)')}
        >
          Iniciar sesión
        </button>

        <div className="mt-1 flex items-center justify-between text-xs text-[color:var(--c-text-muted)]">
          <span>¿Olvidaste tu contraseña?</span>
          <a
            href="/register"
            className="font-medium hover:underline"
            style={{
              color: 'var(--c-primary)',
              fontFamily: 'var(--font-roboto-condensed), var(--font-roboto), system-ui',
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
