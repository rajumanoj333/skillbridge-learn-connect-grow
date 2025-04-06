import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CourseGrid from '../components/courses/CourseGrid';
import CourseFilter from '../components/courses/CourseFilter';
import { useLanguage } from '../hooks/useLanguage';

// Sample data
const coursesData = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern web applications.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Development',
    progress: 65,
    duration: '8 weeks',
    students: 1458,
    isOffline: true,
    language: 'en',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Financial Literacy',
    description: 'Master personal finance basics and build a strong foundation for financial success.',
    image: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Finance',
    progress: 30,
    duration: '4 weeks',
    students: 952,
    isOffline: false,
    language: 'hi',
    level: 'beginner'
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Create mobile applications for Android and iOS using React Native.',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Development',
    duration: '10 weeks',
    students: 2145,
    isOffline: false,
    language: 'en',
    level: 'intermediate'
  },
  {
    id: '4',
    title: 'Rural Entrepreneurship',
    description: 'Learn how to start and grow businesses in rural areas with limited resources.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW50cmVwcmVuZXVyc2hpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Business',
    duration: '6 weeks',
    students: 1238,
    isOffline: false,
    language: 'hi',
    level: 'beginner'
  },
  {
    id: '5',
    title: 'Sustainable Agriculture',
    description: 'Discover modern techniques for sustainable farming and agricultural development.',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Agriculture',
    duration: '8 weeks',
    students: 1876,
    isOffline: true,
    language: 'ta',
    level: 'intermediate'
  },
  {
    id: '6',
    title: 'Digital Marketing Skills',
    description: 'Learn social media marketing, SEO, content creation, and online advertising strategies.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Marketing',
    duration: '6 weeks',
    students: 2543,
    isOffline: false,
    language: 'en',
    level: 'beginner'
  },
  {
    id: '7',
    title: 'Healthcare Fundamentals',
    description: 'Introduction to healthcare delivery, primary care practices, and basic medical terminology.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Healthcare',
    duration: '8 weeks',
    students: 1657,
    isOffline: true,
    language: 'te',
    level: 'beginner'
  },
  {
    id: '8',
    title: 'Advanced Data Science',
    description: 'Master machine learning algorithms, data visualization, and predictive modeling techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Data Science',
    duration: '12 weeks',
    students: 1245,
    isOffline: false,
    language: 'en',
    level: 'advanced'
  },
  {
    id: '9',
    title: 'Vocational Electrician Training',
    description: 'Practical electrical installation, repair, and maintenance techniques for residential and commercial settings.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Vocational',
    duration: '10 weeks',
    students: 942,
    isOffline: true,
    language: 'hi',
    level: 'intermediate'
  }
];

const categories = [
  { id: 'Development', label: 'Development', count: 2 },
  { id: 'Finance', label: 'Finance', count: 1 },
  { id: 'Business', label: 'Business', count: 1 },
  { id: 'Agriculture', label: 'Agriculture', count: 1 },
  { id: 'Marketing', label: 'Marketing', count: 1 },
  { id: 'Healthcare', label: 'Healthcare', count: 1 },
  { id: 'Data Science', label: 'Data Science', count: 1 },
  { id: 'Vocational', label: 'Vocational', count: 1 }
];

const levels = [
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
];

const languages = [
  { id: 'en', label: 'English' },
  { id: 'hi', label: 'Hindi' },
  { id: 'ta', label: 'Tamil' },
  { id: 'te', label: 'Telugu' }
];

const Courses = () => {
  const { t } = useLanguage();
  const [selectedFilters, setSelectedFilters] = useState({
    category: undefined,
    level: undefined,
    language: undefined,
    offlineOnly: false
  });

  useEffect(() => {
    document.title = "SkillBridge - Courses";
  }, []);
  
  const handleFilterChange = (name: string, value: string | boolean) => {
    setSelectedFilters((prev) => {
      // If we're clicking the same filter that's already selected, unselect it
      if (name !== 'offlineOnly' && prev[name as keyof typeof prev] === value) {
        return {
          ...prev,
          [name]: undefined
        };
      }
      // Otherwise set the new filter value
      return {
        ...prev,
        [name]: value
      };
    });
  };
  
  const handleClearFilters = () => {
    setSelectedFilters({
      category: undefined,
      level: undefined,
      language: undefined,
      offlineOnly: false
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
            <p className="text-gray-600">Discover skills that match local job opportunities and your interests</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-8">
                <CourseFilter 
                  categories={categories}
                  levels={levels}
                  languages={languages}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <CourseGrid courses={coursesData} filters={selectedFilters} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
