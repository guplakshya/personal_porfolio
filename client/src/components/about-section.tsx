export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional data engineer workspace" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
              Passionate Data Engineer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With over 3 years of experience at ZS Associates, I specialize in designing and implementing 
              scalable data solutions that drive business intelligence and analytics. My expertise lies in 
              building robust ETL pipelines, optimizing data warehouses, and creating real-time processing systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              I'm passionate about leveraging cutting-edge technologies like PySpark, Databricks, and Azure 
              to solve complex data challenges. My goal is to transform raw data into meaningful insights 
              that empower organizations to make data-driven decisions.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-experience">3+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Company</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-company">ZS Associates</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-location">India</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Focus</h4>
                <p className="text-gray-700 dark:text-gray-300" data-testid="text-focus">Big Data & Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
