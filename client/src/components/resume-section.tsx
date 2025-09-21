import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ResumeSection() {
  const { toast } = useToast();

  const handleDownload = async () => {
    try {
      const response = await fetch('/lakshya_porwal_resume.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'lakshya_porwal_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        toast({
          title: "Success",
          description: "Resume downloaded successfully!",
        });
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16 bg-primary-600 dark:bg-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Download My Resume</h2>
        <p className="text-xl text-blue-100 mb-8">
          Get a detailed overview of my experience, skills, and achievements
        </p>
        <Button
          onClick={handleDownload}
          className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 font-semibold text-lg"
          data-testid="button-download-resume"
        >
          <Download className="mr-3 h-5 w-5" />
          Download Resume
        </Button>
      </div>
    </section>
  );
}
