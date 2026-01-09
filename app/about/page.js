export default function AboutPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div 
        className={`
          bg-white 
          rounded-xl 
          shadow-2xl 
          p-8 md:p-12 
          max-w-3xl 
          w-full 
          border border-zinc-100
          transform 
          transition-all 
          duration-300 
          hover:-translate-y-2 
          hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]
        `}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-zinc-800">
          About RIDEINSTYLE
        </h2>
        
        <p className="text-zinc-700 leading-relaxed text-lg md:text-xl">
          RIDEINSTYLE is an online appreciation page that celebrates the often overlooked and 
          underappreciated icons that shape the identity of Davao City—the trendy <em>uso-uso</em> jeepney.
        </p>
        
        <p className="text-zinc-700 leading-relaxed text-lg md:text-xl mt-6">
          More than just a tribute, (knowing jeepneys would be massively phased-out by the end 
          of the 2020s), our mission is to inspire and energize jeepney drivers, enthusiasts, 
          and everyday commuters by highlighting the creativity, culture, and character embodied 
          in these rides.
        </p>
        
        <p className="text-zinc-700 leading-relaxed text-lg md:text-xl mt-6">
          At the same time, we aim to guide adventurous commuters in discovering some of the 
          most distinctive and memorable jeepney rides across the city — turning every trip 
          into a journey worth remembering.
        </p>
      </div>
    </section>
  );
}