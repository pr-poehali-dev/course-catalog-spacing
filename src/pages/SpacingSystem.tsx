import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const spacingValues = [
  { value: 4, label: 'xs', usage: 'Минимальные отступы внутри элементов', cssVar: '0.5' },
  { value: 8, label: 'sm', usage: 'Базовая единица, отступы между мелкими элементами', cssVar: '1' },
  { value: 12, label: 'md', usage: 'Отступы внутри компонентов', cssVar: '1.5' },
  { value: 16, label: 'lg', usage: 'Стандартные padding карточек', cssVar: '2' },
  { value: 24, label: 'xl', usage: 'Расстояние между карточками', cssVar: '3' },
  { value: 32, label: '2xl', usage: 'Отступы между секциями', cssVar: '4' },
  { value: 40, label: '3xl', usage: 'Большие вертикальные отступы', cssVar: '5' },
  { value: 48, label: '4xl', usage: 'Разделение крупных блоков', cssVar: '6' },
  { value: 64, label: '5xl', usage: 'Максимальные отступы между секциями', cssVar: '8' }
];

export default function SpacingSystem() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12 bg-slate-50">
      <div className="mb-16">
        <Badge className="mb-4 bg-slate-900">Design System</Badge>
        <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">
          Spacing System
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Система отступов основана на 8px сетке. Используется для внутренних и внешних 
          отступов карточек и блоков во всём интерфейсе образовательной платформы.
        </p>
      </div>

      <div className="mb-24">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            1. Spacing Scale
          </h2>
          <Badge variant="outline" className="border-slate-300">Визуальная шкала</Badge>
        </div>
        
        <Card className="p-8 bg-white border-slate-200">
          <div className="space-y-6">
            {spacingValues.map(({ value, label, usage, cssVar }) => (
              <div key={value} className="flex items-center gap-8">
                <div className="w-24 text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-slate-900">{value}px</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">{label}</div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="relative h-16 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 transition-all duration-500 flex items-center justify-end pr-3"
                      style={{ width: `${Math.min(value * 2, 400)}px` }}
                    >
                      <span className="text-white font-mono text-xs font-bold">{value}px</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-80 flex-shrink-0">
                  <p className="text-sm text-slate-600">{usage}</p>
                  <code className="text-xs text-slate-400 font-mono">space-{cssVar} / p-{cssVar}</code>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mb-24">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            2. Course Catalog UI
          </h2>
          <Badge variant="outline" className="border-slate-300">Интерфейс + Дизайн-система</Badge>
        </div>

        <div className="space-y-8">
          <Card className="p-8 bg-white border-slate-200">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Онлайн-курсы</h3>
              
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input 
                      type="text" 
                      placeholder="Поиск курсов..."
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button variant="default" className="bg-slate-900 hover:bg-slate-800">
                  Все
                </Button>
                <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                  Физика
                </Button>
                <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                  Математика
                </Button>
                <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                  Химия
                </Button>
                <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                  Искусство
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-4 bg-slate-50 border-slate-200">
                <Badge className="mb-3 bg-blue-100 text-blue-900 hover:bg-blue-100">Физика</Badge>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  Введение в квантовую механику
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Фундаментальный курс о принципах квантовой физики, волновых функциях и операторах
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>12 недель</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>234 студента</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Подробнее
                </Button>
              </Card>

              <Card className="p-4 bg-slate-50 border-slate-200">
                <Badge className="mb-3 bg-purple-100 text-purple-900 hover:bg-purple-100">Математика</Badge>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  Математический анализ I
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Пределы, производные, интегралы и их применение в реальных задачах
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>16 недель</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>432 студента</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Подробнее
                </Button>
              </Card>

              <Card className="p-4 bg-slate-50 border-slate-200">
                <Badge className="mb-3 bg-green-100 text-green-900 hover:bg-green-100">Химия</Badge>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  Органическая химия
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Углеводороды, функциональные группы, механизмы реакций и стереохимия
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>14 недель</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>156 студентов</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Подробнее
                </Button>
              </Card>

              <Card className="p-4 bg-slate-50 border-slate-200">
                <Badge className="mb-3 bg-amber-100 text-amber-900 hover:bg-amber-100">Искусство</Badge>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  История европейского искусства
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  От античности до модернизма: эволюция художественных стилей и техник
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>8 недель</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    <span>567 студентов</span>
                  </div>
                </div>
                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Подробнее
                </Button>
              </Card>
            </div>
          </Card>
        </div>
      </div>

      <div className="mb-24">
        <div className="flex items-baseline gap-4 mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            3. Spacing Documentation
          </h2>
          <Badge variant="outline" className="border-slate-300">Документация отступов</Badge>
        </div>

        <Card className="p-12 bg-gradient-to-br from-slate-100 to-slate-50 border-slate-200 relative overflow-visible">
          <div className="absolute top-4 right-4">
            <Badge className="bg-amber-500 text-white border-0">
              <Icon name="Ruler" size={14} className="mr-1" />
              Spacing Annotations
            </Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
            <div className="relative">
              <Card className="p-4 bg-white border-2 border-amber-500 shadow-lg relative z-10">
                <div className="absolute -top-10 left-0 right-0 flex justify-center pointer-events-none">
                  <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md flex items-center gap-2">
                    <Icon name="ArrowDown" size={12} />
                    padding: 16px (lg)
                  </div>
                </div>
                
                <Badge className="mb-3 bg-blue-100 text-blue-900 hover:bg-blue-100">Физика</Badge>
                
                <div className="absolute -left-16 top-16 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      margin-bottom: 12px (md)
                    </div>
                    <div className="w-6 h-px bg-green-500"></div>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                  Квантовая механика
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Фундаментальный курс о принципах квантовой физики
                </p>
                
                <div className="absolute -right-20 bottom-20 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-px bg-purple-500"></div>
                    <div className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-md">
                      margin-bottom: 16px
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                  Подробнее
                </Button>
              </Card>
            </div>

            <Card className="p-4 bg-white border-2 border-slate-300 opacity-60">
              <Badge className="mb-3 bg-purple-100 text-purple-900 hover:bg-purple-100">Математика</Badge>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                Математический анализ
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Пределы, производные и интегралы
              </p>
              <Button className="w-full bg-slate-900 hover:bg-slate-800">
                Подробнее
              </Button>
            </Card>

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 pointer-events-none">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-px h-8 bg-blue-500"></div>
                  <Icon name="ArrowLeftRight" size={16} className="text-blue-500" />
                  <div className="w-px h-8 bg-blue-500"></div>
                </div>
                <div className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md">
                  gap: 24px (xl) — расстояние между карточками
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t-2 border-dashed border-slate-300">
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 text-center">
              Ключевые отступы в каталоге курсов
            </h3>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-amber-500 font-bold text-sm mb-1">Внутри карточки</div>
                <div className="text-xs text-slate-600">padding: <code className="bg-slate-100 px-1.5 py-0.5 rounded">16px</code></div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-blue-500 font-bold text-sm mb-1">Между карточками</div>
                <div className="text-xs text-slate-600">gap: <code className="bg-slate-100 px-1.5 py-0.5 rounded">24px</code></div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="text-green-500 font-bold text-sm mb-1">Badge → Заголовок</div>
                <div className="text-xs text-slate-600">margin-bottom: <code className="bg-slate-100 px-1.5 py-0.5 rounded">12px</code></div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 bg-white border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Icon name="Check" className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Правила использования
            </h3>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-slate-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                1
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">Кратность 8px</div>
                <div className="text-sm text-slate-600">
                  Все отступы кратны базовой единице для сохранения визуального ритма
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-slate-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                2
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">Иерархия значений</div>
                <div className="text-sm text-slate-600">
                  Больший отступ = более значимое разделение элементов
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 bg-slate-900 text-white rounded flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                3
              </div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">Консистентность</div>
                <div className="text-sm text-slate-600">
                  Одинаковые элементы имеют одинаковые отступы во всём интерфейсе
                </div>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-8 bg-white border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Icon name="Code" className="text-blue-700" size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Применение в компонентах
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Карточка курса</h4>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• Padding: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">16px</code></li>
                <li>• Badge → Заголовок: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">12px</code></li>
                <li>• Описание → Кнопка: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">16px</code></li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Сетка карточек</h4>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• Gap между карточками: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">24px</code></li>
                <li>• Фильтры → Карточки: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">32px</code></li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Заголовки секций</h4>
              <ul className="space-y-1 text-xs text-slate-600">
                <li>• Отступ сверху: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">48px</code></li>
                <li>• Отступ снизу: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">32px</code></li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
