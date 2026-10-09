
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticleGrid from "@/components/ArticleGrid";
import QuoteSection from "@/components/QuoteSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-[#F0EDF3]">
      <Header />
      <Hero />
      <FeaturedArticle />
      <ArticleGrid />
      <QuoteSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
