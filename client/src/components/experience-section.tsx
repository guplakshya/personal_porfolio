export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Data Engineer',
      company: 'ZS Associates',
      type: 'Full-time Role',
      period: '2021 - Present',
      description: 'Leading data engineering initiatives for enterprise clients, designing scalable data solutions, and mentoring junior team members in best practices.',
      highlights: [
        'Built data pipelines processing 100TB+ of data monthly',
        'Reduced data processing costs by 40% through optimization',
        'Led migration of legacy systems to cloud-native solutions',
      ],
      typeColor: 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200',
      side: 'left',
    },
    {
      id: 2,
      title: 'Data Engineer',
      company: 'ZS Associates',
      type: 'Full-time Role',
      period: '2020 - 2021',
      description: 'Developed and maintained ETL pipelines, implemented data quality frameworks, and supported analytics teams with data infrastructure.',
      highlights: [
        'Designed ETL workflows for multiple data sources',
        'Implemented automated data quality monitoring',
        'Collaborated with cross-functional teams on data requirements',
      ],
      typeColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      side: 'right',
    },
    {
      id: 3,
      title: 'Data Engineering Intern',
      company: 'ZS Associates',
      type: 'Internship',
      period: '2019 - 2020',
      description: 'Started journey in data engineering, learning foundational concepts and contributing to data pipeline development and maintenance.',
      highlights: [
        'Assisted in building data transformation scripts',
        'Performed data analysis and quality checks',
        'Gained expertise in SQL and Python programming',
      ],
      typeColor: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      side: 'left',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline connector for desktop */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-full w-0.5 h-8 bg-primary-200 dark:bg-primary-800"></div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{experience.id}</span>
                  </div>
                  {/* Vertical line for mobile */}
                  {index < experiences.length - 1 && (
                    <div className="md:hidden absolute left-1/2 top-full w-0.5 h-8 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2"></div>
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1">
                  <div 
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    data-testid={`experience-card-${experience.id}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${experience.typeColor} w-fit`}>
                        {experience.type}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{experience.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{experience.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Key Achievements:</h4>
                      <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                        {experience.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start">
                            <span className="text-primary-600 dark:text-primary-400 mr-3 font-bold">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
