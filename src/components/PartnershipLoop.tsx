import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  { name: "Kommo", url: "/images/logos/kommo.svg" },
  { name: "Shopify", url: "/images/logos/shopify.svg" },
  { name: "Pulpos", url: "/images/logos/pulpos.svg" },
  { name: "Mercado Pago", url: "/images/logos/mercadopago.svg" },
  { name: "Hostinger", url: "/images/logos/hostinger.svg" },
  { name: "Neubox", url: "/images/logos/neubox.svg" },
  { name: "Clickup", url: "/images/logos/clickup.svg" },
];

const PartnershipLoop = () => {
  return (
    <div className="py-12 bg-background border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-white/40">
          Nuestra Infraestructura se integra con los mejores
        </p>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="partnership-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={`${logo.name}-${index}`}>
              <div className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group py-4">
                <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight italic">
                  {logo.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
          {/* Repeat logos to ensure smooth loop if there are few items */}
          {logos.map((logo, index) => (
            <SwiperSlide key={`${logo.name}-repeat-${index}`}>
              <div className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group py-4">
                <span className="text-xl md:text-2xl font-display font-bold text-white tracking-tight italic">
                  {logo.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnershipLoop;
