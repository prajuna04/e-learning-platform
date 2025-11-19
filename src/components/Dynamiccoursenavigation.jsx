import React from 'react';
import './CourseNavigation.css';

function DynamicCourseNavigation({ navItems, courses }) {
  return (
    <div className="course-navigation">
      {/* Main Navigation Links */}
      <div className="nav-section">
        <h3 className="nav-title">Course Menu</h3>
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Course Listing */}
      <div className="course-section">
        <h3 className="course-title">Popular Courses</h3>
        <ul className="course-list">
          {courses.map((course, index) => (
            <li key={index}>
              <a href={course.link}>{course.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DynamicCourseNavigation;