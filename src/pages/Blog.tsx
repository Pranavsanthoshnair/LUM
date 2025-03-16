import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 'live-streaming-tips',
      title: '10 Tips for Professional Live Streaming',
      category: 'Live Streaming',
      date: 'June 15, 2023',
      author: 'Michael Johnson',
      image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      excerpt: 'Discover the essential tips and tricks to elevate your live streaming quality and engage your audience effectively.',
    },
    {
      id: 'digital-marketing-trends-2023',
      title: 'Digital Marketing Trends to Watch in 2023',
      category: 'Digital Marketing',
      date: 'May 28, 2023',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      excerpt: 'Stay ahead of the curve with these emerging digital marketing trends that are reshaping how brands connect with their audiences.',
    },
    {
      id: 'video-production-equipment',
      title: 'Essential Equipment for Professional Video Production',
      category: 'Media Production',
      date: 'May 10, 2023',
      author: 'Sarah Williams',
      image: 'https://images.unsplash.com/photo-1540655037529-dec987208707?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      excerpt: 'Learn about the must-have equipment for creating high-quality video content that stands out in today\'s competitive landscape.',
    },
    {
      id: 'event-planning-checklist',
      title: 'The Ultimate Event Planning Checklist',
      category: 'Event Management',
      date: 'April 22, 2023',
      author: 'Jane Smith',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80',
      excerpt: 'Ensure your next event runs smoothly with this comprehensive planning checklist covering everything from venue selection to post-event follow-up.',
    },
    {
      id: 'esports-broadcasting',
      title: 'The Rise of Esports Broadcasting',
      category: 'Esports',
      date: 'April 5, 2023',
      author: 'Michael Johnson',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      excerpt: 'Explore how esports broadcasting has evolved and the technical challenges of streaming competitive gaming events to millions of viewers worldwide.',
    },
    {
      id: 'social-media-strategy',
      title: 'Building an Effective Social Media Strategy',
      category: 'Digital Marketing',
      date: 'March 18, 2023',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      excerpt: 'Learn how to create a cohesive social media strategy that aligns with your brand goals and resonates with your target audience.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Our Blog</h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tips, and industry news from our team of media production experts.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter - For future implementation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-l-md">
                All Posts
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Live Streaming
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Media Production
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300">
                Digital Marketing
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md">
                Event Management
              </button>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 responsive-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative card-image-container">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-0 right-0 p-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-secondary rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date} • By {post.author}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-secondary">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-secondary hover:text-secondary/80 font-medium inline-flex items-center">
                    Read More
                    <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination - For future implementation */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-secondary">
                1
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between responsive-flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Subscribe to Our Newsletter</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Stay updated with the latest industry trends, tips, and news delivered straight to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-secondary focus:border-secondary rounded-md"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500">
                We care about your data. Read our <a href="#" className="font-medium text-secondary hover:text-secondary/80 underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
