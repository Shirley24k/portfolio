import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  languages: any[] = [
    {
      name: "HTML",
      imageSrc: "images/html.png"
    },
    {
      name: "CSS",
      imageSrc: "images/css.png"
    },
    {
      name: "SCSS",
      imageSrc: "images/scss.webp"
    },
    {
      name: "JavaScript",
      imageSrc: "images/javascript.webp"
    },
    {
      name: "PHP",
      imageSrc: "images/php.png"
    },
    {
      name: "TypeScript",
      imageSrc: "images/typescript.png"
    },
    {
      name: "Java",
      imageSrc: "images/java.png"
    },
    {
      name: "Python",
      imageSrc: "images/python.png"
    },
    {
      name: "C++",
      imageSrc: "images/c++.png"
    },
    {
      name: "MySQL",
      imageSrc: "images/mysql.png"
    }
  ]

  tools: any[] = [
    {
      name: "GitHub",
      imageSrc: "images/github.png"
    },
    {
      name: "Visual Studio Code",
      imageSrc: "images/vscode.png"
    },
    {
      name: "Apps Script",
      imageSrc: "images/appsscript.png"
    },
    {
      name: "AWS",
      imageSrc: "images/aws.png"
    },
    {
      name: "Figma",
      imageSrc: "images/figma.webp"
    },
    {
      name: "Bootstrap",
      imageSrc: "images/bootstrap.png"
    },
    {
      name: "Material Tailwind",
      imageSrc: "images/material-tailwind.png"
    },
    {
      name: "Android Studio",
      imageSrc: "images/androidstudio.webp"
    },
    {
      name: "Angular",
      imageSrc: "images/angular.webp"
    },
    {
      name: "Laravel",
      imageSrc: "images/laravel.png"
    },
    {
      name: "React Native",
      imageSrc: "images/React.webp"
    },
    {
      name: "NodeJS",
      imageSrc: "images/nodejs.png"
    },
    {
      name: "WampServer",
      imageSrc: "images/wampserver.png"
    },
    {
      name: "PostgreSQL",
      imageSrc: "images/postgresql.png"
    },
    {
      name: "Firebase",
      imageSrc: "images/firebase.png"
    },
  ]


}
