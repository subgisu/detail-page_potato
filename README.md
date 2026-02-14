# 🥔 모닝 하베스트 감자 - 프리미엄 산지직송 랜딩페이지

강원도 햇감자를 소개하는 감각적인 상품 상세 페이지입니다.

## 주요 기능

- 🎨 모던하고 세련된 UI/UX 디자인
- 📱 완전한 반응형 레이아웃
- 🛒 상품 옵션 선택 및 구매 플로우
- 📖 레시피 가이드 섹션
- 📏 사이즈 가이드 제공

## 기술 스택

- React 18
- TypeScript
- Vite
- Tailwind CSS

## 로컬 실행 방법

**필수 요구사항:** Node.js 18+

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
├── components/         # React 컴포넌트
│   ├── Hero.tsx       # 메인 히어로 섹션
│   ├── Features.tsx   # 특징 소개
│   ├── ProductDetail.tsx  # 상품 상세
│   ├── Recipes.tsx    # 레시피 가이드
│   └── ...
├── constants.ts       # 상품 데이터
├── types.ts          # TypeScript 타입 정의
└── App.tsx           # 메인 앱 컴포넌트
```

## 커스터마이징 가이드

### 이미지 변경
- `components/Hero.tsx`: 메인 히어로 이미지
- `constants.ts`: 상품 및 레시피 이미지

### 상품 정보 수정
`constants.ts` 파일의 `PRODUCT_OPTIONS` 배열을 수정하세요.

### 컬러 테마 조정
Tailwind CSS 유틸리티 클래스를 통해 색상을 손쉽게 변경할 수 있습니다.
