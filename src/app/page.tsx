
import Hero from "@/components/Hero";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleGrid from "@/components/ArticleGrid";
import QuoteSection from "@/components/QuoteSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArticle />
      <ArticleGrid />
      <QuoteSection />
      <NewsSection />
    </main>
  );
}
