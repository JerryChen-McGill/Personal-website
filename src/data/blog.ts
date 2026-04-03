export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  coverImage?: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-in-math-education",
    title: "How Generative AI is Transforming Math Education",
    date: "2025-03-15",
    excerpt: "Exploring how generative AI tools are reshaping how students learn and practice mathematics — from personalized tutoring to creative problem-solving.",
    tags: ["AI", "Education", "Mathematics"],
    coverImage: "https://picsum.photos/seed/aimath/800/400",
    published: true,
    content: `Generative AI is rapidly changing the landscape of mathematics education. As a PhD student researching this intersection, I've observed several key trends:

## Personalized Learning Paths

AI can adapt to individual student needs, providing customized explanations and practice problems that target specific areas of difficulty.

## Creative Problem Solving

Rather than replacing mathematical thinking, generative AI can enhance it by offering multiple approaches to the same problem, encouraging students to explore different strategies.

## Challenges and Considerations

However, we must be mindful of potential pitfalls: over-reliance on AI tools, the importance of building foundational skills, and ensuring equitable access to these technologies.

My current research focuses on evaluating the effectiveness of these tools in real classroom settings, with a particular emphasis on K-12 mathematics education.`
  },
  {
    slug: "timss-2023-insights",
    title: "What TIMSS 2023 Tells Us About Math Attitudes Across Countries",
    date: "2025-01-20",
    excerpt: "Key findings from our comparative analysis of student attitudes toward mathematics in the US, Canada, and Singapore.",
    tags: ["Research", "TIMSS", "Mathematics"],
    coverImage: "https://picsum.photos/seed/timss2023/800/400",
    published: true,
    content: `Our analysis of TIMSS 2023 data reveals fascinating differences in how students across three countries perceive mathematics:

## Key Findings

- **Singapore** students show the highest confidence levels, correlated with structured practice approaches
- **Canadian** students demonstrate strong growth mindset attitudes toward math
- **US** students show varied attitudes that correlate strongly with socioeconomic factors

## Implications for Teaching

These findings suggest that cultural attitudes and teaching approaches significantly influence how students perceive mathematics. Understanding these differences can help educators design more effective interventions.

This research was presented at the Poster Award Competition, ECP-ISG, McGill University in 2025.`
  },
  {
    slug: "building-educational-products",
    title: "Lessons from Building Educational Technology Products",
    date: "2024-12-10",
    excerpt: "Reflections on the process of designing and developing tools that genuinely help students learn better.",
    tags: ["EdTech", "Product Design", "UX"],
    coverImage: "https://picsum.photos/seed/edtech/800/400",
    published: true,
    content: `Over the past few years, I've worked on several educational technology products. Here are some key lessons I've learned:

## Start with the Learner

The most successful educational products start with a deep understanding of the learner's needs, not with the technology itself.

## Iterate Based on Real Feedback

User testing with actual students and teachers is invaluable. What seems intuitive to developers often isn't to learners.

## Balance Engagement with Learning

Gamification and engagement are important, but they should serve — not distract from — the learning objectives.

## Build for Accessibility

Educational tools must be accessible to all learners, regardless of their background, ability, or access to technology.`
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPublishedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.published);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  blogPosts.filter(p => p.published).forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags);
};
