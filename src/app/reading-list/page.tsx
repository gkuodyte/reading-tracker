import { testimonials } from "@/components/home/HeroSection";
import ReadingList from "@/components/reading-list/ReadingList";

export default function Reading () {
  return <ReadingList articles={testimonials} />;
}