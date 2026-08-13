import { Component,AfterViewInit  } from '@angular/core';
import Typed from 'typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

   ngAfterViewInit(): void {

    AOS.init({
      duration: 1000,
      once: true
    });

    new Typed('#typing', {

      strings: [

        'Placeholder One',

        'Placeholder Two',

        'Placeholder Three'

      ],

      typeSpeed: 80,

      backSpeed: 40,

      backDelay: 1500,

      loop: true

    });
  }
}
