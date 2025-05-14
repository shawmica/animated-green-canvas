
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Experience = {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Lead a team of 5 developers in building a cloud-based SaaS platform using React, Node.js, and AWS.",
        "Implemented CI/CD pipelines reducing deployment time by 60%.",
        "Architected and developed RESTful APIs serving over 10,000 daily users.",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Co.",
      location: "Boston, MA",
      period: "2018 - 2021",
      description: [
        "Developed and maintained multiple client-facing web applications using React and Express.",
        "Optimized database queries resulting in a 40% performance improvement.",
        "Collaborated with UX designers to implement responsive design principles.",
      ],
    },
    {
      position: "Frontend Developer",
      company: "Creative Minds Agency",
      location: "New York, NY",
      period: "2016 - 2018",
      description: [
        "Built interactive web interfaces for e-commerce clients using JavaScript and CSS.",
        "Implemented A/B testing which increased conversion rates by 25%.",
        "Collaborated with marketing teams to develop campaign landing pages.",
      ],
    },
  ];

  const education: Education[] = [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2016",
      description: "Focused on web technologies and distributed systems. Thesis on scalable web architectures.",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "MIT",
      location: "Cambridge, MA",
      period: "2010 - 2014",
      description: "Graduated with honors. Coursework in algorithms, data structures, and web development.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            My professional journey and academic background have shaped my skills and approach to development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Work Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {exp.company}, {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Education</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <span className="text-sm text-primary font-medium">{edu.period}</span>
                    </div>
                    <div className="text-muted-foreground">
                      {edu.institution}, {edu.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Certifications */}
            <Card className="card-hover animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <CardHeader>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>AWS Certified Developer - Associate</li>
                  <li>Google Cloud Professional Developer</li>
                  <li>MongoDB Certified Developer</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
