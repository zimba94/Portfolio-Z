import { ElementRef } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  changeFade = false;

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  changeScrollFade($event){
    const scrollOffset: DoubleRange = $event.srcElement.children[0].scrollTop;
    if (scrollOffset >= 400) {
      this.changeFade = true;
    }else{
      this.changeFade = false;
    }
  }

  // tslint:disable-next-line:typedef
  changeShowNavbar(){
    const myTag = this.elemento.nativeElement.querySelector('#navbarSupportedContent');
    myTag.classList.remove('show');
  }

}
