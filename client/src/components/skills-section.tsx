import { Database, Flame, Box, Wind, ArrowLeftRight, Warehouse, Cloud, Factory, Github, Pyramid, Zap } from 'lucide-react';
import { SiPython } from 'react-icons/si';

export function SkillsSection() {
  const skills = [
    {
      icon: <SiPython className="text-4xl text-blue-500" />,
      name: 'Python',
      description: 'Data Processing',
    },
    {
      icon: <Database className="text-4xl text-orange-500" />,
      name: 'SQL',
      description: 'Database Queries',
    },
    {
      icon: <Flame className="text-4xl text-red-500" />,
      name: 'PySpark',
      description: 'Big Data Processing',
    },
    {
      icon: <Wind className="text-4xl text-green-500" />,
      name: 'Airflow',
      description: 'Workflow Orchestration',
    },
    {
      icon: <Cloud className="text-4xl text-blue-600" />,
      name: 'Azure',
      description: 'Cloud Platform',
    },
    {
      icon: <Box className="text-4xl text-purple-500" />,
      name: 'Databricks',
      description: 'Analytics Platform',
    },
    {
      icon: <Factory className="text-4xl text-blue-600" />,
      name: 'Data Factory',
      description: 'Data Pipelines',
    },
    {
      icon: <Zap className="text-4xl text-indigo-500" />,
      name: 'Event Hub',
      description: 'Real-time Data',
    },
    {
      icon: <ArrowLeftRight className="text-4xl text-yellow-500" />,
      name: 'ETL',
      description: 'Data Integration',
    },
    {
      icon: <Github className="text-4xl text-gray-600" />,
      name: 'Github',
      description: 'Version Control',
    },
    {
      icon: <Pyramid className="text-4xl text-pink-600" />,
      name: 'Data Modelling',
      description: 'Schema Design',
    },
    {
      icon: <Warehouse className="text-4xl text-orange-600" />,
      name: 'Data Warehousing',
      description: 'Storage Solutions',
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              data-testid={`skill-card-${skill.name.toLowerCase()}`}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
