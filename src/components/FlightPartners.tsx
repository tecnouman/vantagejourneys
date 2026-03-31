const partners = [
  <div key="airblue" className="font-bold text-blue-900 text-xl tracking-tighter flex items-center shrink-0">
    air<span className="text-blue-500">blue</span>
  </div>,

  <div key="flydubai" className="font-bold text-orange-500 text-xl tracking-tighter flex items-center shrink-0">
    fly<span className="text-blue-500">dubai</span><span className="text-[10px] ml-0.5 align-top">®</span>
  </div>,

  <div key="qatar" className="flex flex-col items-center justify-center text-purple-900 shrink-0">
    <span className="font-serif text-2xl tracking-widest uppercase font-bold leading-none">Qatar</span>
    <span className="text-[8px] uppercase tracking-widest">Airways</span>
  </div>,

  <div key="pia" className="flex items-center gap-2 text-green-700 shrink-0">
    <span className="font-bold text-2xl italic tracking-tighter">PIA</span>
    <div className="flex flex-col text-[8px] leading-tight uppercase font-medium">
      <span>Pakistan</span>
      <span>International Airlines</span>
    </div>
  </div>,

  <div key="emirates" className="font-serif text-red-600 text-2xl font-bold tracking-wide shrink-0">
    Emirates
  </div>,

  <div key="thai" className="flex items-center gap-2 text-purple-800 shrink-0">
    <div className="w-6 h-6 rounded-full bg-linear-to-br from-purple-800 to-yellow-500 flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full"></div>
    </div>
    <span className="font-sans text-2xl font-black uppercase tracking-widest">THAI</span>
  </div>,

  <div key="saudia" className="flex items-center gap-2 text-amber-700 shrink-0">
    <span className="font-serif text-xl tracking-widest uppercase font-semibold">Saudia</span>
  </div>,
];

export default function FlightPartners() {
  return (
    <div className="w-full max-w-6xl mt-32 mb-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-12">
        Our Flight Partners
      </h2>

      <div className="w-full overflow-hidden px-4">
        <div
          className="flex items-center gap-12 sm:gap-16 lg:gap-20 opacity-80 w-max"
          style={{
            animation: 'slide 25s ease-in-out infinite alternate',
          }}
        >
          {partners}
          {partners.map((p) => ({ ...p, key: `dup-${p.key}` }))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
