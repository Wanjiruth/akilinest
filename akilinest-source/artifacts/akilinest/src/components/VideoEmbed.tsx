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
        // A poster carries the still frame, so the video body is not fetched
        // until the viewer presses play. Without controls the element was
        // unplayable. "metadata" rather than "none": with nothing loaded at all
        // Chrome disables the unmute and full-screen buttons and leaves the
        // scrubber dead, which reads as a broken player. Metadata is a few KB of
        // headers, not the video.
        muted
        playsInline
        controls
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
