import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Improves loading performance
});

export const metadata = {
  title: {
    default: "Shristi Bhattarai - Creative Designer & Developer",
    template: "%s | Shristi Bhattarai",
  },
  description:
    "Portfolio of Shristi Bhattarai - Creative Designer & Developer specializing in modern web design, UI/UX, and frontend development. View my latest projects and design work.",
  keywords: [
    "Shristi Bhattarai",
    "Creative Designer",
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Portfolio",
    "Web Design",
    "Digital Design",
    "Creative Portfolio",
  ],
  authors: [{ name: "Shristi Bhattarai" }],
  creator: "Shristi Bhattarai",
  publisher: "Shristi Bhattarai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shristibhattarai.com.np/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shristibhattarai.com.np/", // Replace with your actual domain
    title: "Shristi Bhattarai - Creative Designer & Developer",
    description:
      "Portfolio of Shristi Bhattarai - Creative Designer & Developer specializing in modern web design, UI/UX, and frontend development. View my latest projects and design work.",
    siteName: "Shristi Bhattarai Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Shristi Bhattarai - Creative Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shristi Bhattarai - Creative Designer & Developer",
    description:
      "Portfolio of Shristi Bhattarai - Creative Designer & Developer specializing in modern web design, UI/UX, and frontend development.",
    creator: "@your-twitter-handle", // Replace with your actual Twitter handle
    images: ["/og-image.jpg"], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
 
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Additional SEO meta tags */}
        <meta name="application-name" content="Shristi Bhattarai Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shristi Bhattarai" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shristi Bhattarai",
              jobTitle: "Creative Designer & Developer",
              description:
                "Creative Designer & Developer specializing in modern web design, UI/UX, and frontend development",
              url: "https://shristibhattarai.com.np/", // Replace with your actual domain
              sameAs: [
                "https://linkedin.com/in/shristi-bhattarai", // Replace with your actual LinkedIn
                "https://github.com/Shhristii", // Replace with your actual GitHub
                "https://twitter.com/shristibhattarai", // Replace with your actual Twitter
              ],
              knowsAbout: [
                "Web Design",
                "UI/UX Design",
                "Frontend Development",
                "Creative Design",
                "Digital Design",
              ],
              alumniOf: "Tribhuvan University", 
              worksFor: {
                "@type": "Organization",
                name: "Freelance", 
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
