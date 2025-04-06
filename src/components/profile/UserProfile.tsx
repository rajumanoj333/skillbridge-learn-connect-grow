
import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Download, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Skill = {
  name: string;
  level: number;
};

type Certificate = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
};

type UserProfileProps = {
  user: {
    name: string;
    avatar: string;
    bio: string;
    completedCourses: number;
    inProgressCourses: number;
    certificates: Certificate[];
    skills: Skill[];
  };
};

const UserProfile = ({ user }: UserProfileProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-600">{user.bio}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user.completedCourses} Courses Completed
                </div>
                <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user.certificates.length} Certifications
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {user.inProgressCourses} In Progress
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="skills">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="skills">{t('yourSkills')}</TabsTrigger>
          <TabsTrigger value="certificates">{t('certificates')}</TabsTrigger>
          <TabsTrigger value="achievements">{t('achievements')}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skills" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>{t('yourSkills')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certificates" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>{t('certificates')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.certificates.map((certificate) => (
                  <Card key={certificate.id} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="rounded-md bg-primary-50 p-2">
                          <Award className="h-8 w-8 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{certificate.name}</h4>
                          <p className="text-sm text-gray-500">{certificate.issuer} • {certificate.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1" />
                          <span className="sr-only md:not-sr-only md:inline-block">Download</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>{t('achievements')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                  <Award className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Complete more courses to unlock achievements</h3>
                <p className="text-gray-500 mb-6">Your achievements will appear here as you progress through courses</p>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
