import type { PostItem } from "@/data/posts";

type PostCardProps = {
  post: PostItem;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article id={post.slug} className="mb-6 break-inside-avoid">
      <div className="group overflow-hidden rounded-lg border border-blue-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:border-voya-royal hover:shadow-[0_24px_70px_rgba(0,85,255,0.14)]">
        <img
          src={post.image}
          alt={post.alt}
          loading="lazy"
          className="block h-auto w-full bg-slate-100 transition duration-700 group-hover:scale-[1.015]"
        />
      </div>
    </article>
  );
}
