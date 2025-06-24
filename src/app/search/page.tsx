import { testimonials } from "@/components/home/HeroSection";
import SearchPage from "@/components/search/Search";

export default function Search() {
  return <SearchPage articles={testimonials} />;
}