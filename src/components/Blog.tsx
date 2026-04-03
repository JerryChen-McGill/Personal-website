import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '../data/blog';
import { LazyImage } from './LazyImage';

interface BlogProps {
  posts: BlogPost[];
  allTags: string[];
}

export const Blog: React.FC<BlogProps> = ({ posts, allTags }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag!))
    : posts;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Blog List View
  if (!selectedPost) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl pt-12"
      >
        <h2 className="section-title mb-8">Blog</h2>
        
        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedTag === null
                ? 'bg-black text-white'
                : 'bg-black/5 text-black/60 hover:bg-black/10'
            }`}
          >
            All Posts
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedTag === tag
                  ? 'bg-black text-white'
                  : 'bg-black/5 text-black/60 hover:bg-black/10'
              }`}
            >
              <Tag size={12} />
              {tag}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white border border-black/5 hover:border-black/20 transition-all">
                {post.coverImage && (
                  <div className="w-full md:w-48 h-32 flex-shrink-0">
                    <LazyImage
                      src={post.coverImage}
                      alt={post.title}
                      aspectRatio="3/2"
                      rounded="1rem"
                      priority={index < 3}
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-3 text-xs text-black/40">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {estimateReadTime(post.content)} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-serif italic mb-2 group-hover:text-[#555] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#666] mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-black/5 rounded text-[10px] font-medium uppercase tracking-wider text-black/50"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-sm font-medium text-black/40 group-hover:text-black transition-colors flex items-center gap-1">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    );
  }

  // Blog Post Detail View
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl pt-12"
    >
      {/* Back Button */}
      <button
        onClick={() => setSelectedPost(null)}
        className="mb-8 flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors"
      >
        ← Back to Blog
      </button>

      {/* Cover Image */}
      {selectedPost.coverImage && (
        <div className="mb-8 rounded-3xl overflow-hidden">
          <LazyImage
            src={selectedPost.coverImage}
            alt={selectedPost.title}
            aspectRatio="21/9"
            rounded="1.5rem"
            priority={true}
          />
        </div>
      )}

      {/* Meta */}
      <div className="flex items-center gap-4 mb-6 text-sm text-black/40">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {formatDate(selectedPost.date)}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {estimateReadTime(selectedPost.content)} min read
        </span>
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl md:text-5xl italic mb-6">
        {selectedPost.title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {selectedPost.tags.map(tag => (
          <button
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              setSelectedPost(null);
            }}
            className="px-3 py-1 bg-black/5 rounded-full text-xs font-medium uppercase tracking-wider text-black/50 hover:bg-black/10"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {selectedPost.content.split('\n').map((paragraph, index) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-serif italic mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('- **')) {
            const match = paragraph.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
            if (match) {
              return (
                <p key={index} className="mb-4">
                  <strong>• {match[1]}</strong>: {match[2]}
                </p>
              );
            }
          }
          if (paragraph.startsWith('- ')) {
            return (
              <p key={index} className="mb-2 ml-4">
                • {paragraph.replace('- ', '')}
              </p>
            );
          }
          if (paragraph.trim() === '') {
            return <br key={index} />;
          }
          return (
            <p key={index} className="mb-4 text-[#555] leading-relaxed">
              {paragraph}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Blog;
