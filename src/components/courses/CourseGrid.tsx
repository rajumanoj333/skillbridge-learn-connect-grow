
import { useState } from 'react';
import CourseCard from '../dashboard/CourseCard';
import { Input } from '@/components/ui/input';
import { useLanguage } from '../../hooks/useLanguage';
import { Search } from 'lucide-react';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  progress?: number;
  duration: string;
  students: number;
  isOffline?: boolean;
  isDownloadable?: boolean;
  language?: string;
  level?: string;
};

type CourseGridProps = {
  courses: Course[];
  filters?: {
    category?: string;
    level?: string;
    language?: string;
    offlineOnly?: boolean;
  };
};

const CourseGrid = ({ courses, filters }: CourseGridProps) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    // Search filter
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !course.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (filters?.category && course.category !== filters.category) {
      return false;
    }
    
    // Level filter
    if (filters?.level && course.level !== filters.level) {
      return false;
    }
    
    // Language filter
    if (filters?.language && course.language !== filters.language) {
      return false;
    }
    
    // Offline only filter
    if (filters?.offlineOnly && !course.isOffline) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div>
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <Input 
          type="text" 
          placeholder={t('searchCourses')}
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found. Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
