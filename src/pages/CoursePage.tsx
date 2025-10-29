import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const modules = [
  {
    id: 1,
    title: 'Введение в органическую химию',
    duration: '2 недели',
    lessons: [
      { id: 1, title: 'История и предмет органической химии', duration: '45 мин', type: 'video', completed: true },
      { id: 2, title: 'Теория строения органических соединений', duration: '60 мин', type: 'video', completed: true },
      { id: 3, title: 'Классификация органических соединений', duration: '50 мин', type: 'video', completed: true },
      { id: 4, title: 'Практикум: Номенклатура', duration: '30 мин', type: 'practice', completed: false },
    ]
  },
  {
    id: 2,
    title: 'Алканы и циклоалканы',
    duration: '3 недели',
    lessons: [
      { id: 5, title: 'Строение и изомерия алканов', duration: '55 мин', type: 'video', completed: false },
      { id: 6, title: 'Физические и химические свойства', duration: '65 мин', type: 'video', completed: false },
      { id: 7, title: 'Циклоалканы и их конформации', duration: '50 мин', type: 'video', completed: false },
      { id: 8, title: 'Лабораторная работа: Синтез алканов', duration: '90 мин', type: 'lab', completed: false },
      { id: 9, title: 'Тест: Алканы', duration: '20 мин', type: 'test', completed: false },
    ]
  },
  {
    id: 3,
    title: 'Алкены и алкины',
    duration: '3 недели',
    lessons: [
      { id: 10, title: 'Ненасыщенные углеводороды', duration: '60 мин', type: 'video', completed: false },
      { id: 11, title: 'Механизмы реакций присоединения', duration: '70 мин', type: 'video', completed: false },
      { id: 12, title: 'Правило Марковникова', duration: '45 мин', type: 'video', completed: false },
      { id: 13, title: 'Практикум: Реакции алкенов', duration: '40 мин', type: 'practice', completed: false },
    ]
  },
  {
    id: 4,
    title: 'Ароматические соединения',
    duration: '3 недели',
    lessons: [
      { id: 14, title: 'Бензол и ароматичность', duration: '55 мин', type: 'video', completed: false },
      { id: 15, title: 'Электрофильное замещение', duration: '65 мин', type: 'video', completed: false },
      { id: 16, title: 'Ориентирующее действие заместителей', duration: '60 мин', type: 'video', completed: false },
    ]
  },
  {
    id: 5,
    title: 'Спирты и фенолы',
    duration: '3 недели',
    lessons: [
      { id: 17, title: 'Классификация и номенклатура', duration: '50 мин', type: 'video', completed: false },
      { id: 18, title: 'Химические свойства спиртов', duration: '60 мин', type: 'video', completed: false },
      { id: 19, title: 'Фенолы и их особенности', duration: '55 мин', type: 'video', completed: false },
    ]
  }
];

const reviews = [
  {
    id: 1,
    author: 'Мария Васильева',
    rating: 5,
    date: '15 октября 2024',
    text: 'Превосходный курс! Профессор Морозов объясняет сложные механизмы реакций очень доступно. Особенно понравились лабораторные работы.'
  },
  {
    id: 2,
    author: 'Алексей Петров',
    rating: 5,
    date: '8 октября 2024',
    text: 'Один из лучших курсов по органической химии. Структурированная программа, качественные материалы и практические задания.'
  },
  {
    id: 3,
    author: 'Екатерина Смирнова',
    rating: 4,
    date: '2 октября 2024',
    text: 'Отличный курс для углубленного изучения. Рекомендую иметь базовые знания общей химии перед началом.'
  }
];

