
import Image from 'next/image';
import Header from '../components/Header';

export default function BlogsPage() {
  const topics = [
    'All Topics',
    'Education & Careers',
    'Guides',
    'Health & Wellbeing',
    'Living in Gdańsk',
    'Money & Sustainability',
  ];

  const posts = [
    {
      id: 1,
      title: 'Living and working in Gdansk as a student in 2026: Is it worth it?',
      tag: 'Living in Gdańsk',
      excerpt:
        'Discover the costs, work opportunities, and lifestyle pros & cons to help you decide if moving is the right step.',
      date: 'Mar 12, 2026',
      readTime: '6 min read',
      image: '/images/bg4.png',
      href: '/blogs/living-and-working-in-gdansk-2026',
      featured: true,
    },
    {
      id: 2,
      title: 'Is it hard to find student accommodation in Gdansk as an Erasmus student? [2026 guide]',
      tag: 'Living in Gdańsk',
      excerpt:
        'A practical checklist for finding housing fast—platforms to use, what to avoid, and how to negotiate safely.',
      date: 'Mar 10, 2026',
      readTime: '5 min read',
      image: '/images/bg2.png',
      href: '/blogs/student-accommodation-gdansk-erasmus',
      featured: false,
    },
    {
      id: 3,
      title: 'Best student-friendly places to work and study in the city',
      tag: 'Guides',
      excerpt:
        'Cafés, libraries, and quiet workspaces with good Wi‑Fi—curated for productivity and comfort.',
      date: 'Mar 06, 2026',
      readTime: '4 min read',
      image: '/images/bg3.png',
      href: '/blogs/student-friendly-places-to-work-and-study',
      featured: false,
    },
    {
      id: 4,
      title: 'How to build a standout CV for internships and entry-level roles',
      tag: 'Education & Careers',
      excerpt:
        'Structure, keywords, and examples to help your CV get shortlisted—plus common mistakes to avoid.',
      date: 'Mar 02, 2026',
      readTime: '7 min read',
      image: '/images/bg2.png',
      href: '/blogs/standout-cv-internships-entry-level',
      featured: false,
    },
    {
      id: 5,
      title: 'Wellbeing tips for students: sleep, focus, and routines that work',
      tag: 'Health & Wellbeing',
      excerpt:
        'Simple habits that improve energy and focus during busy semesters—without burning out.',
      date: 'Feb 25, 2026',
      readTime: '3 min read',
      image: '/images/bg3.png',
      href: '/blogs/student-wellbeing-sleep-focus-routines',
      featured: false,
    },
    {
      id: 6,
      title: 'Budgeting basics: managing money during your studies',
      tag: 'Money & Sustainability',
      excerpt:
        'Plan expenses, track spending, and build a realistic budget that keeps you stress-free all term.',
      date: 'Feb 20, 2026',
      readTime: '5 min read',
      image: '/images/bg4.png',
      href: '/blogs/budgeting-basics-students',
      featured: false,
    },
    {
      id: 7,
      title: 'Part-time jobs for students: where to look and how to apply',
      tag: 'Education & Careers',
      excerpt:
        'From cafés to tech internships—learn where to find roles, what to prepare, and how to stand out quickly.',
      date: 'Feb 14, 2026',
      readTime: '6 min read',
      image: '/images/bg2.png',
      href: '/blogs/part-time-jobs-for-students',
      featured: false,
    },
    {
      id: 8,
      title: 'City transport guide: passes, routes, and saving money while commuting',
      tag: 'Guides',
      excerpt:
        'Everything you need to know about daily travel—tickets, monthly passes, and the most reliable routes.',
      date: 'Feb 08, 2026',
      readTime: '4 min read',
      image: '/images/bg3.png',
      href: '/blogs/city-transport-guide-students',
      featured: false,
    },
    {
      id: 9,
      title: 'Healthy eating on a student budget: simple meals and grocery tips',
      tag: 'Health & Wellbeing',
      excerpt:
        'A practical meal plan with affordable ingredients—plus shopping habits that reduce cost and waste.',
      date: 'Feb 01, 2026',
      readTime: '5 min read',
      image: '/images/bg4.png',
      href: '/blogs/healthy-eating-student-budget',
      featured: false,
    },
    {
      id: 10,
      title: 'Sustainable living tips: reduce waste and save money at the same time',
      tag: 'Money & Sustainability',
      excerpt:
        'Small habits that make a big difference—lower bills, smarter purchases, and easy sustainability wins.',
      date: 'Jan 25, 2026',
      readTime: '4 min read',
      image: '/images/bg2.png',
      href: '/blogs/sustainable-living-tips-students',
      featured: false,
    },
  ];

  const gridLayout = [
    'col-span-6 lg:col-span-4 lg:row-span-2',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-1',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-3',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-5',
    'col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-5',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-7',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-7',
    'col-span-6 lg:col-span-2 lg:row-span-2 lg:col-start-5 lg:row-start-7',
  ];

  return (
    <div className="bg-[#f5f3f3]">
      <div className="bg-[#f5f3f3] p-4">
        <Header />

      
          <section className="relative overflow-hidden rounded-2xl">
            <div className="relative h-[260px] w-full md:h-[420px]">
              <Image
                src="/images/bg3.png"
                alt="Blog banner"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="max-w-3xl">
                    <div className="text-sm font-semibold tracking-[0.2em] text-[#ffee50]">Home / Blog</div>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                      Blog
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto mt-8 w-full max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-6">
                  <div className="rounded-2xl bg-[#f7f5ef] p-5">
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-full bg-white px-4 py-3 pr-10 text-sm text-[#101010] outline-none ring-1 ring-black/5 placeholder:text-[#6b6b6b]"
                      />
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-5 w-5 text-[#6b6b6b]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                    </div>

                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b]">Topics</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {topics.map((t) => (
                        <button
                          key={t}
                          type="button"
                          className="rounded-xl bg-[#efe9dd] px-3 py-2 text-xs font-semibold text-[#3b3808] transition-colors hover:bg-[#e6dfd2]"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-black/10 pt-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#6b6b6b]">Top Posts</div>
                    <div className="mt-4 space-y-4">
                      {posts.slice(0, 5).map((p) => (
                        <a key={p.id} href={p.href} className="block">
                        
                          <div className="mt-1 text-sm font-semibold leading-snug text-[#1b1b1b]">
                            {p.title}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              </aside>

              <div className="lg:col-span-9">
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-6 lg:grid-rows-8">
                  {gridLayout.map((layoutClass, idx) => {
                    const post = posts[idx];

                    return (
                      <article
                        key={`${post.id}-${idx}`}
                        className={`${layoutClass} rounded-xl bg-white p-4 shadow-sm`}
                      >
                        <div className="overflow-hidden rounded-2xl">
                          <div className="relative h-[220px] w-full lg:h-[240px]">
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                          </div>
                        </div>

                        <div className="px-2 pb-2 pt-5">
                          <div className="inline-flex rounded-md bg-[#ff7a00] px-3 py-1 text-xs font-semibold text-white">
                            {post.tag}
                          </div>

                          <h3 className="mt-4 text-base font-semibold leading-snug text-[#2b2b2b] md:text-lg">
                            {post.title}
                          </h3>

                        
                         
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  );
}
