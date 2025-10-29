const spacingValues = [
  { value: 4, label: 'xs', usage: 'Минимальные отступы внутри элементов' },
  { value: 8, label: 'sm', usage: 'Базовая единица, отступы между мелкими элементами' },
  { value: 12, label: 'md', usage: 'Отступы внутри компонентов' },
  { value: 16, label: 'lg', usage: 'Стандартные padding карточек' },
  { value: 24, label: 'xl', usage: 'Расстояние между карточками' },
  { value: 32, label: '2xl', usage: 'Отступы между секциями' },
  { value: 40, label: '3xl', usage: 'Большие вертикальные отступы' },
  { value: 48, label: '4xl', usage: 'Разделение крупных блоков' },
  { value: 64, label: '5xl', usage: 'Максимальные отступы между секциями' }
];

const courses = [
  {
    id: 1,
    title: 'Введение в квантовую механику',
    category: 'Физика',
    description: 'Фундаментальный курс о принципах квантовой физики, волновых функциях и операторах',
    duration: '12 недель',
    students: 234
  },
  {
    id: 2,
    title: 'Математический анализ I',
    category: 'Математика',
    description: 'Пределы, производные, интегралы и их применение в реальных задачах',
    duration: '16 недель',
    students: 432
  },
  {
    id: 3,
    title: 'Органическая химия',
    category: 'Химия',
    description: 'Углеводороды, функциональные группы, механизмы реакций и стереохимия',
    duration: '14 недель',
    students: 156
  },
  {
    id: 4,
    title: 'История европейского искусства',
    category: 'Искусство',
    description: 'От античности до модернизма: эволюция художественных стилей и техник',
    duration: '8 недель',
    students: 567
  },
  {
    id: 5,
    title: 'Астрофизика и космология',
    category: 'Физика',
    description: 'Структура Вселенной, черные дыры, темная материя и происхождение космоса',
    duration: '10 недель',
    students: 189
  },
  {
    id: 6,
    title: 'Линейная алгебра',
    category: 'Математика',
    description: 'Векторные пространства, матрицы, собственные значения и линейные преобразования',
    duration: '14 недель',
    students: 312
  }
];

