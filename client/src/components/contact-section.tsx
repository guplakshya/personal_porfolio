import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              I'm always interested in discussing new opportunities, 
              data engineering challenges, or collaboration on exciting projects.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:guplakshya@gmail.com" 
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="link-email"
              >
                <Mail className="text-2xl mr-4" />
                <span className="text-lg">guplakshya@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/lakshya-porwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="text-2xl mr-4" />
                <span className="text-lg">LinkedIn Profile</span>
              </a>
              
              <a 
                href="https://github.com/guplakshya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                data-testid="link-github"
              >
                <Github className="text-2xl mr-4" />
                <span className="text-lg">GitHub Profile</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">Name</Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                  data-testid="input-name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block" data-testid="error-name">
                    {errors.name}
                  </span>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  data-testid="input-email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block" data-testid="error-email">
                    {errors.email}
                  </span>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full"
                  data-testid="input-message"
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block" data-testid="error-message">
                    {errors.message}
                  </span>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3"
                data-testid="button-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
