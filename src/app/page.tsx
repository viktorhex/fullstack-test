import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { PostTable } from "./_components/post-table";

export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-5 px-2 py-4 ">
        <LatestPosts />
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

async function LatestPosts() {
  let posts = await api.post.getLastTen();

  return(
    <PostTable posts={posts} />
  )
}
