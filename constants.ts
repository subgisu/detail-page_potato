import { ProductOption, Recipe } from './types';

export const PRODUCT_OPTIONS: ProductOption[] = [
  {
    id: 'opt1',
    name: '햇 수미감자 (조림용)',
    weight: '3kg',
    price: 12900,
    originalPrice: 15900,
    description: '한입에 쏙 들어가는 귀여운 크기, 조림이나 휴게소 감자용',
    tag: '알뜰실속'
  },
  {
    id: 'opt2',
    name: '햇 수미감자 (중상)',
    weight: '3kg',
    price: 16900,
    originalPrice: 19900,
    description: '가장 많이 찾는 사이즈, 볶음/국거리/찌개용',
    tag: '베스트'
  },
  {
    id: 'opt3',
    name: '햇 수미감자 (특대)',
    weight: '5kg',
    price: 24900,
    originalPrice: 28900,
    description: '주먹만한 큼직한 크기, 튀김이나 쪄먹기 좋은 사이즈',
    tag: '선물추천'
  },
  {
    id: 'opt4',
    name: '햇 수미감자 (특대)',
    weight: '10kg',
    price: 42900,
    originalPrice: 48900,
    description: '온 가족이 넉넉하게 즐기는 대용량',
    tag: '가성비'
  },
];

export const RECIPES: Recipe[] = [
  {
    title: '바삭바삭 감자채전',
    description: '밀가루 없이 감자 본연의 맛으로 즐기는 고소함',
    imageAlt: 'Potato Pancake',
    steps: ['감자를 얇게 채 썰어주세요', '전분기를 살짝만 씻어내고 소금 간을 합니다', '기름을 넉넉히 두르고 바삭하게 구워내세요']
  },
  {
    title: '포슬포슬 찐감자',
    description: '여름철 최고의 간식, 설탕이나 소금에 콕!',
    imageAlt: 'Steamed Potato',
    steps: ['감자를 깨끗이 씻어 냄비에 담습니다', '물은 감자가 반쯤 잠기게 넣고 센불로 끓입니다', '물이 졸아들면 약불로 뜸을 들여주세요']
  },
  {
    title: '크리미 감자 스프',
    description: '아침 식사 대용으로 든든하고 부드러운 맛',
    imageAlt: 'Potato Soup',
    steps: ['삶은 감자를 으깨 우유와 함께 끓입니다', '버터와 양파를 볶아 풍미를 더해주세요', '체다치즈를 한 장 올리면 완성!']
  }
];