// ===========================
// PORTFOLIO CONTENT DATA
// ===========================
// This file contains all the content for your portfolio website.
// To update your portfolio, simply edit the values below.

const siteData = {
  // ===========================
  // HERO SECTION
  // ===========================
  hero: {
    name: "Devan Johnson",
    title: "Physics & Data Science Specialist",
    resumeUrl: "files/Devan_Johnson_University_of_Chicago_2025_November.pdf"
  },

  // ===========================
  // ARGONNE NATIONAL LABORATORY
  // ===========================
  argonne: {
    // NewsRadar Project
    newsradar: {
      title: "NewsRadar - Automated News Monitoring System",
      description: `
        <p>Built a comprehensive automated news monitoring system that collects, processes, and analyzes multilingual news articles from international sources, deployed on virtual machines with scheduled daily execution to provide researchers with real-time intelligence.</p>
        
        <p><strong>What I Built:</strong></p>
        <ul>
          <li>Built web scraping framework gathering and translating news articles from 43 countries in 40 languages using custom keyword dictionaries.</li>
          <li>Integrated Argonne's internal LLM with engineered prompts to automatically categorize and score article relevance.</li>
          <li>Developed front-end interface allowing analysts to customize search parameters, view real-time scraping progress, and download results.</li>
          <li>Created AI chatbot assistant that helps analysts generate optimized prompts and multilingual keyword dictionaries through conversational interface.</li>
          <li>Deployed on virtual machines with scheduled morning execution, uploading databases to team server before analysts arrive.</li>
        </ul>
        
        <p><strong>Key Results & Impact:</strong></p>
        <ul>
          <li><strong>Production stability:</strong> Analysts have been able to move completely away from manual article searching, solely relying on the databases produced by NewsRadar.</li>
          <li><strong>15+ hours/week saved per analyst:</strong> Reduced manual monitoring from 3-4 hours daily to 45 minutes.</li>
          <li><strong>95% relevance accuracy:</strong> Automated filtering produces higher quality results than manual identification while processing thousands of articles.</li>
          <li><strong>Lowered technical barriers:</strong> AI assistant enables non-technical analysts to configure complex multilingual searches without coding.</li>
        </ul>
      `,
      //imagePath: "assets/NewsRadar.png"
      videoType: "youtube",
      videoUrl: "https://www.youtube.com/watch?v=8qHb0GfKzyU", // Replace with your actual video
      thumbnailPath: "assets/NewsRadar_Thumbnail.png"
    },

    // Battery Risk Assessment
    battery: {
      title: "Lithium-Ion Battery Supply Chain Risk Assessment",
      description: `
        <p>Contributed to a comprehensive risk assessment framework evaluating global supply chain vulnerabilities for lithium-ion battery infrastructure by combining trade data metrics with geopolitical analysis.</p>
        
        <p><strong>Key Contributions:</strong></p>
        <ul>
          <li>Developed web scraping infrastructure to integrate international news data for real-time geopolitical monitoring</li>
          <li>Designed interactive dashboard to track critical materials and visualize supply chain risks with color-coded criticality indicators</li>
          <li>Aggregated and analyzed geopolitical risk factors affecting battery material sourcing and trade routes</li>
        </ul>
      `,
      imagePath: "assets/Li_Battery_2.png"
    },

    // UAV Threat Analysis (Upcoming)
    uav: {
      title: "UAV Artificial Intelligence Threat Analysis Model",
      certification: "FAA sUAV Certified (Part 107)", // Remote Pilot Certificate
      description: `
        <p><strong>Upcoming Project:</strong> Currently in the planning phase for development of an AI-powered threat detection system for unmanned aerial vehicle (UAV) monitoring and classification.</p>
        
        <p><strong>Project Scope:</strong> This system will utilize computer vision and machine learning to identify, track, and classify UAVs in real-time, assessing potential threats based on flight patterns, proximity to sensitive areas, and behavioral analysis.</p>
        
        <p><strong>Planned Components:</strong></p>
        <ul>
          <li>Real-time video processing pipeline using edge computing</li>
          <li>Deep learning models for UAV detection and classification</li>
          <li>Trajectory prediction using recurrent neural networks</li>
          <li>Integration with existing security infrastructure</li>
        </ul>
        
        <p><strong>Technical Approach:</strong> Leveraging PyTorch for model development, OpenCV for video processing, and deployment on edge devices for low-latency inference. The system will be trained on both synthetic and real-world UAV datasets.</p>
      `,
      imagePath: "assets/Drone_2.webp"
    }
  },

  // ===========================
  // CRECHE INNOVATIONS
  // ===========================
  creche: {
    projects: [
      {
        title: "Python Inventory Management System",
        description: "Developed a Python-based inventory management system to automate product tracking, reconciliation, and report generation in Excel for 300+ SKUs, eliminating reliance on manual logging and improving overall accuracy.",
        imagePath: "assets/Inventory.png",
        technologies: ["Python", "Excel Automation", "Data Management", "Reporting"]
      },
      {
        title: "Warehouse Reorganization & Optimization",
        description: "Led a cross-functional team of 6 in a 3,000 square foot warehouse reorganization project, redesigning storage layouts and workflows to improve space utilization, product flow, and retrieval efficiency.",
        imagePath: "assets/Warehouse.webp",
        technologies: ["Project Management", "Workflow Design", "Team Leadership", "Operations"]
      },
      {
        title: "Instructional Training Video Production",
        description: "Produced instructional training videos for 5 medical carts using Microsoft PowerPoint, incorporating elements to enhance comprehension for new hires and potential buyers.",
        imagePath: "assets/RRU.jpg",
        technologies: ["PowerPoint", "Technical Communication", "Multimedia Design"]
      },
      {
        title: "Assembly Instruction Standardization",
        description: "Created and standardized assembly instructions for all medical cart product lines, ensuring consistent builds, reducing onboarding time, and supporting quality assurance across production.",
        imagePath: "assets/MicroCool.jpg",
        technologies: ["Documentation", "Process Standardization", "Quality Assurance", "Technical Writing"]
      }
    ]
  },

  // ===========================
  // UNIVERSITY OF CHICAGO
  // ===========================
  uchicago: {
    // PHYSICS
    physics: {
      // Gamma-Ray Lab
      gammaLab: {
        title: "Gamma-Ray Cross Sections Laboratory",
        description: `
          <p>Conducted advanced experimental physics research analyzing gamma-ray attenuation and scattering cross sections across multiple isotopes (Cs-137, Na-22, Ba-133) using high-precision spectroscopy equipment.</p>
          
          <p><strong>Experimental Work:</strong></p>
          <ul>
            <li>Operated and calibrated gamma-ray spectroscopy equipment including NaI detectors and multichannel analyzers</li>
            <li>Designed experimental protocols to measure attenuation coefficients for various materials</li>
            <li>Collected and analyzed spectra to identify photoelectric, Compton, and pair production interactions</li>
            <li>Measured angular distributions of Compton scattered photons</li>
          </ul>
          
          <p><strong>Data Analysis:</strong> Developed custom Python analysis pipelines using NumPy and SciPy to process thousands of spectral measurements, performing peak fitting, background subtraction, and statistical uncertainty analysis. Created publication-quality visualizations using Matplotlib.</p>
        `,
        imagePath: "assets/uchicago/gamma-placeholder.jpg"
      },

      // Advanced Mathematics
      advancedMath: {
        title: "Advanced Mathematical Physics",
        description: `
          <p>Completed rigorous coursework in advanced mathematical methods and theoretical physics, demonstrating proficiency in solving complex problems.</p>
          
          <p><strong>Core Competencies:</strong> Partial differential equations, complex analysis, tensor calculus, group theory, variational methods, and perturbation theory. Applied these techniques to solve problems in quantum mechanics, electromagnetism, and statistical mechanics.</p>
          
          <p><strong>Problem-Solving Approach:</strong> Developed systematic approaches to tackle multi-step physics problems requiring integration of concepts from multiple domains. Regularly solved problem sets involving 20+ hour time investments, requiring deep conceptual understanding and mathematical sophistication.</p>
        `,
        // Coursework will be added dynamically
        coursework: [
          {
            code: "PHYS 24310",
            name: "Advanced Quantum Mechanics",
            description: "Atomic Structure, Quantum Symmetries, Quantum ElectroDynamics, Scattering Theory, Quantum Computing"
          },
          {
            code: "PHYS 27900",
            name: "Thermal and Statistical Physics",
            description: "Thermodynamics, Thermodynamic Potentials, Distributions, Canonical Ensembles"
          },
          {
            code: "PHYS 18500",
            name: "Intermediate Classical Mechanics",
            description: "Harmonic Oscillatros, Drag Force Projectiles, Lagrangian and Hamiltonian Mechanics, Scattering"
          },
          {
            code: "PHYS 22700",
            name: "Electrodynamics",
            description: "Maxwell's equations, Electromagnetic Induction, Electromagnetic Waves, and Radiation"
          },
          {
            code: "MENG 21100",
            name: "Engineering Analysis I",
            description: "Process Flow Diagrams, Continuous, Transient, and Steady-State Processes"
          },
          {
            code: "MATH 18600",
            name: "Mathematics of Quantum Mechanics",
            description: "Abstract linear algebra, Partial Differential Equations (Series Solutions of Second Order ODE, Sturm-Liouville theory, Separation of Variables) "
          }
        ]
      }
    },

    // DATA SCIENCE
    dataScience: {
      // NBA Analysis
      nba: {
        title: "NBA Salary Prediction Analysis",
        description: `
          <p>Developed a comprehensive machine learning model to predict NBA player salaries based on performance metrics, career statistics, and positional factors.</p>
          
          <p><strong>Data Collection & Preprocessing:</strong> Gathered multi-season data from NBA API including player statistics (points, rebounds, assists, efficiency ratings), contract information, and team performance metrics. Cleaned and normalized data, handling missing values and outliers.</p>
          
          <p><strong>Modeling:</strong> Implemented multiple regression techniques (Linear, Ridge, Lasso), tree-based models (Random Forest, Gradient Boosting), and a PyTorch Neural Network model. Achieved R² score of 0.78 on test set, with Random Forest providing best performance.</p>
          
          <p><strong>Insights:</strong> Determined the four best statistical indicators to be Minutes Played, Age, and Points Per Game </p>
        `,
        imagePath: "assets/uchicago/nba-placeholder.jpg"
      },

      // Swing Visualization
      swing: {
        title: "Baseball Swing Biomechanics Using Computer Vision",
        description: `
          <p>Analyzed baseball swing mechanics from video footage using computer vision to understand what makes elite hitters successful. Combined body tracking with a custom bat tracking model to reveal the relationship between hip rotation and bat speed.</p>
          
          <p><strong>Project Highlights:</strong></p>
          <ul>
            <li>Trained a custom AI model to track baseball bats through video by manually labeling 300+ frames across different swing phases.</li>
            <li>Used pose estimation to track 17 body points (shoulders, hips, knees, etc.) and combined it with bat tracking for biomechanical analysis.</li>
            <li>Showed that hip rotation and bat acceleration happen simultaneously in elite swings, validating coaching kinetic chain sequencing with data.</li>
            <li>Built analysis pipeline that processes video footage and computes velocities to measure swing timing.</li>
          </ul>
          
          <p><strong>Technical Implementation:</strong> Fine-tuned a YOLOv8 model on custom-annotated bat data, applied smoothing techniques to handle noisy computer vision outputs, and used known bat dimensions for spatial calibration. Developed Python scripts to extract kinematic patterns from frame-by-frame tracking data.</p>
          
          <p><strong>Key Finding:</strong> Proved the "kinetic chain" principle: as hips rotate from 60° to 15°, bat speed increases to its peak, showing how elite hitters transfer energy from lower body to bat. This demonstrates that sophisticated biomechanical analysis is possible with just a camera and computer vision.</p>
        `,
        gifPath: "assets/uchicago/bat-swing-demo.gif"
      },
    }
  },

  // ===========================
  // LEADERSHIP & ATHLETICS
  // ===========================
  leadership: {
    // Fraternity Leadership
    fraternity: {
      name: "Psi Upsilon Omega",
      description: `
        <p>Throughout my time in Psi Upsilon Omega, I've consistently taken on leadership roles that have shaped both the organization and my personal development. These positions have taught me how to manage large groups, navigate complex interpersonal dynamics, balance competing priorities, and drive results under pressure.</p>
        
        <p>My progression through multiple executive board positions demonstrates a commitment to service and continuous growth in leadership capabilities. From managing day-to-day operations as Sergeant at Arms to overseeing critical risk management and now serving as Vice President, I've developed a comprehensive understanding of organizational leadership.</p>
        
        <p><strong>Key Leadership Outcomes:</strong></p>
        <ul>
          <li>Helped managed a budget of $200,000+ annually across social, risk management, and philanthropy initiatives</li>
          <li>Supported a chapter of 80+ members</li>
          <li>Organized many philanthropy events supporting local Chicago food banks</li>
          <li>Coordinated with board memebers, other fraternities, national headquarters, and external partners</li>
        </ul>
      `,
      roles: [
        {
          position: "Vice President",
          duration: "1 year",
          current: true,
          responsibilities: "Strategic planning, member development, executive board coordination, external relations"
        },
        {
          position: "Risk Management Chair",
          duration: "2 years",
          current: false,
          responsibilities: "Safety policy implementation, event oversight, crisis management, compliance"
        },
        {
          position: "Philanthropy Chair",
          duration: "1 year",
          current: false,
          responsibilities: "Community service coordination, fundraising events, partner relationship management"
        },
        {
          position: "Sergeant at Arms (House Manager)",
          duration: "2 years",
          current: false,
          responsibilities: "Facility management, conflict resolution, day-to-day operations, member accountability"
        }
      ]
    },

    // Baseball
    baseball: {
      description: `
        <p>As an upperclassman on the UChicago Maroons baseball team, I contributed to the most successful season in program history in 2025. My time with UCHicago baseball fostered my teamwork, resilience, and the discipline required to balance elite athletics with rigorous academics.</p>
        
        <p>Beyond playing, I earned my Certified Personal Trainer (CPT) certification through the International Sports Sciences Association (ISSA), deepening my understanding of athletic performance, biomechanics, and evidence-based training methodologies. I have utilized this knowledge to help high school athletes in New Mexico optimize their training and achieve their performance goals.</p>
        
        <p><strong>Skills Developed:</strong> Team collaboration under pressure, performance optimization, mental resilience, time management, coaching and mentoring.</p>
      `,
      achievements: [
        {
          title: "UAA All-Academic Team and 2x Midwest Conference All-Academic Team",
          description: "Recieved Academic Honors During Every Season on the Team"
        },
        {
          title: "Winningest Season in Program History",
          description: "Part of the team that set the all-time program wins record"
        },
        {
          title: "First National Rankings",
          description: "Team achieved first-ever appearance in national rankings"
        }
      ],
      certifications: [
        {
          name: "Certified Personal Trainer (CPT)",
          organization: "International Sports Sciences Association (ISSA)",
        }
      ]
    }
  },

  // ===========================
  // TIKTOK CREATOR
  // ===========================
  tiktok: {
    username: "@quantumhelp", // Update with your actual TikTok handle
    profileUrl: "https://www.tiktok.com/@quantumhelp", // Update with your actual TikTok profile URL

    stats: {
      views: "4.5M+",
      likes: "285K+",
      followers: "15K+"
    },

    contentModules: [
      {
        title: "Educational Content & Platform Expertise",
        description: `
          <p>Built educational content across quantum mechanics and college admissions that reached <strong>4.5M+ views, 285K+ likes, and 15K+ followers</strong> through understanding of platform algorithms and audience engagement.</p>

          <p><strong>Content Creation & Strategy:</strong></p>
          <ul>
            <li>Produced 35 videos using TikTok's native editing tools, gaining first-hand experience with platform features, content workflows, and what makes short-form educational content succeed</li>
            <li>Developed content focusing on quantum mechanics fundamentals and college admissions guidance that has resonated with students, educators, parents, and physics enthusiasts</li>
            <li>Gained experience with platform algorithms to optimize posting times, video length, hook strategies, and engagement patterns</li>
          </ul>

          <p><strong>View My Profile:</strong> <a href="https://www.tiktok.com/@quantumhelp" target="_blank" rel="noopener" style="color: var(--color-accent); text-decoration: underline;">@quantumhelp on TikTok</a></p>
        `,
        imagePath: "assets/TikTok_Profile2.png", // Placeholder - add your TikTok profile screenshot
        showProfileLink: true
      },
      {
        title: "Viral Video: Physics Education Philosophy",
        description: `
          <p>Created viral video challenging misconceptions about intelligence and STEM education that accumulated <strong>1.6M views and over 200K likes</strong>, resonating with hundreds of thousands through authentic storytelling about persistence over innate ability.</p>

          <p><strong>Core Message:</strong></p>
          <ul>
            <li>Shared that complex problems sometimes take entire nights to solve and may not go significantly faster on repeat attempts. This humanized the learning process for many viewers.</li>
            <li>Reframed intelligence from a fixed trait to a developed skill, emphasizing that mastery comes from "staying in the room when it gets uncomfortable" rather than innate genius.</li>
            <li>Challenged viewers' self-limiting beliefs by closing with: "Everyone else you've ever admired hit the same wall. They just didn't take it as a sign to turn around."</li>
          </ul>

          <p><strong>Impact:</strong> The video sparked conversation about the growth mindset in STEM, with many educators sharing it in classrooms and students expressing renewed confidence that difficulty is part of the process, not a sign they are inadequate.</p>

          <p><strong>Featured Comments:</strong></p>
          <div class="comment-showcase">
            <div class="comment-item">
              <p class="comment-text">"Showing this video to my elementary students"</p>
              <p class="comment-author">— Cherbear7171</p>
            </div>
            <div class="comment-item">
              <p class="comment-text">"Wow this is the best message I have ever heard."</p>
              <p class="comment-author">— Zerotrace</p>
            </div>
            <div class="comment-item">
              <p class="comment-text">"Such an important message my guy"</p>
              <p class="comment-author">— Thomas Sidlinger</p>
            </div>
          </div>

          <p><strong>Watch the Video:</strong> <a href="https://www.tiktok.com/@quantumhelp/video/7580467805099691278" target="_blank" rel="noopener" style="color: var(--color-accent); text-decoration: underline;">View on TikTok</a></p>
        `,
        imagePath: "assets/Physics_Philosophy.png",
        videoUrl: "https://www.tiktok.com/@quantumhelp/video/7580467805099691278"
      }
    ]
  },


  // ===========================
  // CONTACT
  // ===========================
  contact: {
    email: "devanj@uchicago.edu",
    location: "Chicago, IL",
    socialLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/devan-johnson-116795254/"
      },
      {
        label: "GitHub",
        url: "https://github.com/devanj08"
      },
      {
        label: "TikTok",
        url: "https://www.tiktok.com/@quantumhelp"
      },
      {
        label: "Resume",
        url: "files/Devan_Johnson_University_of_Chicago_2025_November.pdf"
      }
    ]
  }
};

// Don't modify below this line
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}