export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              //src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              src="/assets/about_section.png"
              alt="Professional data engineer workspace" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Passionate Data Engineer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I believe every organization deserves a data backbone that's as <b>reliable as electricity</b> — always on, always consistent — and that's exactly what I love building. From architecting ETL pipelines that handle terabytes of data daily to optimizing data lakes for lightning-fast queries, I thrive on solving complex data challenges with elegant engineering solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              But beyond the technology, what sets me apart is my ability to <b>bridge business needs with engineering solutions.</b> I sit with stakeholders to deeply understand the “why,” then architect pipelines that not only solve today's challenges but also future-proof tomorrow's growth. For me, data engineering is both an art and a science — <b>a balance of precision, scalability, and impact.</b>
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-experience">4+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Organization</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-company">ZS Associates</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-location">India</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Focus</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-focus">Big Data, AI/ML & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
