
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import UserProfile from '../components/profile/UserProfile';

// Sample user data
const userData = {
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  bio: 'Passionate learner with interests in web development and digital skills. Working towards building a career in technology.',
  completedCourses: 5,
  inProgressCourses: 2,
  certificates: [
    {
      id: 'cert1',
      name: 'Web Development Fundamentals',
      issuer: 'SkillBridge',
      date: 'March 2023',
      image: '/certificate-web-dev.jpg'
    },
    {
      id: 'cert2',
      name: 'Financial Literacy',
      issuer: 'SkillBridge',
      date: 'May 2023',
      image: '/certificate-finance.jpg'
    }
  ],
  skills: [
    { name: 'HTML & CSS', level: 80 },
    { name: 'JavaScript', level: 60 },
    { name: 'Financial Planning', level: 75 },
    { name: 'Digital Marketing', level: 45 },
    { name: 'Communication', level: 85 }
  ]
};

const Profile = () => {
  useEffect(() => {
    document.title = "SkillBridge - Profile";
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <UserProfile user={userData} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
