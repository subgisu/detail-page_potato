import React from 'react';

const SizeGuide: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-stone-800 mb-4">옵션별 크기를 확인하세요!</h2>
        <p className="text-stone-500 mb-12">농산물의 특성상 크기와 모양이 일정하지 않을 수 있습니다.</p>
        
        <div className="relative bg-stone-50 rounded-3xl p-8 md:p-12 shadow-inner border border-stone-200">
           {/* Reference Line */}
           <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-stone-300 transform -translate-y-1/2 z-0"></div>

           <div className="relative z-10 flex flex-wrap justify-center items-end gap-8 md:gap-16">
                {/* Size Small */}
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-amber-300 rounded-full shadow-lg border-b-4 border-amber-600 mb-4"></div>
                    <span className="font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full text-sm">조림용 (소)</span>
                    <span className="text-xs text-stone-400 mt-2">30g~60g</span>
                </div>

                {/* Size Medium */}
                <div className="flex flex-col items-center">
                    <div className="w-24 h-20 bg-amber-300 rounded-[40%] shadow-lg border-b-4 border-amber-600 mb-4"></div>
                    <span className="font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full text-sm">중/상 (80~120g)</span>
                    <span className="text-xs text-stone-400 mt-2">달걀~테니스공 크기</span>
                </div>

                {/* Size Large */}
                <div className="flex flex-col items-center">
                    <div className="w-32 h-24 bg-amber-300 rounded-[40%] shadow-lg border-b-4 border-amber-600 mb-4"></div>
                    <span className="font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full text-sm">특대 (150g 이상)</span>
                    <span className="text-xs text-stone-400 mt-2">종이컵 윗면보다 큼</span>
                </div>

                {/* Reference Object */}
                <div className="flex flex-col items-center opacity-70">
                     <div className="h-32 w-12 bg-gray-700 rounded mb-4 relative overflow-hidden flex items-center justify-center text-white text-xs">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800"></div>
                        <span className="relative z-10">캔음료</span>
                     </div>
                     <span className="text-xs text-stone-500">비교용</span>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SizeGuide;