type VideoEmbedProps = {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
  className?: string;
};

export default function VideoEmbed({ src, poster, title, caption, className = "" }: VideoEmbedProps) {
  const base = import.meta.env.BASE_URL;
  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-[#0D0C18] ${className}`}>
      <video
        // Keep video lightweight: don't autoplay to improve Lighthouse speed.
        muted
        playsInline
        preload="metadata"

        poster={poster ? `${base}${poster.replace(/^\//, "")}` : undefined}
        className="w-full aspect-video object-cover"
        aria-label={title}
      >
        <source src={`${base}${src.replace(/^\//, "")}`} type="video/mp4" />
      </video>
      {caption ? (
        <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent text-sm text-white/90 font-sans">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
