import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showScroll: boolean = false

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.showScroll = scrollPosition > 200;
  }
  
  getStart(section: string): void{
    const element = document.getElementById(section)
    if(element){
      element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  }

}
