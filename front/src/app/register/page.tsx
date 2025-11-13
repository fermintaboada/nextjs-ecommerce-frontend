import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <section className="h-16" />
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
        <div className="w-full py-10 sm:py-14">
          <div
            className="mx-auto w-full max-w-md rounded-2xl border p-6 shadow-xl sm:p-8"
            style={{
              borderColor: 'var(--c-border)',
              background: 'color-mix(in oklab, black 60%, transparent)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <h1
              className="mb-6 text-center text-2xl font-bold tracking-wide"
              style={{ fontFamily: 'var(--font-roboto-condensed), var(--font-roboto), system-ui' }}
            >
              Crear cuenta
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
