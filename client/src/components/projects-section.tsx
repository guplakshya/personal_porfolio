import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Real-time Analytics Pipeline',
      description: 'Built a scalable real-time data pipeline processing 1M+ events per hour using PySpark and Kafka.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['PySpark', 'Kafka', 'Azure'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'],
      link: 'https://github.com/lakshya-porwal',
    },
    {
      id: 2,
      title: 'ETL Automation Framework',
      description: 'Developed an automated ETL framework that reduced data processing time by 60% using Airflow.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'Airflow', 'Docker'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'],
      link: 'https://github.com/lakshya-porwal',
    },
    {
      id: 3,
      title: 'Cloud Data Warehouse',
      description: 'Designed and implemented a cloud-native data warehouse on Azure with optimized query performance.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Azure', 'SQL', 'Databricks'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200', 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'],
      link: 'https://github.com/lakshya-porwal',
    },
    {
      id: 4,
      title: 'Machine Learning Data Pipeline',
      description: 'Built an end-to-end ML data pipeline for predictive analytics with automated model retraining.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'MLOps', 'Kubernetes'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'],
      link: 'https://github.com/lakshya-porwal',
    },
    {
      id: 5,
      title: 'Data Quality Monitoring',
      description: 'Implemented comprehensive data quality monitoring system with automated alerting and remediation.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Python', 'Great Expectations', 'Grafana'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'],
      link: 'https://github.com/lakshya-porwal',
    },
    {
      id: 6,
      title: 'Streaming Data Platform',
      description: 'Created a robust streaming data platform for real-time business intelligence and monitoring.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      technologies: ['Kafka', 'Spark Streaming', 'ElasticSearch'],
      techColors: ['bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200', 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200', 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'],
      link: 'https://github.com/lakshya-porwal',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 overflow-hidden"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 text-sm rounded-full ${project.techColors[techIndex]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary-600 dark:text-primary-400 hover:text-primary-700 font-semibold"
                  onClick={() => window.open(project.link, '_blank')}
                  data-testid={`project-link-${project.id}`}
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
