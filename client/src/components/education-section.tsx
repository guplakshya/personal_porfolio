import { GraduationCap, School, Book } from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'University Name',
      period: '2016 - 2020',
      grade: 'CGPA: 8.5/10',
      icon: <GraduationCap className="text-4xl text-primary-600 dark:text-primary-400" />,
    },
    {
      id: 2,
      degree: 'Higher Secondary',
      field: 'Science (PCM)',
      institution: 'School Name',
      period: '2014 - 2016',
      grade: 'Percentage: 92%',
      icon: <School className="text-4xl text-green-600 dark:text-green-400" />,
    },
    {
      id: 3,
      degree: 'Secondary School',
      field: 'CBSE Board',
      institution: 'School Name',
      period: '2014',
      grade: 'Percentage: 95%',
      icon: <Book className="text-4xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-testid={`education-card-${edu.id}`}
            >
              <div className="text-center mb-4">
                <div className="mb-4 flex justify-center">
                  {edu.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className={`font-medium mb-2 ${
                  edu.id === 1 ? 'text-primary-600 dark:text-primary-400' :
                  edu.id === 2 ? 'text-green-600 dark:text-green-400' :
                  'text-purple-600 dark:text-purple-400'
                }`}>
                  {edu.field}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.period}</p>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-center text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{edu.grade.split(':')[0]}:</span> {edu.grade.split(':')[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
