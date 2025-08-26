import { ChevronDown } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern tech office setup" 
          className="w-full h-full object-cover opacity-5 dark:opacity-10" 
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Lakshya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Senior Data Engineer
            </h2>
            <h4 className="text-base md:text-lg font-medium mb-2 text-gray-600 dark:text-gray-400">
              Turning messy, high-volume data into rock-solid systems that scale effortlessly 🚀
            </h4>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Thrives on building data platforms that never blink — whether it's streaming millions of events in real-time or crunching half a billion rows overnight. I don't just move data, I make it trustworthy, fast, and actionable so businesses can make decisions with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 font-semibold"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white px-8 py-3 font-semibold"
                data-testid="button-projects"
              >
                View My Work
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <img 
              src="/assets/hero_section.png"
              //src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional data engineer workspace" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown 
          className="text-2xl text-primary-600 dark:text-primary-400 h-8 w-8 cursor-pointer" 
          onClick={() => scrollToSection('about')}
          data-testid="scroll-indicator"
        />
      </div>
    </section>
  );
}
