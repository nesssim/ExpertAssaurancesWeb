import Image from "next/image";

interface ProductHeroProps {
  name: string;
  tagline: string;
  description: string;
  image?: string;
}

export function ProductHero({ name, tagline, description, image }: ProductHeroProps) {
  return (
    <section className="relative min-h-[350px] lg:min-h-[420px] flex items-center overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/70" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary-light" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">{name}</h1>
          <p className="mt-4 text-lg text-white/80">{tagline}</p>
          <p className="mt-4 text-white/60 max-w-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
