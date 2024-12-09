import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

interface SideNavToggle {
  screenWidth: number
  collapsed: boolean
}

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})

export class TopNavBarComponent implements OnInit{
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = false
  screenwidth = 0
  fullText: string = "Shirley";
  displayText: string = "";
  typingSpeed: number = 350;
  deletingSpeed: number = 50; 
  delayBetweenCycles: number = 3000; 

  isDeleting: boolean = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  
  ngOnInit(): void {
    this.typeText();
  }

  typeText() {
    let i = 0;

    const typeInterval = setInterval(() => {
      
      if (!this.isDeleting && i < this.fullText.length) {
        this.displayText += this.fullText.charAt(i);
        i++;
      }
      
      else if (this.isDeleting && i > 0) {
        i--;
        this.displayText = this.fullText.substring(0, i);
      }
      
      if (i === this.fullText.length && !this.isDeleting) {
        this.isDeleting = true; 
        setTimeout(() => {
          
        }, this.delayBetweenCycles);
      } else if (i === 0 && this.isDeleting) {
        this.isDeleting = false; 
      }
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  setActive = (id: string) => {
    const navLink = this.el.nativeElement.querySelectorAll('.nav-buttons li a')
    navLink.forEach((e: HTMLElement) => {
      this.renderer.removeClass(e, 'active')
    })
    const activeLink = this.el.nativeElement.querySelector(
      `.nav-buttons li a[href='#${id}']`
    )
    this.renderer.addClass(activeLink, 'active')
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenwidth })
  }

  closeSidenav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenwidth })
  }

}
