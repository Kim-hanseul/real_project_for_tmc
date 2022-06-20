export interface NavigationItem {
  title: string;
  link: string;
  active?: string[];
  subMenu?: { title: string; link: string }[];
}

const data: NavigationItem[] = [
  {
    title: '홈으로',
    link: '/',
    active: ['/homepages/'],
  },
  {
    title: '나의 식단',
    link: '/blog/blog-category-grid',
    active: ['/blog/', '/post/'],
    subMenu: [
      { title: '나만의 식단 짜기', link: '/foodSchedule/foodScheduleMake' },
      { title: '식단 캘린더', link: '/foodSchedule/foodScheduleCalendar' },
    ],
  },
  {
    title: '커뮤니티',
    link: '/community/author',
    active: ['/community/author', '/community/shop', '/community/product-detail', '/community/cart', '/community/checkout'],
    subMenu: [
      { title: '게시글 올리기', link: '/community/write' },
      { title: '랭킹', link: '/community/ranking' },
      { title: 'Shop', link: '/community/shop' },
      { title: 'Error 404', link: '/404' },
    ],
  },
  { title: '팀', link: '/team/team', active: [] },
];

export default data;