export default function SpacingSystem() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-16">
        
        <section className="mb-32">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded mb-4">
              Design System
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Spacing Scale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Система отступов основана на 8px сетке. Используется для внутренних и внешних 
              отступов карточек и блоков.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="space-y-6">
              {spacingValues.map(({ value, label, usage }) => (
                <div key={value} className="flex items-center gap-8">
                  <div className="w-24 text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-gray-900">{value}px</div>
                    <div className="text-xs text-gray-500 font-mono mt-1">{label}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="relative h-16 bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                      <div 
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-end pr-3 transition-all duration-300"
                        style={{ width: `${Math.min(value * 2, 500)}px` }}
                      >
                        <span className="text-white text-xs font-bold font-mono">{value}px</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-80 flex-shrink-0">
                    <p className="text-sm text-gray-600 leading-relaxed">{usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-32">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded mb-4">
              Interface
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Course Catalog UI
            </h2>
            <p className="text-lg text-gray-600">
              Интерфейс страницы каталога курсов с применением spacing system
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Онлайн-курсы</h3>
            
            <div className="mb-6">
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none"
                >
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2"/>
                  <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Поиск курсов..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            <div className="flex gap-3 flex-wrap mb-8">
              <button className="px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Все
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Физика
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Математика
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Химия
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Искусство
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-gray-50 rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded mb-3">
                    {course.category}
                  </span>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {course.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 7C8.38071 7 9.5 5.88071 9.5 4.5C9.5 3.11929 8.38071 2 7 2C5.61929 2 4.5 3.11929 4.5 4.5C4.5 5.88071 5.61929 7 7 7Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M2 11.5C2 9.567 4.134 8 6.75 8H7.25C9.866 8 12 9.567 12 11.5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                      <span>{course.students} студентов</span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded mb-4">
              Documentation
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Spacing Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Визуальная документация применения отступов в интерфейсе
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 p-12 relative overflow-visible">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-lg shadow-lg">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="2" fill="currentColor"/>
                  <rect x="1" y="9" width="12" height="2" fill="currentColor"/>
                  <circle cx="7" cy="7" r="1" fill="currentColor"/>
                </svg>
                Spacing Annotations
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
              <div className="relative">
                <div className="bg-white rounded-xl border-2 border-amber-500 p-4 shadow-xl relative z-10">
                  <div className="absolute -top-12 left-0 right-0 flex justify-center pointer-events-none">
                    <div className="flex flex-col items-center gap-1">
                      <svg width="16" height="20" viewBox="0 0 16 20" className="text-amber-500">
                        <path d="M8 0L8 16M8 16L4 12M8 16L12 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md whitespace-nowrap">
                        padding: 16px
                      </span>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded mb-3">
                    Физика
                  </span>

                  <div className="absolute -left-48 top-8 pointer-events-none hidden lg:block">
                    <div className="flex items-center gap-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                        margin-bottom: 12px
                      </span>
                      <svg width="24" height="16" viewBox="0 0 24 16" className="text-green-500">
                        <path d="M0 8L20 8M20 8L16 4M20 8L16 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    Квантовая механика
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Фундаментальный курс о принципах квантовой физики
                  </p>

                  <div className="absolute -right-48 bottom-16 pointer-events-none hidden lg:block">
                    <div className="flex items-center gap-2">
                      <svg width="24" height="16" viewBox="0 0 24 16" className="text-purple-500">
                        <path d="M24 8L4 8M4 8L8 4M4 8L8 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                        margin-bottom: 16px
                      </span>
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg">
                    Подробнее
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl border-2 border-gray-300 p-4 opacity-50">
                <span className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded mb-3">
                  Математика
                </span>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  Математический анализ
                </h4>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  Пределы, производные и интегралы
                </p>
                
                <button className="w-full px-4 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-lg">
                  Подробнее
                </button>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 pointer-events-none">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <svg width="20" height="16" viewBox="0 0 20 16" className="text-blue-500">
                      <path d="M0 8L8 8M8 8L5 5M8 8L5 11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <div className="w-px h-8 bg-blue-500"></div>
                    <svg width="20" height="16" viewBox="0 0 20 16" className="text-blue-500">
                      <path d="M20 8L12 8M12 8L15 5M12 8L15 11" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-md whitespace-nowrap">
                    gap: 24px — расстояние между карточками
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t-2 border-dashed border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">
                Ключевые отступы в каталоге курсов
              </h3>
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-amber-500 font-bold text-sm mb-1">Внутри карточки</div>
                  <div className="text-xs text-gray-600">
                    padding: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">16px</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-blue-500 font-bold text-sm mb-1">Между карточками</div>
                  <div className="text-xs text-gray-600">
                    gap: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">24px</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-green-500 font-bold text-sm mb-1">Badge → Заголовок</div>
                  <div className="text-xs text-gray-600">
                    margin: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">12px</code>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-purple-500 font-bold text-sm mb-1">Описание → Кнопка</div>
                  <div className="text-xs text-gray-600">
                    margin: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">16px</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-700">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Правила использования
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  1
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Кратность 8px</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Все отступы кратны базовой единице для сохранения визуального ритма
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  2
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Иерархия значений</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Больший отступ = более значимое разделение элементов
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  3
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Консистентность</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Одинаковые элементы имеют одинаковые отступы во всём интерфейсе
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-700">
                  <rect x="6" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Применение в компонентах
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Карточка курса</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Padding: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">16px</code></li>
                  <li>• Badge → Заголовок: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">12px</code></li>
                  <li>• Описание → Кнопка: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">16px</code></li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Сетка карточек</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Gap между карточками: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">24px</code></li>
                  <li>• Фильтры → Карточки: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">32px</code></li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">Заголовки секций</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li>• Отступ сверху: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">48px</code></li>
                  <li>• Отступ снизу: <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">32px</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
