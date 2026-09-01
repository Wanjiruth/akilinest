import { Link } from "wouter";

/**
 * Renders a paragraph that may carry inline links written markdown-style:
 * "compare the stages on [the programme page](/programme)".
 *
 * Article copy used to be printed verbatim, so a sentence ending "on
 * /programme." showed the reader a raw path and gave Google nothing to follow.
 * Internal paths route through wouter's Link so they navigate client-side;
 * anything external opens in a new tab with rel="noopener".
 */
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text, className }: { text: string; className?: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK.lastIndex = 0;

  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith("/") ? (
        <Link key={m.index} href={href} className="text-[#0B4D5F] underline underline-offset-2 hover:text-[#E8693A]">
          {label}
        </Link>
      ) : (
        <a
          key={m.index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0B4D5F] underline underline-offset-2 hover:text-[#E8693A]"
        >
          {label}
        </a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <p className={className}>{parts}</p>;
}
