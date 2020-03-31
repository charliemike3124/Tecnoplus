import { Component, HostListener,OnInit } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navbarCollapse',[
      state('initial', style({
        'background-color': 'transparent',
        padding: '10px 10px 10px 10px'
      })),
      state('final', style({
        'background-color': 'var(--blue)',
        padding: '0px 0px 0px 0px'
      })),
      transition('initial=>final', animate('350ms')),
      transition('final=>initial', animate('350ms')),
    ])
  ]
})
export class AppComponent {
  public navbarHidden: boolean = true;
  public collapsed: boolean = false;
  public items: any;
  public windowWidth: number;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 1080)
      this.navbarHidden = false;
    else
      this.navbarHidden = true;

  }

  @HostListener("window:scroll", [])
  onScroll(): void {

    if (this.windowWidth >= 1080) {
      if (window.scrollY == 0) {
        this.navbarHidden = true;
      }
      else {
        this.navbarHidden = false
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth <= 1080) {
      this.navbarHidden = false;
    }
    else
    {
      this.collapsed = false;
      this.navbarHidden = true;
    }
    
  }

}
