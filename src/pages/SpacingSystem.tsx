import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

export default function SpacingSystem() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-serif font-bold text-slate-900 mb-4">
          Система отступов
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
          Spacing System основана на сетке 8px и обеспечивает визуальную гармонию 
          всех элементов интерфейса. Используется для внутренних и внешних отступов 
          карточек, блоков и компонентов.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">
          Шкала отступов
        </h2>
        <div className="space-y-6">
          {spacingValues.map(({ value, label, usage }) => (
            <div key={value} className="flex items-center gap-8">
              <div className="w-20 text-right">
                <div className="text-2xl font-bold text-slate-900">{value}px</div>
                <div className="text-sm text-slate-500 font-mono">{label}</div>
              </div>
              
              <div className="flex-1">
                <div className="relative h-16 bg-white border-2 border-slate-200 rounded-lg overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-slate-800 to-slate-600 transition-all duration-500"
                    style={{ width: `${value}px` }}
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 text-white font-mono text-sm font-semibold"
                    style={{ left: `${value + 8}px` }}
                  >
                    {value}px
                  </div>
                </div>
              </div>
              
              <div className="w-96">
                <p className="text-sm text-slate-600">{usage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
          Применение в интерфейсе
        </h2>
        <p className="text-slate-600 mb-8">
          Пример документации отступов на карточках каталога курсов
        </p>

        <div className="relative bg-slate-100 p-12 rounded-xl">
          <div className="absolute top-4 right-4">
            <Badge className="bg-slate-900 text-white">Документация spacing</Badge>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-4 bg-white border-2 border-slate-300 relative">
              <div className="absolute -top-8 left-0 right-0 flex justify-center">
                <div className="bg-amber-500 text-white px-3 py-1 rounded text-xs font-bold">
                  padding: 16px
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-3 bg-slate-100">Физика</Badge>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                Квантовая механика
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Фундаментальный курс о принципах квантовой физики
              </p>
              
              <div className="absolute -right-12 top-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-amber-500"></div>
                  <div className="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                    16px
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-white border-2 border-slate-300">
              <Badge variant="secondary" className="mb-3 bg-slate-100">Математика</Badge>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
                Математический анализ
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Пределы, производные и интегралы
              </p>
            </Card>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-px bg-blue-500"></div>
              <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs font-bold">
                gap: 24px
              </div>
              <div className="h-8 w-px bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">
          Правила использования
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-white border-slate-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Кратность 8px
            </h3>
            <p className="text-sm text-slate-600">
              Все отступы должны быть кратны базовой единице 8px для сохранения ритма
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Иерархия отступов
            </h3>
            <p className="text-sm text-slate-600">
              Больший отступ = более значимое разделение. Используйте прогрессию
            </p>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⊞</span>
            </div>
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-2">
              Консистентность
            </h3>
            <p className="text-sm text-slate-600">
              Одинаковые элементы = одинаковые отступы во всём интерфейсе
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">
          Примеры spacing в реальных компонентах
        </h2>

        <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
          <div className="space-y-6">
            <div className="border-l-4 border-amber-500 pl-6">
              <h4 className="font-bold text-slate-900 mb-2">Карточка курса</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Внутренний padding: <code className="bg-slate-100 px-2 py-1 rounded">16px</code></li>
                <li>• Отступ между badge и заголовком: <code className="bg-slate-100 px-2 py-1 rounded">12px</code></li>
                <li>• Отступ между описанием и кнопкой: <code className="bg-slate-100 px-2 py-1 rounded">16px</code></li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-bold text-slate-900 mb-2">Сетка карточек</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Расстояние между карточками (gap): <code className="bg-slate-100 px-2 py-1 rounded">24px</code></li>
                <li>• Отступ от фильтров до карточек: <code className="bg-slate-100 px-2 py-1 rounded">32px</code></li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-bold text-slate-900 mb-2">Фильтры</h4>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>• Расстояние между группами фильтров: <code className="bg-slate-100 px-2 py-1 rounded">16px</code></li>
                <li>• Gap между badge-кнопками: <code className="bg-slate-100 px-2 py-1 rounded">8px</code></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
