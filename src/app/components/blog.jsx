import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Our 6 of the Best Organic Chocolates to Buy.',
    imgSrc: '/background/blog-1.jpg',
    postId: '04',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Best guide to shopping for organic ingredients.',
    imgSrc: '/background/blog-2.jpg',
    postId: '02',
  },
  {
    date: 'March 17, 2021',
    author: 'Mike Dooley',
    title: 'Zechsal Magnesium flakes especially made.',
    imgSrc: '/background/blog-3.jpg',
    postId: '02',
  },
];

export default function Blog() {
  return (
    <section className="max-w-7xl mx-auto bg-white mt-20 text-center">
      <p className="text-[#4d7c0f] italic mb-2 text-[20px] md:text-[24px] font-[400]">
        ~ From our blog ~
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        On a quest to bring together and closer<br />
        to you all things Organic.
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <div className="relative w-full h-60">
              <Image
                src={post.imgSrc}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-left flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-600">
                  {post.date} &nbsp; || &nbsp; {post.author}
                </p>
                <h3 className="text-lg font-semibold mt-2 mb-4 leading-snug text-[#000]">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center justify-between text-sm text-blue-800 font-semibold border-t pt-2 border-gray-200">
                <Link href="/blog" className="hover:text-gray-600">
                  Read more
                </Link>
                <span>{post.postId}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
