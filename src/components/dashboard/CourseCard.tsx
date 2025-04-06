
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { Progress } from '@/components/ui/progress';
import { Download, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { toast } from "@/components/ui/use-toast";

type CourseCardProps = {
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
};

const CourseCard = ({ 
  id, 
  title, 
  description, 
  image, 
  category, 
  progress, 
  duration,
  students,
  isOffline = false,
  isDownloadable = true
}: CourseCardProps) => {
  const { t } = useLanguage();
  const [downloading, setDownloading] = useState(false);
  
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      setDownloading(false);
      toast({
        title: "Course downloaded for offline use",
        description: `${title} is now available offline`,
      });
    }, 1500);
  };
  
  return (
    <Card className="card-hover h-full flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2">
          <span className="badge bg-white text-primary-700">
            {category}
          </span>
        </div>
        {isOffline && (
          <div className="absolute top-2 right-2">
            <span className="badge bg-green-100 text-green-800">
              <Download className="h-3 w-3 mr-1" />
              Offline
            </span>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{students} students</span>
          </div>
        </div>
        
        {progress !== undefined && (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Your progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-0">
        <Link to={`/courses/${id}`}>
          <Button variant="outline">View Course</Button>
        </Link>
        
        {isDownloadable && !isOffline && (
          <Button 
            variant="ghost" 
            size="sm"
            disabled={downloading}
            onClick={handleDownload}
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-1" />
            {downloading ? 'Downloading...' : t('downloadForOffline')}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
