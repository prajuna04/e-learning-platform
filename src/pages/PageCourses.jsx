import React from 'react';
import DynamicCourseNavigation from './components/DynamicCourseNavigation';

function PageCourses() {
  const navItems = [
    { title: 'All Courses', link: '/all-courses' },
    { title: 'Single Course', link: '/single-course' },
    { title: 'Our Pricing', link: '/pricing' },
    { title: 'All Instructors', link: '/instructors' },
    { title: 'Single Instructors', link: '/single-instructor' }
  ];

  const courses = [
    { title: 'Introduction to Python Programming', link: '/python' },
    { title: 'Advanced Excel for Data Analysis', link: '/excel' },
    { title: 'Creative Writing Workshop', link: '/writing' },
    { title: 'Project Management Essentials', link: '/management' },
    { title: 'SEO Optimization Techniques', link: '/seo' }
  ];

  return (
    <div className="app">
      <DynamicCourseNavigation navItems={navItems} courses={courses} />
    </div>
  );
}

export default PageCourses;