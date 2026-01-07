
import { Course, School } from './types';

export const SCHOOLS: School[] = [
  { id: 1, name: "Học cùng - Toán ToCo" },
  { id: 2, name: "Tiếng Nhật Edubit" },
  { id: 3, name: "Luyện thi Đại học" },
  { id: 4, name: "Tiếng Anh Giao tiếp" },
  { id: 5, name: "Kỹ năng mềm 2024" }
];

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics: Calculus III',
    instructor: 'Dr. Nguyen Van A',
    progress: 75,
    image: 'https://picsum.photos/seed/math/400/250',
    category: 'Science',
    endDate: '20/12/2025'
  },
  {
    id: '2',
    title: 'English Fluency: Level B2',
    instructor: 'Ms. Emily Johnson',
    progress: 30,
    image: 'https://picsum.photos/seed/english/400/250',
    category: 'Language',
    endDate: '15/11/2025'
  },
  {
    id: '3',
    title: 'Soft Skills for 2025 Workplace',
    instructor: 'Mr. Tran Binh',
    progress: 10,
    image: 'https://picsum.photos/seed/softskills/400/250',
    category: 'Skills',
    endDate: '10/10/2025'
  },
  {
    id: '4',
    title: 'Japanese for Beginners: N5',
    instructor: 'Sensei Tanaka',
    progress: 55,
    image: 'https://picsum.photos/seed/japanese/400/250',
    category: 'Language',
    endDate: '05/01/2026'
  },
  {
    id: '5',
    title: 'Data Science with Python',
    instructor: 'Dr. Le Quang',
    progress: 90,
    image: 'https://picsum.photos/seed/data/400/250',
    category: 'Technology',
    endDate: '30/09/2025'
  }
];
