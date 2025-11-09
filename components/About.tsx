
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A Glimpse into My Professional World</p>
      </div>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 animate-slide-in-left">
          <div className="p-2 bg-gradient-to-tr from-accent to-primary rounded-lg shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Professional Portrait of Rowena Morales" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-3 text-lg space-y-4 animate-slide-in-right">
          <p>
            I am a passionate and committed BPO professional with over 9 years of experience in customer service, spanning outbound calls for healthcare, inbound hotel bookings, and cyber security insurance plans. I have a proven track record in handling diverse customer needs, resolving concerns, and driving team performance.
          </p>
          <p>
            As a Team Leader and former Talent Acquisition Supervisor, I am skilled at coaching and mentoring agents, delivering results in fast-paced environments, and building strong relationships with clients.
          </p>
          <p>
            I am a dedicated leader who thrives on helping others succeed and consistently contributes to organizational goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
