"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SERVICE_IMAGES = [
  "/services/engineering.jpg",
  "/services/architecture.jpg",
  "/services/integrations.jpg",
  "/services/security.jpg",
];

interface ServiceItem {
  title: string;
  description: string;
}

interface Props {
  services: ServiceItem[];
}

export function ServicesCarousel({ services }: Props) {
  return (
    <div className="relative w-full px-4 py-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-14"
      >
        {services.map((service, i) => (
          <SwiperSlide
            key={service.title}
            className="flex h-auto justify-center"
          >
            <CardLarge
              title={service.title}
              description={service.description}
              image={SERVICE_IMAGES[i]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
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
    <div className="flex h-full max-w-[360px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg text-[#111827]">
      <div className="relative h-56 w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
