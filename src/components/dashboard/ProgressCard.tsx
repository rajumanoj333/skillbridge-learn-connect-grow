
import { useLanguage } from '../../hooks/useLanguage';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ProgressCardProps = {
  title: string;
  value: number;
  total: number;
  color: string;
  icon?: React.ReactNode;
};

const ProgressCard = ({ title, value, total, color, icon }: ProgressCardProps) => {
  const { t } = useLanguage();
  const percentage = Math.round((value / total) * 100);
  
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium text-gray-700 flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center">
          <div className="w-16 h-16 mr-4">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: '1.5rem',
                pathColor: color,
                textColor: '#374151',
                trailColor: '#F3F4F6',
              })}
            />
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-800">{value}/{total}</p>
            <p className="text-sm text-gray-500">
              {percentage < 100 ? 'Keep going!' : 'Completed!'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
