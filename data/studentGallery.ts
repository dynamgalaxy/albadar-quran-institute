export type StudentGalleryItem = {
  id: string;
  kind: "image" | "video";
  poster: string;
  alt: string;
  videoSrc?: string;
  sourcePage?: string;
};

// Student and online-learning imagery supplied with the target website assets.
export const studentGallery: StudentGalleryItem[] = [
  { id: "reading-boy", kind: "image", poster: "/assets/gallery/student-reading-boy.webp", alt: "Illustrative image of a boy reading Quran beside a laptop" },
  { id: "reading-solo-boy", kind: "image", poster: "/assets/gallery/student-reading-solo-boy.webp", alt: "Illustrative image of a boy reading Quran" },
  { id: "boy-video", kind: "video", poster: "/assets/gallery/stock-boy-video-poster.webp", alt: "Stock video preview of a boy reading Quran", videoSrc: "https://videos.pexels.com/video-files/9116996/9116996-hd_720_1280_24fps.mp4", sourcePage: "https://www.pexels.com/video/a-little-boy-talking-while-reading-a-quran-book-9116996/" },
  { id: "together", kind: "image", poster: "/assets/gallery/students-reading-boys.webp", alt: "Illustrative image of two boys reading together" },
  { id: "online", kind: "image", poster: "/assets/gallery/student-online-lesson.webp", alt: "Illustrative image of a student joining an online Quran lesson" },
  { id: "classroom", kind: "image", poster: "/assets/gallery/classroom-boys.webp", alt: "Illustrative image of boys studying with a teacher" },
];
