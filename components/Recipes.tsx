import React from 'react';
import { RECIPES } from '../constants';
import { ChefHat } from 'lucide-react';

const Recipes: React.FC = () => {
  return (
    <section className="py-24 bg-amber-700 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
                <div className="h-px w-8 bg-white"></div>
                <span className="tracking-widest text-sm font-light">RECIPE</span>
                <div className="h-px w-8 bg-white"></div>
            </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            새벽녘 아삭 햇감자<br/>
            더욱 건강하게 즐겨보세요
          </h2>
          <p className="opacity-90 font-light">
            영양소를 그대로 머금은 껍질째 쪄드셔도 좋고,<br/>
            다양한 요리로 활용하면 식탁이 풍성해집니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECIPES.map((recipe, idx) => (
            <div key={idx} className="bg-white text-stone-800 rounded-2xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 overflow-hidden bg-gray-200 relative">
                 <img 
                    src={`${import.meta.env.BASE_URL}images/${['potatocake.png', 'potato_smother.jpg', 'potato_soup.jpg'][idx]}`}
                    alt={recipe.imageAlt}
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute top-4 right-4 bg-amber-500 text-white p-2 rounded-full shadow-lg">
                    <ChefHat size={20} />
                 </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-amber-800">{recipe.title}</h3>
                <p className="text-stone-500 text-sm mb-6 border-b border-stone-100 pb-4">{recipe.description}</p>
                <ul className="space-y-2">
                    {recipe.steps.map((step, sIdx) => (
                        <li key={sIdx} className="text-sm flex gap-3 text-stone-700">
                            <span className="font-bold text-amber-500">{sIdx + 1}.</span>
                            {step}
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
