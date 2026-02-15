import React from 'react';
import { PRODUCT_OPTIONS } from '../constants';
import { ShoppingCart } from 'lucide-react';

const OptionList: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100" id="shop">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-2">OPTION LIST</h2>
          <p className="text-stone-500 tracking-widest uppercase text-sm">옵션 리스트</p>
        </div>

        <div className="space-y-6">
          {PRODUCT_OPTIONS.map((option) => (
            <div key={option.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-stone-200 flex flex-col md:flex-row items-center gap-6">
               <div className="w-full md:w-32 h-32 bg-stone-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                   <img src={`${import.meta.env.BASE_URL}images/hero-potatoes.png`} className="w-full h-full object-cover" alt="Potato Option" />
                   {option.tag && (
                       <span className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg">{option.tag}</span>
                   )}
               </div>
               
               <div className="flex-1 text-center md:text-left">
                 <h3 className="text-xl font-bold text-stone-800 mb-1">{option.name}</h3>
                 <p className="text-sm text-stone-500 mb-3">{option.description}</p>
                 <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                     <span className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded border border-amber-200">{option.weight}</span>
                     <span className="px-2 py-1 bg-stone-50 text-stone-600 text-xs rounded border border-stone-200">박스포장</span>
                 </div>
               </div>

               <div className="flex flex-col items-center md:items-end min-w-[120px]">
                  <span className="text-stone-400 text-sm line-through">{option.originalPrice.toLocaleString()}원</span>
                  <span className="text-2xl font-black text-amber-600 mb-3">{option.price.toLocaleString()}원</span>
                  <button className="bg-stone-800 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-stone-700 transition-colors flex items-center gap-2">
                    <ShoppingCart size={16} /> 담기
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptionList;
