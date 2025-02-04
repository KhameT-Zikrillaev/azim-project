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
      <div className="max-w-md mx-auto space-y-6 py-4 ">
        {/* Logo */}
        
        <div className="text-center mb-4 glass-effect p-8 rounded-2xl">
          <h1 className="text-4xl pt-16 font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            REEBOK
          </h1>
          <Image
          src="/logo.png"
          alt=""
          layout="fill"
          className=" relative z-[-1] w-full h-full object-contain"
        />
        
        </div>

        {/* Services Section */}
        <div className="space-y-4 relative z-10">
          {/* Tinting Service */}
          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <h2 className="text-2xl font-semibold">Тонировка</h2>
            </div>
            <p className="text-white/70">Профессиональная тонировка стекол с гарантией качества</p>
          </div>

          {/* Soundproofing Service */}
          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
              <h2 className="text-2xl font-semibold">Шумоизоляция</h2>
            </div>
            <p className="text-white/70">Качественная шумоизоляция для комфортной езды</p>
          </div>

          {/* Additional Tuning Services */}
          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
              </svg>
              <h2 className="text-2xl font-semibold">Тюнинг</h2>
            </div>
            <ul className="space-y-2 text-white/70">
              <li>• Установка спортивного выхлопа</li>
              <li>• Модификация подвески</li>
              <li>• Стайлинг экстерьера</li>
              <li>• Чип-тюнинг</li>
              <li>• Установка обвесов</li>
            </ul>
          </div>
        </div>

        {/* Contact Links */}
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
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.119.098.152.228.166.331.016.122.033.391.019.591z"/>
            </svg>
          </div>
          <div>
            <div className="font-medium text-lg group-hover:text-white transition-colors">Telegram</div>
            <div className="text-white/60 group-hover:text-white/80 transition-colors">Цены и новости</div>
          </div>
        </Link>

        <Link href="https://instagram.com/salvatini.uz" 
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

        {/* Working Hours */}
        <div className="text-center text-gray-400 mt-8 relative z-10">
          <p>Время работы: 18:00 - 22:00</p>
          <p>Выходной: отдыхаем 7/1</p>
        </div>

        {/* Company Info */}
        <div className="text-center text-gray-400 mt-4 relative z-10">
          <p> 2025 REEBOK. </p>
        </div>

      </div>
    </div>
  );
}
