
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type AchievementBadgeProps = {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  isLocked?: boolean;
  progress?: number;
};

const AchievementBadge = ({ 
  title, 
  icon, 
  color, 
  description, 
  isLocked = false,
  progress
}: AchievementBadgeProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className={`w-20 h-20 flex flex-col items-center justify-center ${isLocked ? 'opacity-50' : 'card-hover'}`}>
            <CardContent className="p-2 flex flex-col items-center">
              <div 
                className={`h-10 w-10 rounded-full flex items-center justify-center mb-1 ${isLocked ? 'bg-gray-200' : color}`}
              >
                {icon}
              </div>
              <p className="text-xs text-center font-medium truncate w-full">
                {title}
              </p>
              {progress !== undefined && (
                <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                  <div 
                    className="bg-primary-600 h-1 rounded-full" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-xs">
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
            {isLocked && <p className="text-sm text-primary-600 mt-1">Complete more courses to unlock</p>}
            {progress !== undefined && <p className="text-sm text-primary-600 mt-1">{progress}% progress</p>}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AchievementBadge;
