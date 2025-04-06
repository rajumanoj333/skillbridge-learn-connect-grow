
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                SB
              </div>
              <span className="font-display text-xl font-semibold text-gray-900">SkillBridge</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Empowering learners with skills for the future, focused on inclusion and accessibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-sm text-gray-500 hover:text-primary-600">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Skill Assessments
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Job Market Insights
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Learning Paths
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-700 tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Community Forums
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-gray-500 hover:text-primary-600">
                  Offline Learning Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-gray-500 hover:text-primary-600">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-primary-600">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-primary-600">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
