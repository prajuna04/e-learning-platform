import React from 'react';

const Blogleftsidebar = () => {
  // Sample data
  const content = {
    title: "Modern Web Development",
    description: "Learn the latest techniques in responsive design, performance optimization, and accessibility to build better websites.",
    features: [
      "React 18 fundamentals",
      "CSS Grid and Flexbox",
      "Performance optimization",
      "Accessibility best practices"
    ],
    image: "web.jpg"
  };

  // CSS Styles
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      display: 'flex',
      flexDirection: 'row-reverse', // This flips the order to image on right
      alignItems: 'center',
      gap: '60px',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '30px'
      }
    },
    contentSection: {
      flex: 1,
      padding: '20px'
    },
    imageSection: {
      flex: 1,
      position: 'relative',
      minHeight: '400px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
      ':hover': {
        transform: 'scale(1.03)'
      }
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '20px',
      lineHeight: '1.5'
    },
    description: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '30px'
    },
    featuresList: {
      listStyleType: 'none',
      padding: 0,
      marginBottom: '30px'
    },
    featureItem: {
      padding: '12px 0',
      borderBottom: '1px solid #eee',
      display: 'flex',
      alignItems: 'center',
      ':before': {
        content: '"✓"',
        color: '#3498db',
        marginRight: '10px',
        fontWeight: 'bold'
      }
    },
    ctaButton: {
      display: 'inline-block',
      padding: '12px 30px',
      backgroundColor: '#3498db',
      color: 'white',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: '#2980b9',
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(41, 128, 185, 0.3)'
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Image on the Right Side */}
      <div style={styles.imageSection}>
        <img 
          src={`/images/${content.image}`}
          alt={content.title}
          style={styles.image}
          onError={(e) => {
            e.target.src = '/images/default-image.jpg';
            e.target.alt = 'Default content image';
          }}
        />
      </div>

      {/* Content on the Left Side */}
      <div style={styles.contentSection}>
        <h1 style={styles.title}>{content.title}</h1>
        <p style={styles.description}>{content.description}</p>
        
        <ul style={styles.featuresList}>
          {content.features.map((feature, index) => (
            <li key={index} style={styles.featureItem}>{feature}</li>
          ))}
        </ul>
        
        <a href="#" style={styles.ctaButton}>Learn More</a>
      </div>
    </div>
  );
};

export default Blogleftsidebar;