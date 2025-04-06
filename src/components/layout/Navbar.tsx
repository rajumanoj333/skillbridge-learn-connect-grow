
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Menu, X, Globe, User, BookOpen, Home, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage, availableLanguages } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (code: string) => {
    setLanguage(code as any);
  };

  const isOfflineAvailable = true; // This would come from a context/state in a real app

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                  SB
                </div>
                <span className="font-display text-xl font-semibold text-gray-900">SkillBridge</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-primary-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <Home className="mr-1 h-4 w-4" />
                {t('dashboard')}
              </Link>
              <Link to="/courses" className="border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <BookOpen className="mr-1 h-4 w-4" />
                {t('courses')}
              </Link>
              <Link to="/profile" className="border-transparent text-gray-500 hover:border-primary-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                <User className="mr-1 h-4 w-4" />
                {t('profile')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {isOfflineAvailable && (
              <div className="offline-ready">
                <Download className="h-4 w-4 mr-1" />
                <span>{t('offline')}</span>
              </div>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  <span>{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {availableLanguages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={language === lang.code ? "bg-primary-50" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-primary-600 hover:bg-primary-700 text-white">
              <User className="h-4 w-4 mr-1" />
              {t('profile')}
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              {t('dashboard')}
            </Link>
            <Link to="/courses" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              {t('courses')}
            </Link>
            <Link to="/profile" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-primary-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              {t('profile')}
            </Link>
            <div className="border-transparent pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              <div className="flex items-center justify-between">
                <span>{t('language')}</span>
                <div className="flex space-x-2">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`px-2 py-1 rounded text-sm ${language === lang.code ? 'bg-primary-100 text-primary-700' : 'text-gray-500'}`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
