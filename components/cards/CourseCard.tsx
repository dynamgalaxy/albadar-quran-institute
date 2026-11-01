import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import type { Course } from "@/types/course";

export default function CourseCard({ course }: { course: Course }) {
  return <Card item={course} label={course.category}><Button href={course.href ?? "/contact#enquiry"} variant="secondary">Explore course</Button></Card>;
}
