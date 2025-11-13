export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.getmulberry.com/hubfs/shutterstock_1973462534.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex min-h-[55vh] items-center justify-center px-4 py-16 sm:min-h-[60vh] md:min-h-[70vh]">
          <h1
            className="text-center font-bold leading-tight text-3xl sm:text-4xl md:text-5xl"
            style={{
              color: 'var(--c-text)',
              fontFamily:
                'var(--font-roboto-condensed), var(--font-roboto), system-ui',
            }}
          >
            <span className="block">/ Los mejores precios y variedad,</span>
            <span className="block">en un solo lugar.</span>
          </h1>
        </div>
      </section>
    </div>
  )
}
