import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

  interface Timeline {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {


  // ============================
  // TIMELINE
  // ============================

  timeline: Timeline[] = [
    {
      year: '2022',
      title: 'Bachelor Of Engineering',
      description: 'Electronics and Communication | 81%',
      position: 'left'
    },
    {
      year: '2018',
      title: 'HSC (12th)',
      description: 'Science | 63.%',
      position: 'right'
    },
    {
      year: '2016',
      title: 'SSLC (10th)',
      description: '92.32%',
      position: 'left'
    }
  ];

}
