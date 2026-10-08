import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  profilePhoto = 'perfil.png';
  
  contactInfo = {
    email: 'brumhc@hotmail.com',
    phone: '+351 931 478 418',
    location: 'Porto, Portugal',
    linkedin: 'linkedin.com/in/lucas-brum-95362372',
    linkedinUrl: 'https://linkedin.com/in/lucas-brum-95362372'
  };

  summary = 'Infrastructure Support Analyst at CTW TechWorks supporting BMW Group environments in Porto, with 14+ years of experience in enterprise IT, infrastructure, mainframe operations, and software development. DevOps and Systems Analyst with hands-on experience in Docker, Kubernetes, databases, Linux, Azure, Git, monitoring, and enterprise systems. Experienced in analyzing, troubleshooting, and correcting backend and frontend code, integrating APIs and databases, and developing web applications using React, Angular, JavaScript, Node.js, and Supabase.';

  experiences = [
    {
      period: '06/2026 - Present',
      title: 'Infrastructure Support Analyst | DevOps & Systems Analyst',
      company: 'CTW TechWorks | BMW Group - Porto, Portugal',
      responsibilities: [
        'Provide infrastructure and application support for BMW Group logistics and enterprise environments, working within Operations / SRE / PreOps teams.',
        'Monitor and troubleshoot services, microservices, applications, and infrastructure using Grafana, Prometheus, Loki, Azure, Kafka, and related observability tools.',
        'Analyze incidents across systems and databases, identify root causes, and support reliable production operations and service availability.',
        'Work with Docker, Kubernetes, Linux, Git, databases, APIs, and modern application environments as part of DevOps-oriented operational activities.',
        'Analyze and troubleshoot backend and frontend code, configurations, integrations, and application behavior to resolve production issues and improve system reliability.'
      ]
    },
    {
      period: '01/2023 - 05/2026',
      title: 'Mainframe Support Analyst | Frontend & Full Stack Developer',
      company: 'IBM',
      responsibilities: [
        'Supported enterprise IBM z/OS environments ensuring high availability.',
        'Performed batch operations, job monitoring, and JCL maintenance.',
        'Developed dashboards and web applications to improve operational efficiency.',
        'Designed modern frontend interfaces using React, JavaScript, HTML5, and CSS3.',
        'Participated in full stack development integrating frontend with backend and databases.',
        'Collaborated with global teams across Europe, Japan, and the United States.'
      ]
    },
    {
      period: '01/2021 - 01/2023',
      title: 'Infrastructure Support Analyst',
      company: 'InterOp',
      responsibilities: [
        'Provided infrastructure and mainframe support',
        'Managed Linux, Windows Server, and network environments',
        'Maintained system security, monitoring, and firewall configurations'
      ]
    },
    {
      period: '02/2020 - 12/2021',
      title: 'IT Support Analyst',
      company: 'COMMBOX TECNOLOGIA - Porto Alegre, RS',
      responsibilities: [
        'Remote and on-site IT support, infrastructure monitoring, and asset management',
        'Technical support and system maintenance',
        'Support and installation of MySQL and Oracle databases',
        'Code analysis in the company\'s legacy systems'
      ]
    },
    {
      period: '01/2018 - 11/2020',
      title: 'Senior Systems Support Analyst - Porto Alegre, RS',
      company: 'Linx S.A',
      responsibilities: [
        'Support for big retail systems, POS configurations and maintenance in Linux (CentOS)',
        'Network and firewall configurations, database consultation and maintenance',
        'Training clients on how to use access control tools'
      ]
    },
    {
      period: '11/2014 - 12/2017',
      title: 'Information Technology Technician',
      company: 'Santa Casa de Misericórdia de Porto Alegre - Porto Alegre, RS',
      responsibilities: [
        'Support analyst, management and updating of Windows Server AD servers and databases.',
        'Maintenance and installation of microcomputers and printers',
        'Technician responsible for the children\'s hospital, including infrastructure, hospital software installations, and multimedia facilities for conferences.'
      ]
    }
  ];

  education = [
    {
      period: '01/2020 - 01/2025',
      degree: 'Bachelor\'s Degree',
      field: 'Information Systems',
      institution: 'Universidade Estácio de Sá'
    },
    {
      period: '01/2013 - 01/2016',
      degree: 'Associate Degree',
      field: 'Computer Networks',
      institution: 'SENAC College'
    },
    {
      period: '01/2010 - 01/2012',
      degree: 'Technical Degree',
      field: 'Information Technology',
      institution: 'QI Technical School and College'
    }
  ];

  skillGroups = [
    { name: 'DevOps & Systems', skills: ['DevOps', 'Docker', 'Kubernetes', 'Azure', 'Git', 'Linux', 'Databases', 'VS Code', 'Windows Server', 'VMware', 'JSON'] },
    { name: 'Mainframe & Backend', skills: ['z/OS', 'JCL', 'SDSF', 'ISPF', 'COBOL', 'Db2', 'SQL', 'Node.js', 'REST APIs', 'Supabase'] },
    { name: 'Frontend', skills: ['React.js', 'Angular', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'IBM Carbon Design System'] },
    { name: 'Code Analysis & Troubleshooting', skills: ['Backend Code Analysis', 'Frontend Code Analysis', 'Debugging', 'System Analysis', 'Integration Troubleshooting'] }
  ];

  certifications = [
    'Microsoft Azure Fundamentals (AZ-900)',
    'Microsoft Identity and Access Administrator (SC-300)',
    'Microsoft Security Fundamentals (SC-900)',
    'IBM z/OS Mainframe Practitioner',
    'Fortinet NSE3 Network Security Associate',
    'IBSEC - Gestão de Identidades Digitais na Era da IA',
    'IBSEC - Inteligência de Ameaças na Era da IA'
  ];

  project = {
    name: 'BrumSupermarket',
    description: 'A full-featured grocery management application built to demonstrate modern full-stack capabilities. Designed for efficiency and scalability.'
  };

  objective = 'Growing as a DevOps and Systems professional by combining infrastructure operations, containerization, system analysis, databases, monitoring, and software development. Focused on bridging development and operations, improving reliability, troubleshooting complex technical issues, and contributing to scalable solutions in international environments.';
}
