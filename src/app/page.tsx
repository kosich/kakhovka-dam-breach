import Article from './article.mdx';

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-24">
      <div className="max-w-2xl m-auto text-justify">
        <Article />
      </div>
    </main>
  );
}
