import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900 text-white p-4">
      <Image
        src="/fon2.jpg"
        alt=""
        width={1920}
        height={1080}
        priority
        className="fixed inset-0 w-full h-full object-cover z-[0]"
      />
    
      
      <div className="max-w-md mx-auto space-y-4 py-4 relative z-[2]">
        {/* Logo */}
        <div className="text-center mb-2 glass-effect p-2 rounded-2xl logo-container relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          <h1 className="text-5xl pt-8 font-bold mb-2 text-gray-300 relative z-10 shine-line-text">
            AutoCosmos
          </h1>
          <div className="relative z-0">
            <Image
              src="/logo.png"
              alt=""
              width={200}
              height={200}
              className="logo-image mx-auto"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-2 relative z-10">
          {/* Tinting Service */}
          

          {/* Additional Tuning Services */}
          <div className="service-card p-6">
            <div className="flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg> 
              <h2 className="text-2xl text-clip">  Тюнинг</h2>
            </div>
             <div className="flex items-center justify-center">
            <ul className="space-y-2 text-white/70 text-2xl  text-clip">
              <li>• Тонировка</li>
              <li>• Шумоизоляция</li>
              <li>• Ламинация</li>
              <li>• Уст.Чехлов и ковриков</li>
              <li>• Химчистка</li>
              <li>• Табло тюнинга</li>
            </ul>
            </div>
          </div>

               {/* ~~~~~~~~~~~~~~~~~~~~button~~~~~~~~~~~~~~~~~~~ */}
             <div className="service-card p-4">
            <div className="flex items-center gap-4 mb-3 justify-center">
             <button className="group bg-white/10 relative z-10 cursor-pointer px-6 py-3 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
               <span>Связаться с нами</span>
               <svg 
                 xmlns="http://www.w3.org/2000/svg" 
                 className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
               >
                 <path 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   strokeWidth={2} 
                   d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                 />
               </svg>
             </button>
            </div>
          </div>

        </div>

        {/* Contact Links */}
        <div className="contact-container flex flex-col gap-4">
        <Link href="tel:+998990000096" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Позвонить нам</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">+998 99 000 00 96</div>
          </div>
        </Link>

        <Link href="https://t.me/salvatini_uz" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Telegram</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">@salvatini_uz</div>
          </div>
        </Link>

        <Link href="https://instagram.com" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Instagram</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Новости</div>
          </div>
        </Link>

        <Link href="https://yandex.com/maps/-/CDe5rS9y" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Адрес</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Yandex Maps</div>
          </div>
        </Link>

        <Link href="https://maps.google.com/?q=Salvatini" 
          className="link-item flex items-center gap-4 p-5 rounded-xl group hover:bg-white/10 transition-colors relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1 bg-white animate-line"></div>
          <div className="w-10 h-10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Адрес</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Google Maps</div>
          </div>
        </Link>
        </div>
      

        {/* Working Hours */}
        <div className="text-center text-gray-400 mt-8 relative z-10">
          <p>Время работы: 10:00 - 22:00</p>
          <p>Выходной: отдыхаем 7/1</p>
        </div>

        {/* Company Info */}
        <div className="text-center text-gray-400 mt-4 relative z-10">
          <p> 2025 AutoCosmos. </p>
        </div>

      </div>
    </div>
  );
}
