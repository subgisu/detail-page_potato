# 이미지 관리 가이드

## 현재 사용 중인 이미지

### 1. 히어로 섹션
- **파일명**: `hero-potatoes.jpg` (권장)
- **현재 URL**: `https://picsum.photos/id/402/1000/1600`
- **권장 사이즈**: 1920x1080px 이상
- **용도**: 메인 배경 이미지

### 2. 레시피 이미지
다음 3개의 이미지가 필요합니다:
- `recipe-potato-pancake.jpg` - 감자채전
- `recipe-steamed-potato.jpg` - 찐감자
- `recipe-potato-soup.jpg` - 감자 스프

**권장 사이즈**: 600x400px

### 3. 상품 상세 이미지
- `product-detail.jpg` - 상품 디테일 이미지
- **권장 사이즈**: 800x800px

## 이미지 추가 방법

1. 이미지를 `public/images/` 폴더에 저장
2. 해당 컴포넌트에서 경로 수정:
   ```tsx
   // 예시
   src="/images/hero-potatoes.jpg"
   ```

## 최적화 팁

- JPEG/WebP 포맷 권장
- 파일 크기: 300KB 이하 권장
- 고해상도 디스플레이 대응을 위해 2배 사이즈 준비

## 현재 임시 이미지 사용 위치

1. `components/Hero.tsx` (8번째 줄)
2. `components/Recipes.tsx` (레시피 이미지 - constants 정의 필요)
3. `components/ProductDetail.tsx` (상품 이미지 - 추가 정의 필요)
