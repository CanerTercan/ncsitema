import { Search } from 'lucide-react';

interface EventFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const categories = [
  'All Events',
  'Conference',
  'Workshop',
  'Webinar',
  'Training',
  'Meetup',
];

export function EventFilters({
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: EventFiltersProps) {
  return (
    <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 mb-8">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm text-slate-400 mb-3">Filter by Type</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-slate-900'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
