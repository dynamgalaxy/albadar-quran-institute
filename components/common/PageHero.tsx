import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";
import ImageWrapper from "./ImageWrapper";
import Button from "./Button";
import AnimatedArrow from "./AnimatedArrow";
import { cn } from "@/lib/utils";
import type { Alignment, BreadcrumbItem, CTA, ImageAsset } from "@/types/common";
import Image from "next/image";
import GoBackButton from "./GoBackButton";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: ImageAsset;
  breadcrumbs?: BreadcrumbItem[];
  primaryCTA?: CTA;
  secondaryCTA?: CTA;
  backButton?: boolean;
  alignment?: Alignment;
  variant?: "default" | "home" | "inner" | "course" | "compact";
}
export default function PageHero({ eyebrow, title, description, backgroundImage, breadcrumbs, primaryCTA, secondaryCTA, backButton = false, alignment = "left", variant = "course" }: PageHeroProps) {
  const heroImage = backgroundImage ?? { src: "/assets/page-imagery/not-found-hero.webp", alt: "" };
  const imageHero = variant === "home" || variant === "inner" || variant === "course";
  return <section className={cn("page-hero", imageHero && "hero-home", `hero-${variant}`, `align-${alignment}`)} data-header-surface={imageHero ? "dark" : undefined}>
    {imageHero && <><Image src={heroImage.src} alt={heroImage.alt} fill priority fetchPriority="high" sizes="100vw" quality={85} className="home-hero-image" /><div className="home-hero-shade" aria-hidden="true" /></>}
    <Container className={imageHero ? "hero-layout" : undefined}>
      <div className="hero-copy">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p className="hero-description">{description}</p>}
      {(backButton || primaryCTA || secondaryCTA) && <div className="actions">
        {backButton && <GoBackButton />}
        {primaryCTA && <Button href={primaryCTA.href}>{primaryCTA.label}{imageHero && <AnimatedArrow />}</Button>}
        {secondaryCTA && <Button href={secondaryCTA.href} variant="secondary">{secondaryCTA.label}{imageHero && <AnimatedArrow />}</Button>}
      </div>}
      {backgroundImage && !imageHero && <ImageWrapper image={backgroundImage} priority sizes="100vw" />}
      </div>
    </Container>
  </section>;
}
