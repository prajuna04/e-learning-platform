import React from 'react';

const Blogrightsidebar = () => {
  // Sample data
  const featuredPost = {
    title: "Phase Three: Private market",
    date: "MAY 16, 2024",
    category: "ARTIFICIAL INTELLIGENCE",
    excerpt: "Exploring the latest developments in private market AI solutions and their impact on various industries.",
    image: "AI.jpg"
  };

  const categories = [
    "Artificial Intelligence",
    "Cybersecurity",
    "Online Learning",
    "Tech News",
    "Uncategorized"
  ];

  const recentPosts = [
    { id: 1, title: "Prevalence Chart" },
    { id: 2, title: "Solutions" },
    { id: 3, title: "Recent posts" }
  ];

  // Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    featuredPost: {
      display: 'flex',
      gap: '40px',
      marginBottom: '40px',
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    featuredImage: {
      flex: 1,
      borderRadius: '8px',
      overflow: 'hidden',
      minHeight: '300px',
      backgroundColor: '#f5f5f5'
    },
    featuredImageImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    featuredContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    categoryTag: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3498db',
      textTransform: 'uppercase',
      marginBottom: '10px'
    },
    featuredTitle: {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#2c3e50',
      lineHeight: '1.3'
    },
    featuredDate: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '15px'
    },
    featuredExcerpt: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '20px'
    },
    readMore: {
      color: '#3498db',
      fontWeight: '600',
      textDecoration: 'none',
      display: 'inline-block',
      ':hover': {
        textDecoration: 'underline'
      }
    },
    sidebar: {
      display: 'flex',
      gap: '40px',
      '@media (max-width: 768px)': {
        flexDirection: 'column'
      }
    },
    searchWidget: {
      flex: 1
    },
    categoriesWidget: {
      flex: 1
    },
    searchTitle: {
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#2c3e50'
    },
    searchInput: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '16px',
      marginBottom: '30px'
    },
    widgetTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#2c3e50'
    },
    categoryList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    categoryItem: {
      padding: '10px 0',
      borderBottom: '1px solid #eee'
    },
    categoryLink: {
      color: '#333',
      textDecoration: 'none',
      ':hover': {
        color: '#3498db'
      }
    },
    recentPostsTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '30px 0 15px',
      color: '#2c3e50',
      textTransform: 'uppercase'
    },
    recentPostsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    recentPostItem: {
      padding: '8px 0',
      borderBottom: '1px solid #eee'
    },
    recentPostLink: {
      color: '#333',
      textDecoration: 'none',
      ':hover': {
        color: '#3498db'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Featured Post with Photo on Left */}
      <div style={styles.featuredPost}>
        <div style={styles.featuredImage}>
          <img 
            src={`/images/${featuredPost.image}`} 
            alt={featuredPost.title}
            style={styles.featuredImageImg}
            onError={(e) => {
              e.target.src = '/images/default-blog.jpg';
              e.target.alt = 'Default blog image';
            }}
          />
        </div>
        <div style={styles.featuredContent}>
          <div style={styles.categoryTag}>{featuredPost.category}</div>
          <h2 style={styles.featuredTitle}>{featuredPost.title}</h2>
          <div style={styles.featuredDate}>{featuredPost.date}</div>
          <p style={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
          <a href="#" style={styles.readMore}>Read More →</a>
        </div>
      </div>

      {/* Search and Categories Side by Side */}
      <div style={styles.sidebar}>
        <div style={styles.searchWidget}>
          <h2 style={styles.searchTitle}>Search</h2>
          <input 
            type="text" 
            placeholder="Search ..." 
            style={styles.searchInput}
          />
        </div>

        <div style={styles.categoriesWidget}>
          <h3 style={styles.widgetTitle}>All Categories</h3>
          <ul style={styles.categoryList}>
            {categories.map((category, index) => (
              <li key={index} style={styles.categoryItem}>
                <a href="#" style={styles.categoryLink}>- {category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts Section */}
      <h4 style={styles.recentPostsTitle}>Recent Posts</h4>
      <ul style={styles.recentPostsList}>
        {recentPosts.map(post => (
          <li key={post.id} style={styles.recentPostItem}>
            <a href="#" style={styles.recentPostLink}>- {post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogrightsidebar;