
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Filter, X } from 'lucide-react';

type FilterOption = {
  id: string;
  label: string;
  count?: number;
};

type CourseFilterProps = {
  categories: FilterOption[];
  levels: FilterOption[];
  languages: FilterOption[];
  selectedFilters: {
    category?: string;
    level?: string;
    language?: string;
    offlineOnly?: boolean;
  };
  onFilterChange: (name: string, value: string | boolean) => void;
  onClearFilters: () => void;
};

const CourseFilter = ({
  categories,
  levels,
  languages,
  selectedFilters,
  onFilterChange,
  onClearFilters
}: CourseFilterProps) => {
  const { t } = useLanguage();
  
  const hasFilters = Object.values(selectedFilters).some(value => value !== undefined);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          {t('filterBy')}
        </h3>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="flex items-center text-sm">
            <X className="h-4 w-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>
      
      <Accordion type="multiple" defaultValue={["category", "level", "language", "availability"]}>
        <AccordionItem value="category">
          <AccordionTrigger className="text-sm font-medium py-2">{t('category')}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedFilters.category === category.id}
                    onCheckedChange={() => onFilterChange('category', category.id)}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="flex justify-between w-full text-sm cursor-pointer"
                  >
                    <span>{category.label}</span>
                    {category.count !== undefined && (
                      <span className="text-gray-500 text-xs">{category.count}</span>
                    )}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="level">
          <AccordionTrigger className="text-sm font-medium py-2">{t('skillLevel')}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-2">
              {levels.map((level) => (
                <div key={level.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`level-${level.id}`}
                    checked={selectedFilters.level === level.id}
                    onCheckedChange={() => onFilterChange('level', level.id)}
                  />
                  <Label
                    htmlFor={`level-${level.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {level.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="language">
          <AccordionTrigger className="text-sm font-medium py-2">{t('language')}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-2">
              {languages.map((language) => (
                <div key={language.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`language-${language.id}`}
                    checked={selectedFilters.language === language.id}
                    onCheckedChange={() => onFilterChange('language', language.id)}
                  />
                  <Label
                    htmlFor={`language-${language.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {language.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="availability">
          <AccordionTrigger className="text-sm font-medium py-2">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="offline-only"
                  checked={selectedFilters.offlineOnly}
                  onCheckedChange={() => onFilterChange('offlineOnly', !selectedFilters.offlineOnly)}
                />
                <Label
                  htmlFor="offline-only"
                  className="flex items-center text-sm cursor-pointer"
                >
                  <Download className="h-3 w-3 mr-1" />
                  Offline Available
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseFilter;
