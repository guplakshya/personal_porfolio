import { Mail, Linkedin, Github } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export function Footer() {
  const { scrollToSection } = useSmoothScroll();

  const quickLinks = [
    { href: 'about', label: 'About' },
    { href: 'skills', label: 'Skills' },
    { href: 'projects', label: 'Projects' },
    { href: 'experience', label: 'Experience' },
    { href: 'education', label: 'Education' },
    { href: 'certifications', label: 'Certifications' },
    { href: 'contact', label: 'Contact' },
  ];

  const technologies = [
    'Python & PySpark',
    'Azure & AWS',
    'Databricks & Airflow',
    'SQL & Data Warehousing',
    'ETL & Data Modeling',
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lakshya Porwal</h3>
            <p className="text-gray-400 mb-4">
              Senior Data Engineer focused on bridging the gap between data chaos and business clarity.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/lakshya-porwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="text-xl" />
              </a>
              <a 
                href="https://github.com/guplakshya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-link-github"
              >
                <Github className="text-xl" />
              </a>
              <a 
                href="mailto:guplakshya@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid={`footer-nav-${link.href}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-gray-400">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Lakshya Porwal. All rights reserved. Built with ❤️ and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
