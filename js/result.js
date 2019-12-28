export const results = [
  {
    title: 'โรงเรียนปัญญาวุฒิกร',
    tags: ['ดนตรี', 'กีฬา', 'อาชีพ'],
    location: 'แขวงลาดยาว เขตจตุจักร',
    rating: 4.5,
    category: 'school',
    email: 'fmrth3@ksc.th.com',
    phone: '0-2589-5762',
    image: 'https://picsum.photos/500',
  },
  {
    title: 'นายเชาวลิต สาดสมัย',
    tags: ['ชีวิต', 'จิตใจ'],
    location: 'แขวงบางยี่ขาน เขตบางพลัต',
    rating: 4.8,
    category: 'teacher',
    phone: '081-239-0813',
    image: 'https://picsum.photos/500',
    hasStory: true
  },
  {
    title: 'โรงเรียนทีปังกรวิทยาพัฒน์',
    tags: ['ดนตรี', 'กีฬา', 'อาชีพ'],
    location: 'แขวงบางยี่ขาน เขตบางพลัต',
    rating: 4.8,
    category: 'teacher',
    website: 'https://www.tp-school.ac.th',
    phone: '0-2243-8565',
    image: 'https://picsum.photos/500',
  },
  {
    title: 'โรงเรียนประถมนนทรี',
    tags: ['เรียนร่วมกับเด็กปกติ'],
    location: 'แขวงบางยี่ขาน เขตบางพลัต',
    rating: 4.8,
    category: 'teacher',
    website: 'https://www.tp-school.ac.th',
    phone: '0-2243-8565',
    image: 'https://picsum.photos/500',
  },
].map((x, i) => ({ ...x, id: i + 1 }))