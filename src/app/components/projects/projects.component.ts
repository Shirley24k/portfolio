import { Component, Input } from '@angular/core';
import { projectsData } from './projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsData = projectsData.map(project => ({
    ...project,
    selectedIndex: 0
  }));
  indicators = true;
  autoSlide = true;
  slideInterval = 3000;
  selectedIndex = 0;

  ngOnInit(): void{
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(() => {
      this.projectsData.forEach(project => {
        this.onNextClick(project);
      });
    }, this.slideInterval);
  }

  onNextClick(project: any): void{
    if(project.selectedIndex === project.projectImg.length - 1){
      project.selectedIndex = 0;
    }
    else{
      project.selectedIndex++;
    }
  }
  selectedImage(project: any, index: number): void{
    project.selectedIndex=index;
  }
}
