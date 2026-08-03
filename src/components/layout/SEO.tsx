import Head from "next/head";
import { profile } from "@/data/home";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
};

export function SEO({
  title = `${profile.name} | ${profile.role}`,
  description = profile.summary,
  url = "https://www.adarshtiwaridev.com",
  image = "https://www.adarshtiwaridev.com/image/Hero/Hero.png",
  keywords = "Adarsh Tiwari, Software Engineer, Full Stack Developer, Next.js Developer, React Engineer, TypeScript",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
}
