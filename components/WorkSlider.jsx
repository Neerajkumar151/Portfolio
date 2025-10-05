import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const workSlides = {
  slides: [
    {
      images: [
        { title: "GenieAi", path: "/genieai.png", link: "https://genie-ai-wine.vercel.app/" },
        { title: "SkyDrive", path: "/skydrive.PNG", link: "https://cloud-storage-webapp.vercel.app/sign-in" },
        { title: "LoanPal AI", path: "/loanpalai.png", link: "https://ai-loan-pal.lovable.app/" },
        { title: "3 sem mini Project", path: "/3 sem project.PNG", link: "https://neerajkumar151.github.io/Mini-Project/" },
        { title: "Amazon Clone", path: "/amazon.PNG", link: "https://neerajkumar151.github.io/Amazon-frontend/clone_amazon.html" },
        { title: "Interview AI", path: "/thumb1.jpg", link: "https://genie-ai-wine.vercel.app/" },
      ],
    },
  ],
};

const WorkSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides[0].images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group h-full">
              <Image src={image.path} alt={image.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute bottom-2 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                >
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <BsArrowRight aria-hidden />
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        &#8592;
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 p-3 bg-white/20 rounded-full hover:bg-white/40 transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default WorkSlider;
