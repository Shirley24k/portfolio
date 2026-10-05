import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  experiences = [
    {
      role: 'Software Engineer',
      company: 'Mode Fair Sdn Bhd',
      location: 'Kuala Lumpur',
      period: 'April 2026 - Present',
      highlights: [
        'Developed and enhanced production features for the business platform to support business growth.',
        'Built an in-house customized data analytics platform, covering requirements, architecture, development, and maintenance.',
        'Engineered a natural language text-to-SQL engine using LLMs with schema context injection, governed metric definitions, and RBAC privilege controls.',
        'Strengthened data governance with folder permissions, view-level restrictions, and 2FA authentication.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'PAIDChain',
      location: 'Kuala Lumpur',
      period: 'October 2024 - January 2025',
      highlights: [
        'Developed frontend features for billing and identity systems using Angular.',
        'Integrated frontend components with backend services using GraphQL and REST APIs.',
      ],
    },
  ];
}