export default function CoursePage() {
  const [enrolling, setEnrolling] = useState(false);
  
  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0);
  const completedLessons = modules.reduce((sum, m) => sum + m.lessons.filter(l => l.completed).length, 0);
  const progress = Math.round((completedLessons / totalLessons) * 100);

  const getLessonIcon = (type: string) => {
    switch(type) {
      case 'video': return 'Play';
      case 'practice': return 'PenTool';
      case 'lab': return 'FlaskConical';
      case 'test': return 'ClipboardCheck';
      default: return 'BookOpen';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-slate-900 text-white">Химия</Badge>
          <Badge variant="outline" className="border-slate-300">Продвинутый</Badge>
          <div className="flex items-center gap-1 text-amber-600 ml-2">
            <Icon name="Star" size={16} className="fill-current" />
            <span className="text-sm font-semibold">4.8</span>
            <span className="text-slate-500 text-sm ml-1">(298 отзывов)</span>
          </div>
        </div>

        <h1 className="text-5xl font-serif font-bold text-slate-900 mb-4">
          Органическая химия
        </h1>
        
        <p className="text-xl text-slate-600 mb-6 max-w-3xl leading-relaxed">
          Углубленное изучение структуры, свойств и реакций органических соединений. 
          От основ номенклатуры до сложных механизмов синтеза.
        </p>

        <div className="flex items-center gap-8 mb-8">
          <div className="flex items-center gap-2 text-slate-600">
            <Icon name="User" size={20} />
            <span>Проф. Д.А. Морозов</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Icon name="Clock" size={20} />
            <span>14 недель</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Icon name="Users" size={20} />
            <span>298 студентов</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Icon name="BookOpen" size={20} />
            <span>{totalLessons} занятий</span>
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8"
            onClick={() => setEnrolling(true)}
          >
            Записаться на курс
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300">
            Добавить в избранное
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <Tabs defaultValue="program" className="w-full">
            <TabsList className="w-full justify-start border-b border-slate-200 bg-transparent h-auto p-0 rounded-none">
              <TabsTrigger 
                value="program" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-slate-900 rounded-none px-6 py-3"
              >
                Программа курса
              </TabsTrigger>
              <TabsTrigger 
                value="about"
                className="data-[state=active]:border-b-2 data-[state=active]:border-slate-900 rounded-none px-6 py-3"
              >
                О курсе
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="data-[state=active]:border-b-2 data-[state=active]:border-slate-900 rounded-none px-6 py-3"
              >
                Отзывы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="program" className="mt-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">
                    Пройдено {completedLessons} из {totalLessons} занятий
                  </span>
                  <span className="text-sm font-bold text-slate-900">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {modules.map((module, index) => (
                  <AccordionItem 
                    key={module.id} 
                    value={`module-${module.id}`}
                    className="border border-slate-200 rounded-lg px-6 bg-white"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="text-left">
                          <div className="flex items-center gap-3 mb-1">
                            <Badge variant="outline" className="border-slate-300 font-mono">
                              Модуль {index + 1}
                            </Badge>
                            <span className="text-sm text-slate-500">{module.duration}</span>
                          </div>
                          <h3 className="text-lg font-serif font-bold text-slate-900">
                            {module.title}
                          </h3>
                        </div>
                        <div className="text-sm text-slate-500">
                          {module.lessons.length} занятий
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="space-y-2 mt-4">
                        {module.lessons.map((lesson) => (
                          <div 
                            key={lesson.id}
                            className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                lesson.completed 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-slate-100 text-slate-400'
                              }`}>
                                {lesson.completed ? (
                                  <Icon name="CheckCircle2" size={18} />
                                ) : (
                                  <Icon name={getLessonIcon(lesson.type) as any} size={18} />
                                )}
                              </div>
                              <div className="flex-1">
                                <h4 className={`font-semibold mb-1 ${
                                  lesson.completed ? 'text-slate-600' : 'text-slate-900'
                                } group-hover:text-slate-700`}>
                                  {lesson.title}
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                  <span>{lesson.duration}</span>
                                  <span>•</span>
                                  <span className="capitalize">
                                    {lesson.type === 'video' && 'Видеолекция'}
                                    {lesson.type === 'practice' && 'Практикум'}
                                    {lesson.type === 'lab' && 'Лабораторная'}
                                    {lesson.type === 'test' && 'Тестирование'}
                                  </span>
                                </div>
                              </div>
                            </div>
                            {!lesson.completed && (
                              <Icon name="Lock" size={18} className="text-slate-300" />
                            )}
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="about" className="mt-8">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  Описание курса
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Органическая химия — это наука о соединениях углерода, их строении, свойствах 
                  и превращениях. Данный курс охватывает все основные классы органических соединений: 
                  от простейших углеводородов до сложных биомолекул.
                </p>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 mt-8">
                  Чему вы научитесь
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    'Понимать строение и свойства органических молекул',
                    'Применять правила номенклатуры IUPAC',
                    'Предсказывать механизмы органических реакций',
                    'Планировать многостадийные синтезы соединений',
                    'Анализировать стереохимию и пространственное строение',
                    'Работать с лабораторным оборудованием'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <Icon name="Check" className="text-green-600 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  Требования
                </h3>
                <ul className="space-y-2 text-slate-600 mb-8">
                  <li>• Базовые знания общей химии</li>
                  <li>• Понимание атомного строения и химической связи</li>
                  <li>• Знание основ термодинамики и кинетики</li>
                </ul>

                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">
                  О преподавателе
                </h3>
                <Card className="p-6 bg-white border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl flex items-center justify-center text-white text-2xl font-serif">
                      ДМ
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">
                        Профессор Д.А. Морозов
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Доктор химических наук, заведующий кафедрой органической химии
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Более 20 лет преподавательского опыта. Автор 80+ научных работ 
                        в области органического синтеза и катализа. Лауреат премии 
                        за лучший учебный курс 2023 года.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="mb-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-slate-900 mb-1">4.8</div>
                    <div className="flex items-center gap-1 text-amber-600 mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">298 отзывов</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5,4,3,2,1].map(rating => (
                      <div key={rating} className="flex items-center gap-3">
                        <span className="text-sm text-slate-600 w-12">{rating} ★</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-500"
                            style={{ width: rating >= 4 ? `${90 - (5-rating) * 15}%` : '5%' }}
                          />
                        </div>
                        <span className="text-sm text-slate-500 w-12">
                          {rating >= 4 ? (90 - (5-rating) * 15) : 5}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map(review => (
                  <Card key={review.id} className="p-6 bg-white border-slate-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{review.author}</h4>
                        <div className="flex items-center gap-1 text-amber-600">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{review.text}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="p-6 bg-white border-slate-200">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-4">
                Этот курс включает
              </h3>
              <div className="space-y-4">
                {[
                  { icon: 'Video', text: '45 видеолекций' },
                  { icon: 'FileText', text: '120+ страниц материалов' },
                  { icon: 'FlaskConical', text: '8 лабораторных работ' },
                  { icon: 'PenTool', text: '15 практических заданий' },
                  { icon: 'Award', text: 'Сертификат о прохождении' },
                  { icon: 'Clock', text: 'Доступ навсегда' },
                  { icon: 'MessageSquare', text: 'Форум и поддержка' },
                  { icon: 'Download', text: 'Материалы для скачивания' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600">
                    <Icon name={item.icon as any} size={20} className="text-slate-400" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-slate-800 to-slate-600 text-white border-0">
              <h3 className="text-xl font-serif font-bold mb-2">
                Стоимость курса
              </h3>
              <div className="text-4xl font-bold mb-4">12 900 ₽</div>
              <p className="text-slate-200 text-sm mb-4">
                Или доступен бесплатно с Премиум подпиской
              </p>
              <Button 
                className="w-full bg-white text-slate-900 hover:bg-slate-100"
                onClick={() => setEnrolling(true)}
              >
                Записаться на курс
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
