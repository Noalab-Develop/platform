"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function ServicesCarousel() {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {services.map((service) => (
        <SwiperSlide key={service.title}>
          <CardLarge {...service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const services = [
  {
    title: "Engenharia de Software",
    description: "Padrões, revisão de código e direcionamento técnico.",
    image: "/services/engineering.jpg",
  },
  {
    title: "Arquitetura de Software",
    description: "Sistemas escaláveis, resilientes e de baixo custo.",
    image: "/services/architecture.jpg",
  },
  {
    title: "Integrações",
    description: "APIs, webhooks, filas e pipelines de dados.",
    image: "/services/integrations.jpg",
  },
  {
    title: "Segurança da Informação",
    description: "Autenticação, autorização e proteção de dados.",
    image: "/services/security.jpg",
  },
];

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
      <div className="relative h-56 w-full">
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