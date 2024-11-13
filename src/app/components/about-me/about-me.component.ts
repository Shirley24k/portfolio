import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(private renderer:Renderer2){}

  DownloadCV():void{
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'Resume_KuikRuiLuan.pdf');
    link.setAttribute('download', 'Resume_KuikRuiLuan.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
