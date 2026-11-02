import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/courses/quran-translation", destination: "/courses/quran-translation-and-tafsir", permanent: true },
      { source: "/courses/quran-tafseer", destination: "/courses/quran-translation-and-tafsir", permanent: true },
      { source: "/courses/basic-islamic-studies", destination: "/courses/islamic-studies", permanent: true },
      { source: "/courses/islamic-studies-for-kids", destination: "/courses/islamic-studies", permanent: true },
    ];
  },
};

export default nextConfig;
