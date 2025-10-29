import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const achievements = [
  { id: 1, title: 'Первый курс', description: 'Завершили первый курс', icon: '🎓', unlocked: true },
  { id: 2, title: 'Марафонец', description: '30 дней подряд', icon: '🏃', unlocked: true },
  { id: 3, title: 'Отличник', description: 'Средний балл 4.8+', icon: '⭐', unlocked: true },
  { id: 4, title: 'Эрудит', description: 'Завершили 5 курсов', icon: '📚', unlocked: false },
];

const activeCourses = [
  { 
    id: 1, 
    title: 'Квантовая механика', 
    progress: 67, 
    nextLesson: 'Лекция 8: Операторы',
    instructor: 'Проф. А.И. Смирнов',
    category: 'Физика'
  },
  { 
    id: 2, 
    title: 'История европейского искусства', 
    progress: 45, 
    nextLesson: 'Модуль 4: Барокко',
    instructor: 'Д-р М.В. Петрова',
    category: 'Искусствоведение'
  },
  { 
    id: 3, 
    title: 'Математический анализ I', 
    progress: 82, 
    nextLesson: 'Практикум: Интегралы',
    instructor: 'Проф. И.С. Волков',
    category: 'Математика'
  },
];

const stats = [
  { label: 'Завершено курсов', value: '3', icon: 'GraduationCap', color: 'text-green-600' },
  { label: 'В процессе', value: '3', icon: 'BookOpen', color: 'text-blue-600' },
  { label: 'Часов обучения', value: '127', icon: 'Clock', color: 'text-purple-600' },
  { label: 'Средний балл', value: '4.7', icon: 'Star', color: 'text-amber-600' },
];

const weeklyActivity = [
  { day: 'Пн', hours: 2.5 },
  { day: 'Вт', hours: 1.8 },
  { day: 'Ср', hours: 3.2 },
  { day: 'Чт', hours: 2.1 },
  { day: 'Пт', hours: 1.5 },
  { day: 'Сб', hours: 4.0 },
  { day: 'Вс', hours: 3.5 },
];

export default function StudentProfile() {
  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));
  
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl flex items-center justify-center text-white text-4xl font-serif">
              ИС
            </div>
            <div>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">
                Иван Сергеев
              </h1>
              <p className="text-lg text-slate-600 mb-3">Студент · Факультет естественных наук</p>
              <div className="flex gap-2">
                <Badge className="bg-slate-900 text-white">3 курс</Badge>
                <Badge variant="outline" className="border-slate-300">Премиум подписка</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-12">
        {stats.map(stat => (
          <Card key={stat.label} className="p-6 bg-white border-slate-200">
            <div className={`mb-3 ${stat.color}`}>
              <Icon name={stat.icon as any} size={32} />
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm text-slate-600">{stat.label}</div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              Активные курсы
            </h2>
            <div className="space-y-4">
              {activeCourses.map(course => (
                <Card key={course.id} className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700 mb-3">
                        {course.category}
                      </Badge>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-slate-600">{course.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">{course.progress}%</div>
                      <div className="text-xs text-slate-500">прогресс</div>
                    </div>
                  </div>
                  
                  <Progress value={course.progress} className="mb-4 h-2" />
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="PlayCircle" size={16} />
                      <span>{course.nextLesson}</span>
                    </div>
                    <button className="text-sm font-semibold text-slate-900 hover:text-slate-700">
                      Продолжить →
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              Активность за неделю
            </h2>
            <Card className="p-8 bg-white border-slate-200">
              <div className="flex items-end justify-between gap-4 h-48">
                {weeklyActivity.map(day => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-3">
                    <div className="w-full flex flex-col justify-end flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-slate-800 to-slate-600 rounded-t-lg transition-all hover:opacity-80 relative group"
                        style={{ height: `${(day.hours / maxHours) * 100}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {day.hours}ч
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-slate-600">{day.day}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Всего за неделю</span>
                  <span className="font-bold text-slate-900">
                    {weeklyActivity.reduce((sum, d) => sum + d.hours, 0).toFixed(1)} часов
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
              Достижения
            </h2>
            <div className="space-y-3">
              {achievements.map(achievement => (
                <Card 
                  key={achievement.id} 
                  className={`p-4 border-slate-200 ${
                    achievement.unlocked 
                      ? 'bg-white' 
                      : 'bg-slate-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl ${achievement.unlocked ? '' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.unlocked && (
                      <Icon name="CheckCircle2" className="text-green-600" size={20} />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-600 text-white border-0">
            <h3 className="text-xl font-serif font-bold mb-2">
              Премиум подписка
            </h3>
            <p className="text-slate-200 text-sm mb-4">
              Неограниченный доступ ко всем курсам и материалам
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-500">
              <span className="text-sm">Активна до</span>
              <span className="font-bold">24.12.2025</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
