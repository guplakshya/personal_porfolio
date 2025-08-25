import { SiAmazon, SiGoogle, SiPython } from 'react-icons/si';
import { Flame, Cloud, Wind } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      name: 'Azure Data Engineer Associate',
      provider: 'Microsoft',
      credential: 'DP-203',
      status: 'Active',
      icon: <Cloud className="text-4xl text-blue-600" />,
    },
    {
      id: 2,
      name: 'AWS Data Analytics',
      provider: 'Amazon Web Services',
      credential: 'DAS-C01',
      status: 'Active',
      icon: <SiAmazon className="text-4xl text-orange-500" />,
    },
    {
      id: 3,
      name: 'Databricks Certified',
      provider: 'Databricks',
      credential: 'Data Engineer Professional',
      status: 'Active',
      icon: <Flame className="text-4xl text-red-500" />,
    },
    {
      id: 4,
      name: 'Google Cloud Professional',
      provider: 'Google Cloud',
      credential: 'Data Engineer',
      status: 'Active',
      icon: <SiGoogle className="text-4xl text-blue-500" />,
    },
    {
      id: 5,
      name: 'Apache Airflow',
      provider: 'Apache Foundation',
      credential: 'Fundamentals',
      status: 'Active',
      icon: <Wind className="text-4xl text-green-500" />,
    },
    {
      id: 6,
      name: 'Python for Data Science',
      provider: 'Coursera',
      credential: 'Specialization',
      status: 'Active',
      icon: <SiPython className="text-4xl text-blue-500" />,
    },
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Certifications</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              data-testid={`certification-card-${cert.id}`}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{cert.provider}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.credential}</p>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
