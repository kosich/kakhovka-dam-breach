import Article from './article.mdx';
import Contents from './contents.mdx';

export default function Home() {
  return (
    <section className="min-h-screen w-screen flex justify-center">
      <main className="flex-grow py-24">
        <div className="text-justify w-screen px-8 lg:w-full lg:ml-auto lg:max-w-2xl">
          <Article />
        </div>
      </main>
      <aside className="_contents hidden sticky flex-grow top-0 h-screen overflow-auto mx-4 pt-24 lg:block">
        <div className="w-64 right-0 bottom-0">
          <h2 className="text-lg">Table of contents:</h2>
          <Contents />
        </div>
      </aside>
    </section>
  );
}
