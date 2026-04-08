import { prisma } from '@/lib/prisma';


export default async function SkillsPage() {
  const skills = await prisma.skill.findMany({
    orderBy: { createdAt: 'asc' },
  });

  // Group skills by category
  const grouped: Record<string, typeof skills> = {};
  for (const skill of skills) {
    const cat = skill.category || 'Other';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(skill);
  }

  const categories = Object.keys(grouped);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Skills</h1>
      <p className="text-gray-500 mb-12 text-lg">Technologies and tools I work with.</p>

      {categories.length === 0 ? (
        <p className="text-gray-400 text-center py-12">No skills added yet.</p>
      ) : (
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {grouped[category].map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
                  >
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-lg">
                        {skill.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
