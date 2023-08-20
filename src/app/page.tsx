import Article from './article.mdx';
import Contents from './contents.mdx';

export default function Home() {
  return (
    <section className="min-h-screen flex justify-center">
      <main className="text-justify flex-grow py-24">
        <div className="max-w-2xl float-right mx-4">
          <Article />
        </div>
      </main>
      <aside className="_contents sticky flex-grow top-0 h-screen overflow-auto mx-4 pt-24">
        <div className="w-64 right-0 bottom-0">
          <h2 className="text-lg">Table of contents:</h2>
          <Contents />
        </div>
      </aside>
    </section>
  );
}
