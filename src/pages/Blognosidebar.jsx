import React from 'react';
import { FiCalendar, FiUser, FiBookmark, FiClock, FiTag } from 'react-icons/fi';

const Blognosidebar = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React in 2024",
      excerpt: "Learn the fundamentals of React and how to build modern web applications with this comprehensive beginner's guide.",
      date: "May 15, 2024",
      author: "Sarah Johnson",
      category: "React",
      readTime: "8 min read",
      image: "blog1.jpg"
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "Understand the key differences between CSS Grid and Flexbox and learn when to use each layout system.",
      date: "June 2, 2024",
      author: "Michael Chen",
      category: "CSS",
      readTime: "10 min read",
      image: "blog2.jpg"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt: "Essential techniques for creating web applications that everyone can use, regardless of ability.",
      date: "June 18, 2024",
      author: "Emma Davis",
      category: "Accessibility",
      readTime: "12 min read",
      image: "blog3.jpg"
    }
  ];

  // Sidebar data
  const popularPosts = [
    { id: 1, title: "10 JavaScript Tips You Should Know" },
    { id: 2, title: "The Future of Web Development" },
    { id: 3, title: "TypeScript vs JavaScript" }
  ];

  const categories = [
    { name: "React", count: 12, image: "react-icon.jpg" },
    { name: "JavaScript", count: 24, image: "js-icon.jpg" },
    { name: "CSS", count: 15, image: "css-icon.jpg" }
  ];

  const tags = [
    { name: "React", image: "react-tag.jpg" },
    { name: "JavaScript", image: "js-tag.jpg" },
    { name: "CSS", image: "css-tag.jpg" }
  ];

  // CSS Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '120px 60px',
      display: 'flex',
      gap: '40px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    mainContent: {
      flex: 2
    },
    blogPost: {
      marginBottom: '60px',
      display: 'flex',
      gap: '30px',
      alignItems: 'center',
      '@media (max-width: 600px)': {
        flexDirection: 'column'
      }
    },
    postImageContainer: {
      flex: 1,
      borderRadius: '8px',
      overflow: 'hidden',
      minHeight: '250px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      position: 'relative'
    },
    postImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    postContent: {
      flex: 1
    },
    postTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#2c3e50',
      lineHeight: '1.3'
    },
    postMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '15px',
      fontSize: '0.9rem',
      color: '#7f8c8d'
    },
    postCategory: {
      backgroundColor: '#e0e0e0',
      color: '#333',
      padding: '3px 8px',
      borderRadius: '4px',
      fontSize: '0.8rem'
    },
    postExcerpt: {
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '20px',
      fontSize: '1.05rem'
    },
    readMore: {
      color: '#3498db',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      ':hover': {
        color: '#2980b9',
        transform: 'translateX(5px)'
      }
    },
    sidebar: {
      flex: 1
    },
    sidebarWidget: {
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      padding: '25px',
      marginBottom: '30px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    widgetTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#2c3e50',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    popularPost: {
      display: 'flex',
      gap: '15px',
      paddingBottom: '15px',
      marginBottom: '15px',
      borderBottom: '1px solid #eee',
      ':last-child': {
        borderBottom: 'none',
        marginBottom: '0'
      }
    },
    
    popularPostContent: {
      flex: 1
    },
    popularPostTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      marginBottom: '5px',
      color: '#333'
    },
    postViews: {
      fontSize: '0.8rem',
      color: '#7f8c8d',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    categoryItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      paddingBottom: '12px',
      marginBottom: '12px',
      borderBottom: '1px solid #eee',
      ':last-child': {
        borderBottom: 'none',
        marginBottom: '0'
      }
    },
    categoryIcon: {
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      objectFit: 'cover'
    },
    categoryName: {
      fontSize: '0.95rem',
      fontWeight: '500'
    },
    categoryCount: {
      fontSize: '0.8rem',
      color: '#7f8c8d'
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    blogTag: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      backgroundColor: '#e0e0e0',
      color: '#333',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#3498db',
        color: 'white'
      }
    },
    tagIcon: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      objectFit: 'cover'
    }
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.mainContent}>
        {blogPosts.map(post => (
          <article key={post.id} style={styles.blogPost}>
            <div style={styles.postImageContainer}>
              <img 
                src={`/images/${post.image}`} 
                alt={post.title}
                style={styles.postImage}
                onError={(e) => {
                  e.target.src = '/images/default-blog.jpg';
                  e.target.alt = 'Default blog image';
                }}
              />
            </div>
            <div style={styles.postContent}>
              <h2 style={styles.postTitle}>{post.title}</h2>
              <div style={styles.postMeta}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FiCalendar size={14} /> {post.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FiUser size={14} /> {post.author}
                </span>
                <span style={styles.postCategory}>{post.category}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FiClock size={14} /> {post.readTime}
                </span>
              </div>
              <p style={styles.postExcerpt}>{post.excerpt}</p>
              <a href={`/blog/${post.id}`} style={styles.readMore}>Read More →</a>
            </div>
          </article>
        ))}
      </main>

      {/* Sidebar */}
      <aside style={styles.sidebar}>
        {/* Popular Posts */}
        <div style={styles.sidebarWidget}>
          <h3 style={styles.widgetTitle}>
            <FiBookmark /> Popular Posts
          </h3>
          <div>
            {popularPosts.map(post => (
              <div key={post.id} style={styles.popularPost}>
               
                <div style={styles.popularPostContent}>
                  <h4 style={styles.popularPostTitle}>{post.title}</h4>
                  <div style={styles.postViews}>
                    <FiClock size={12} /> {post.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div style={styles.sidebarWidget}>
          <h3 style={styles.widgetTitle}>
            <FiTag /> Categories
          </h3>
          <div>
            {categories.map(category => (
              <div key={category.name} style={styles.categoryItem}>
                
            
                <div>
                  <div style={styles.categoryName}>{category.name}</div>
                  <div style={styles.categoryCount}>{category.count} articles</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={styles.sidebarWidget}>
          <h3 style={styles.widgetTitle}>Tags</h3>
          <div style={styles.tagsContainer}>
            {tags.map(tag => (
              <a key={tag.name} href="#" style={styles.blogTag}>
                
                {tag.name}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blognosidebar;