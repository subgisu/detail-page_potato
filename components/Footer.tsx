import React from 'react';
import { Sun, Box, Ban } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400">
      {/* Storage Info Section */}
      <div className="bg-white text-stone-800 py-20 px-6">
        <div className="max-w-4xl mx-auto border-4 border-stone-100 rounded-3xl p-8 md:p-12 relative">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6">
                 <h3 className="text-2xl font-bold text-amber-600">맛있고 신선하게 보관하는 방법</h3>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                 <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                        <Box size={32} />
                    </div>
                    <h4 className="font-bold mb-2">개별 포장해주세요</h4>
                    <p className="text-sm text-stone-600 break-keep">수령 후 즉시 상자를 열어 신문지로 감싸거나 구멍 뚫린 상자에 보관하세요.</p>
                 </div>
                 <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                        <Sun size={32} />
                    </div>
                    <h4 className="font-bold mb-2">서늘한 그늘에</h4>
                    <p className="text-sm text-stone-600 break-keep">직사광선이 닿지 않는 서늘하고 통풍이 잘 되는 곳에 보관해주세요.</p>
                 </div>
                 <div className="text-center">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                        <Ban size={32} />
                    </div>
                    <h4 className="font-bold mb-2 text-red-500">사과와 함께라면?</h4>
                    <p className="text-sm text-stone-600 break-keep">사과 1개를 함께 넣어두면 감자의 싹이 나는 것을 억제할 수 있습니다.</p>
                 </div>
             </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b border-stone-800 pb-8">
             <div>
                <h4 className="text-white text-lg font-bold mb-4">새벽녘 농수산</h4>
                <p className="mb-2">자연이 주는 가장 정직한 맛을 전합니다.</p>
                <p>고객센터: 1544-0000 (평일 09:00 ~ 18:00)</p>
             </div>
             <div className="md:text-right">
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">배송안내</a></li>
                </ul>
             </div>
        </div>
        <p className="text-stone-600 text-xs">
            상호: 새벽녘 농수산 | 대표: 김감자 | 사업자등록번호: 000-00-00000<br/>
            주소: 강원도 평창군 대관령면 감자꽃길 123<br/>
            통신판매업신고: 2024-강원평창-0000
        </p>
        <p className="mt-4 text-stone-700 text-xs">© 2024 Dawn Harvest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;