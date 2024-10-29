import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.scss'
})
export class TopNavBarComponent implements OnInit{
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
      // Typing phase
      if (!this.isDeleting && i < this.fullText.length) {
        this.displayText += this.fullText.charAt(i);
        i++;
      }
      // Deleting phase
      else if (this.isDeleting && i > 0) {
        i--;
        this.displayText = this.fullText.substring(0, i);
      }
      // Transition between typing and deleting
      if (i === this.fullText.length && !this.isDeleting) {
        this.isDeleting = true; // Start deleting after full text is typed
        setTimeout(() => {
          // Add delay before starting the deletion process
        }, this.delayBetweenCycles);
      } else if (i === 0 && this.isDeleting) {
        this.isDeleting = false; // Restart typing after deleting
      }
    }, this.isDeleting ? this.deletingSpeed : this.typingSpeed);
  }

  setActive = (id: string) => {
    const navLink = this.el.nativeElement.querySelectorAll('.nav-buttons li a');
    navLink.forEach((e: HTMLElement) => {
      this.renderer.removeClass(e, 'active');
    });
    const activeLink = this.el.nativeElement.querySelector(
      `.nav-buttons li a[href='#${id}']`
    );
    this.renderer.addClass(activeLink, 'active');
  };

}
