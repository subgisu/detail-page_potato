import React, { useState } from 'react';

const seasons = [
  { period: '6월 ~ 8월', region: '강원도', regionColor: 'bg-amber-500', desc: '서늘한 고랭지 기후에서 자라 단단하고 저장성이 우수한 수미감자' },
  { period: '9월 ~ 11월', region: '평창/정선', regionColor: 'bg-stone-400', desc: '가을의 정취를 담은 고소한 홍감자' },
  { period: '12월 ~ 5월', region: '제주/남부', regionColor: 'bg-stone-400', desc: '따뜻한 해풍을 맞고 자란 겨울 햇감자' },
];

const SeasonCards: React.FC = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="relative w-full bg-white rounded-3xl shadow-lg overflow-hidden p-8 flex flex-col items-center gap-6">
      {seasons.map((s, i) => (
        <div
          key={i}
          onClick={() => setActive(i)}
          className={`p-4 rounded-xl border w-full max-w-xs transform transition-all duration-300 cursor-pointer ${
            active === i
              ? 'bg-amber-100 border-amber-300 scale-105 opacity-100'
              : 'bg-white border-stone-200 opacity-60 hover:opacity-80'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <span className={`font-bold ${active === i ? 'text-amber-900' : 'text-stone-700'}`}>{s.period}</span>
            <span className={`${active === i ? 'bg-amber-500' : s.regionColor} text-white text-xs px-2 py-0.5 rounded`}>{s.region}</span>
          </div>
          <p className={`text-sm ${active === i ? 'text-stone-600' : 'text-stone-500'}`}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
};

const ProductDetail: React.FC = () => {
  return (
    <div className="w-full bg-stone-50">
      {/* Section 1: The Soil Story */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-amber-700 font-bold tracking-widest mb-4">PREMIUM QUALITY</h3>
        <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-8 leading-snug">
          갓 수확한<br />
          <span className="text-amber-600">100% 국내산 햇감자</span>
        </h2>
        <p className="text-stone-600 leading-8 mb-12">
          감자는 땅이 좋아야 맛이 좋습니다.<br />
          흙 속의 영양을 그대로 머금고 자라난<br />
          단단하고 알찬 햇감자만을 선별했습니다.<br />
          <b className="text-stone-800">새벽녘 농수산</b>은 껍질이 얇고<br />
          분이 많이 나는 최상급 수미감자입니다.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={`${import.meta.env.BASE_URL}images/potato_first.jpg`} alt="Potato Field" className="rounded-lg shadow-md hover:scale-[1.02] transition-transform h-full object-cover" />
          <div className="flex flex-col gap-4">
            <img src={`${import.meta.env.BASE_URL}images/recipe-steamed-potato.jpg`} alt="Harvesting" className="rounded-lg shadow-md hover:scale-[1.02] transition-transform" />
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center items-center h-full border border-amber-100">
              <span className="text-amber-600 font-bold text-lg mb-2">황토밭에서 자란 영양</span>
              <p className="text-sm text-stone-500">포슬포슬한 식감의 비밀</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">오직 <span className="text-amber-600 underline decoration-4 decoration-amber-200">햇감자</span>만을<br/>고집하는 이유!</h2>
            <p className="text-stone-500">저장 감자와는 차원이 다른 신선함을 경험하세요.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-stretch justify-center">
            <div className="flex-1 bg-stone-100 p-8 rounded-2xl md:rounded-r-none opacity-70 grayscale-[0.5]">
              <h3 className="text-xl font-bold text-stone-500 mb-6 text-center">일반 저장 감자</h3>
              <ul className="space-y-4 text-stone-500 text-sm">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-stone-400"></span>수분이 빠져 쭈글쭈글함</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-stone-400"></span>싹이 나기 쉬움</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-stone-400"></span>식감이 질기고 단맛이 적음</li>
              </ul>
              <div className="mt-8 flex justify-center">
                <img src={`${import.meta.env.BASE_URL}images/recipe-potato-pancake.jpg`} className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-md" alt="Old Potato"/>
              </div>
            </div>
            <div className="flex-1 bg-amber-50 border-2 border-amber-400 p-8 rounded-2xl md:scale-105 shadow-xl z-10 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                새벽녘 농수산 햇감자
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">갓 수확한 햇감자</h3>
              <ul className="space-y-4 text-stone-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-xs">V</span>
                  껍질이 얇고 수분이 가득
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-xs">V</span>
                  포슬포슬하게 부서지는 식감
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 text-xs">V</span>
                  본연의 고소하고 깊은 단맛
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <img src={`${import.meta.env.BASE_URL}images/potato-harvest.jpg`} className="rounded-full w-32 h-32 object-cover border-4 border-white shadow-md" alt="Fresh Potato"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Seasonality Map */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-block bg-green-700 text-white px-3 py-1 rounded text-xs font-bold mb-4">POINT 01</div>
          <h2 className="text-3xl font-bold mb-6 text-stone-800">
            시기에 가장 맛있는<br/>
            <span className="text-amber-700">제철 산지</span>에서 보내드립니다.
          </h2>
          <p className="text-stone-600 mb-12">
            감자는 심는 시기와 수확 시기가 지역마다 다릅니다.<br/>
            가장 맛이 오른 산지를 엄선하여 발송합니다.
          </p>
          <SeasonCards />
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
