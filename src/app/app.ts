import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profilePhoto = 'perfil.png';
  
  contactInfo = {
    email: 'brumhc@hotmail.com',
    phone: '+55 13 97811-9494',
    location: 'Santos SP 11050031',
    linkedin: 'linkedin.com/in/lucas-brum-95362372',
    linkedinUrl: 'https://linkedin.com/in/lucas-brum-95362372'
  };

  summary = 'Mainframe Support Analyst at IBM with 14+ years of experience in enterprise IT environments, specializing in z/OS, batch processing, and system operations. Experienced in developing modern web systems, dashboards, and full stack applications using React, Angular, JavaScript, HTML5, CSS3, and IBM Carbon Design System. Strong ability to combine enterprise infrastructure expertise with modern frontend and full stack development to deliver scalable and efficient solutions.';

  experiences = [
    {
      period: '01/2023 - atual',
      title: 'Mainframe Support Analyst | Frontend & Full Stack Developer',
      company: 'IBM',
      responsibilities: [
        'Support enterprise IBM z/OS environments ensuring high availability',
        'Perform batch operations, job monitoring, and JCL maintenance',
        'Develop dashboards and web applications to improve operational efficiency',
        'Design modern frontend interfaces using React, JavaScript, HTML5, and CSS3',
        'Participate in full stack development integrating frontend with backend and databases',
        'Collaborate with global teams across Europe, Japan, and the United States'
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
        'Code analysis in the company\'s legacy systems',
        'Training clients on how to use access control tools'
      ]
    },
    {
      period: '01/2018 - 11/2020',
      title: 'Senior Systems Support Analyst - Porto Alegre, RS',
      company: 'Linx S.A',
      responsibilities: [
        'Support for big retail systems, POS configurations and maintenance in Linux (CentOS)',
        'Network and firewall configurations, database consultation and maintenance'
      ]
    },
    {
      period: '11/2014 - 12/2017',
      title: 'Information Technology Technician',
      company: 'Santa Casa de Misericórdia de Porto Alegre - Porto Alegre, RS',
      responsibilities: [
        'Support analyst, management and updating of WINDOWS SERVER AD servers, databases',
        'Maintenance and installation of microcomputers and printers',
        'Technician responsible for the children\'s hospital, such as infrastructure, hospital software installations, multimedia facilities for conferences'
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

  skillsColumn1 = [
    'z/OS',
    'JCL',
    'SDSF',
    'ISPF',
    'COBOL',
    'Db2',
    'React.js',
    'Angular',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'IBM Carbon Design System'
  ];

  skillsColumn2 = [
    'SQL',
    'Supabase',
    'REST APIs',
    'JSON',
    'Linux',
    'Windows Server',
    'VMware',
    'Azure',
    'Git',
    'VS Code',
    'Node.js'
  ];

  certifications = [
    'Microsoft Azure Fundamentals (AZ-900)',
    'Microsoft Identity and Access Administrator (SC-300)',
    'Microsoft Security Fundamentals (SC-900)',
    'IBM z/OS Mainframe Practitioner',
    'Fortinet NSE3 Network Security Associate'
  ];

  project = {
    name: 'BrumSupermarket',
    description: 'A full-featured grocery management application built to demonstrate modern full-stack capabilities. Designed for efficiency and scalability.'
  };

  objective = 'Transitioning into a Frontend or Full Stack Developer role, utilizing my solid experience in enterprise systems and mainframe environments, combined with modern web development skills using React, JavaScript, Angular, HTML5, CSS3, and IBM Carbon Design System. My goal is to contribute to the development of modern and scalable applications while continuing to grow as a software developer in an international environment.';

  downloadPDF() {
    window.print();
  }
}
