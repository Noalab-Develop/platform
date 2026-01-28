"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export const metadata = {
  title: "Noalab | CTO as a Service – Engenharia, Segurança, Integrações",
  description:
    "CTO as a Service para acelerar sua tecnologia com engenharia de software, arquitetura, integrações e segurança da informação.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">

      {/* Banner Top */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
        <Image
          src="/hero-banner.jpg"
          alt="Banner principal - tecnologia e liderança técnica"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Soluções de Tecnologia sob Medida
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Acelere sua Engenharia, Integrações e Segurança com liderança técnica sob demanda.
          </p>
        </div>
      </section>

      {/* Serviços - Carousel */}
      <section id="servicos" className="bg-[#F9FAFB] px-6 py-24 text-[#111827]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-center">O que fazemos</h2>
          <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
            Atuação estratégica como CTO para garantir decisões técnicas sólidas,
            redução de riscos e crescimento sustentável.
          </p>

          <div className="mt-12">
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              <SwiperSlide>
                <CardLarge
                  title="Engenharia de Software"
                  description="Padrões, revisão de código e direcionamento técnico."
                  image="/services/engineering.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <CardLarge
                  title="Arquitetura de Software"
                  description="Sistemas escaláveis, resilientes e de baixo custo."
                  image="/services/architecture.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <CardLarge
                  title="Integrações"
                  description="APIs, webhooks, filas e pipelines de dados."
                  image="/services/integrations.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <CardLarge
                  title="Segurança da Informação"
                  description="Autenticação, autorização e proteção de dados."
                  image="/services/security.jpg"
                />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2"
      >
        {/* Text */}
        <div className="z-10">
          <h2 className="text-3xl font-semibold">Por que escolher a Noalab</h2>
          <ul className="mt-8 space-y-4 text-gray-300">
            <li>• Liderança técnica sem custo de CTO full-time</li>
            <li>• Redução de dívida técnica e retrabalho</li>
            <li>• Decisões orientadas a negócio e escala</li>
            <li>• Segurança e arquitetura desde o início</li>
          </ul>
        </div>

        {/* Benefits Image + Overlay (desktop only) */}
        <div className="relative hidden h-[320px] w-full overflow-hidden rounded-lg md:block">
          <Image
            src="/benefits.jpg"
            alt="Consultoria técnica e tomada de decisão"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-[#111827] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            Pronto para tomar decisões técnicas melhores?
          </h2>
          <p className="mt-4 text-gray-400">
            Comece com uma avaliação técnica e um roadmap claro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:noalabconsulting@protomail.com"
              className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Noalab. Todos os direitos reservados.
      </footer>
    </main>
  );
}

function CardLarge({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="rounded-lg bg-white shadow-lg overflow-hidden text-[#111827]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}