import Article from './article.mdx';

export default function Home() {
  return (
    <section className="min-h-screen px-4 py-24 flex justify-center">
      <div className="flex gap-8">
        <aside>
          <ul>
            <li>
              <a href="#">Preface</a>
            </li>
            <li>
              <a href="#">Summary</a>
            </li>
            <li>
              <a href="#">What is scouring</a>
            </li>
          </ul>
        </aside>
        <main className="text-justify max-w-2xl flex-grow">
          <Article />
        </main>
      </div>
    </section>
  );
}
