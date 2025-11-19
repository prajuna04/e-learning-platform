import React from 'react';
import './AllCourses.css';

function Coursestitle() {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Python Programming",
      instructor: "Dr. Sarah Johnson",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      price: "$99",
      thumbnail: "public\images\intro to python proggramming.jpg"
    },
    {
      id: 2,
      title: "Advanced Excel for Data Analysis",
      instructor: "Michael Chen",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 890,
      price: "$79",
      thumbnail: "public\images\exforda.jpg"
    },
    {
      id: 3,
      title: "Creative Writing Workshop",
      instructor: "Emily Wilson",
      duration: "8 weeks",
      level: "All Levels",
      rating: 4.9,
      students: 650,
      price: "$59",
      thumbnail: "public\images\cww.jpg"
    },
    {
      id: 4,
      title: "Project Management Essentials",
      instructor: "Robert Davis",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 2100,
      price: "$109",
      thumbnail: "public/images/Pme.jpg"
    },
    {
      id: 5,
      title: "SEO Optimization Techniques",
      instructor: "Lisa Thompson",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 980,
      price: "$89",
      thumbnail: "public/images/seo.jpg"
    },
    {
      id: 6,
      title: "Web Development Bootcamp",
      instructor: "Alex Rodriguez",
      duration: "10 weeks",
      level: "Beginner",
      rating: 4.9,
      students: 3200,
      price: "$149",
      thumbnail: "https://via.placeholder.com/300x200?text=Web+Dev"
    }
  ];

  return (
    <div className="all-courses-page">
      <header className="courses-header">
        <h1>All Courses</h1>
        <div className="search-filter">
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="search-input"
          />
          <select className="filter-select">
            <option value="">All Categories</option>
            <option value="programming">Programming</option>
            <option value="business">Business</option>
            <option value="creative">Creative</option>
          </select>
          <select className="filter-select">
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </header>

      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-thumbnail">
              <img src={course.thumbnail} alt={course.title} />
              <span className="price-tag">{course.price}</span>
            </div>
            <div className="course-details">
              <h3>{course.title}</h3>
              <p className="instructor">By {course.instructor}</p>
              <div className="meta-info">
                <span className="duration">{course.duration}</span>
                <span className="level">{course.level}</span>
              </div>
              <div className="rating-enrollment">
                <span className="rating">⭐ {course.rating} ({course.students})</span>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn">Previous</button>
        <span className="page-numbers">
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
        </span>
        <button className="page-btn">Next</button>
      </div>
    </div>
  );
}

export default Coursestitle;