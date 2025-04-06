
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { useLanguage } from '../hooks/useLanguage';
import ProgressCard from '../components/dashboard/ProgressCard';
import CourseCard from '../components/dashboard/CourseCard';
import AchievementBadge from '../components/dashboard/AchievementBadge';
import { Book, Award, Clock, TrendingUp, Target, Zap, Star, Trophy, Box } from 'lucide-react';

// Sample data
const coursesInProgress = [
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
    isDownloadable: false
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
    isDownloadable: true
  }
];

const recommendedCourses = [
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Create mobile applications for Android and iOS using React Native.',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Development',
    duration: '10 weeks',
    students: 2145,
    isOffline: false,
    isDownloadable: true
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
    isDownloadable: true
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
    isDownloadable: false
  }
];

const achievements = [
  {
    title: 'First Course',
    icon: <Zap className="h-5 w-5 text-white" />,
    color: 'bg-blue-500',
    description: 'Completed your first course',
    isLocked: false
  },
  {
    title: 'Quick Learner',
    icon: <Star className="h-5 w-5 text-white" />,
    color: 'bg-orange-500',
    description: 'Completed a course in record time',
    isLocked: false
  },
  {
    title: 'Skill Master',
    icon: <Trophy className="h-5 w-5 text-white" />,
    color: 'bg-purple-500',
    description: 'Achieved excellence in skill assessment',
    isLocked: true
  },
  {
    title: 'Offline Pro',
    icon: <Box className="h-5 w-5 text-white" />,
    color: 'bg-green-500',
    description: 'Completed 5 courses in offline mode',
    isLocked: true,
    progress: 40
  }
];

const Index = () => {
  const { t } = useLanguage();
  
  // Set document title on load
  useEffect(() => {
    document.title = "SkillBridge - Dashboard";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome section */}
          <section className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Learner!</h1>
            <p className="text-gray-600">Continue learning and building your skills for the future.</p>
          </section>
          
          {/* Progress stats */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">{t('yourProgress')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProgressCard 
                title={t('completedCourses')} 
                value={5} 
                total={10} 
                color="#2563EB" 
                icon={<Book className="h-4 w-4" />}
              />
              <ProgressCard 
                title={t('inProgress')} 
                value={2} 
                total={2} 
                color="#F97316" 
                icon={<Clock className="h-4 w-4" />}
              />
              <ProgressCard 
                title={t('achievements')} 
                value={2} 
                total={10} 
                color="#10B981" 
                icon={<Award className="h-4 w-4" />}
              />
            </div>
          </section>
          
          {/* Courses in progress */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t('inProgress')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coursesInProgress.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
          
          {/* Achievements */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t('achievements')}</h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge
                  key={index}
                  title={achievement.title}
                  icon={achievement.icon}
                  color={achievement.color}
                  description={achievement.description}
                  isLocked={achievement.isLocked}
                  progress={achievement.progress}
                />
              ))}
            </div>
          </section>
          
          {/* Recommended courses */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{t('recommendedCourses')}</h2>
              <div className="flex items-center text-sm text-primary-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>Based on your skills and interests</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>
          
          {/* Job market insights */}
          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Job Market Insights</h2>
            </div>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary-600" />
                    In-Demand Skills in Your Region
                  </h3>
                  <p className="text-gray-600 mb-4">
                    These skills are highly sought after by employers in your area.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="skill-pill">Mobile Development</span>
                    <span className="skill-pill">Digital Marketing</span>
                    <span className="skill-pill">Data Analysis</span>
                    <span className="skill-pill">Sustainable Agriculture</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h4 className="font-medium mb-2">Your Skill Match</h4>
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-bold mr-4">
                        65%
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">
                          You match 65% of local job requirements
                        </p>
                        <p className="text-xs text-primary-600">
                          Complete recommended courses to improve your match
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
