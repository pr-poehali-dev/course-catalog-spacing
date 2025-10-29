import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const courses = [
  {
    id: 1,
    title: 'Введение в квантовую механику',
    category: 'Физика',
    level: 'Продвинутый',
    duration: '12 недель',
    description: 'Фундаментальный курс о принципах квантовой физики, волновых функциях и операторах.',
    instructor: 'Проф. А.И. Смирнов',
    students: 234,
    rating: 4.8
  },
  {
    id: 2,
    title: 'История европейского искусства',
    category: 'Искусствоведение',
    level: 'Базовый',
    duration: '8 недель',
    description: 'От античности до модернизма: эволюция художественных стилей и техник.',
    instructor: 'Д-р М.В. Петрова',
    students: 567,
    rating: 4.9
  },
  {
    id: 3,
    title: 'Математический анализ I',
    category: 'Математика',
    level: 'Средний',
    duration: '16 недель',
    description: 'Пределы, производные, интегралы и их применение в реальных задачах.',
    instructor: 'Проф. И.С. Волков',
    students: 432,
    rating: 4.7
  },
  {
    id: 4,
    title: 'Современная философия',
    category: 'Философия',
    level: 'Средний',
    duration: '10 недель',
    description: 'Экзистенциализм, постмодернизм и аналитическая философия XX века.',
    instructor: 'Д-р Е.Н. Ковалева',
    students: 189,
    rating: 4.6
  },
  {
    id: 5,
    title: 'Органическая химия',
    category: 'Химия',
    level: 'Продвинутый',
    duration: '14 недель',
    description: 'Структура, свойства и реакции органических соединений.',
    instructor: 'Проф. Д.А. Морозов',
    students: 298,
    rating: 4.8
  },
  {
    id: 6,
    title: 'Классическая литература',
    category: 'Литература',
    level: 'Базовый',
    duration: '12 недель',
    description: 'Анализ произведений русской и мировой классики XIX века.',
    instructor: 'Д-р О.П. Лебедева',
    students: 445,
    rating: 4.9
  }
];

const categories = ['Все', 'Физика', 'Математика', 'Искусствоведение', 'Философия', 'Химия', 'Литература'];
const levels = ['Все уровни', 'Базовый', 'Средний', 'Продвинутый'];

export default function CourseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedLevel, setSelectedLevel] = useState('Все уровни');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Все уровни' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-serif font-bold text-slate-900 mb-4">
          Каталог курсов
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Исследуйте академические программы от ведущих преподавателей
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <Input
            type="text"
            placeholder="Поиск по курсам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base bg-white border-slate-300"
          />
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Категория</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-all ${
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Уровень сложности</h3>
          <div className="flex flex-wrap gap-2">
            {levels.map(level => (
              <Badge
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer transition-all ${
                  selectedLevel === level 
                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                }`}
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Card 
            key={course.id} 
            className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                  {course.category}
                </Badge>
                <div className="flex items-center gap-1 text-amber-600">
                  <Icon name="Star" size={16} className="fill-current" />
                  <span className="text-sm font-semibold">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                {course.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {course.description}
              </p>
            </div>

            <div className="mb-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Icon name="User" size={16} />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={16} />
                  <span>{course.students} студентов</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="border-slate-300 text-slate-700">
                  {course.level}
                </Badge>
              </div>
            </div>

            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">
              Подробнее
            </Button>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-16">
          <Icon name="BookOpen" size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">
            Курсы не найдены
          </h3>
          <p className="text-slate-600">
            Попробуйте изменить параметры фильтрации
          </p>
        </div>
      )}
    </div>
  );
}
