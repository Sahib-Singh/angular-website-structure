import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  windowScroll() {
    const navbar = document.getElementById("scroll_top");
    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop > 500) {
      navbar.style.display = 'block';;
    } else {
      navbar.style.display = 'none';;
    }
  }

  pushToTop() {

    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 65); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

}
