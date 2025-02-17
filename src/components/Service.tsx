import { SectionHeading, TextReveal } from "./ui/typography";
import { SlideIn , Transition } from "./ui/transitions";
import { HoverImageLink } from "./ui/hover-image-link";
import ser1 from "../assets/remaining/proj1.jpg";

const services = [
    {
      _id: 1,
      name: "Backend Development",
      charge: "$1000",
      image: { url: ser1 },
      desc: "Building Sclable websites.",
    },
    {
      _id: 2,
      name: "Web Development",
      charge: "$1500",
      image: { url: ser1 },
      desc: "Creating sleek and user-friendly Web applications.",
    }
  ];
  

const ServicesSection = () => (
    <section className="relative w-full px-2 py-20 bg-black/30">
      <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10 " />
      <SectionHeading className="overflow-hidden md:pl-16">
        <SlideIn className="text-white/60">Here&apos;s how</SlideIn> <br />
        <SlideIn><span className="text-red-600">I</span> can help you</SlideIn>
      </SectionHeading>
      <div className="z-0 pt-10 mx-auto space-y-8">
  {services.map((service) => (
    <Transition key={service._id} className="flex items-center flex-1 space-y-4">
      <HoverImageLink
        heading={service.name}
        href="#"
        price={service.charge}
        imgSrc={service.image.url}
        subheading={service.desc}
      />
      <Transition className="hidden sm:block">
        <button
          className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 bg-transparent border rounded-full border-white/50 hover:bg-white/10 md:px-5 md:py-2 md:text-base"
        >
          <TextReveal>Discuss the project</TextReveal>
        </button>
      </Transition>
    </Transition>
  ))}
</div>

    </section>
  );
  
  export default ServicesSection;