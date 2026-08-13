import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

interface InfoCard {
  label: string;
  value: string;
}

interface Statistic {
  icon: string;
  count: number;
  title: string;
}

interface Timeline {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // ============================
  // ABOUT INFORMATION
  // ============================

  infoCards: InfoCard[] = [
    {
      label: 'Label',
      value: 'Value'
    },
    {
      label: 'Label',
      value: 'Value'
    },
    {
      label: 'Label',
      value: 'Value'
    },
    {
      label: 'Label',
      value: 'Value'
    }
  ];

  // ============================
  // STATISTICS
  // ============================

  statistics: Statistic[] = [
    {
      icon: 'fas fa-award',
      count: 0,
      title: 'Placeholder'
    },
    {
      icon: 'fas fa-laptop-code',
      count: 0,
      title: 'Placeholder'
    },
    {
      icon: 'fas fa-users',
      count: 0,
      title: 'Placeholder'
    },
    {
      icon: 'fas fa-star',
      count: 0,
      title: 'Placeholder'
    }
  ];

  // ============================
  // TIMELINE
  // ============================

  timeline: Timeline[] = [
    {
      year: 'Year',
      title: 'Title',
      description: 'Description',
      position: 'left'
    },
    {
      year: 'Year',
      title: 'Title',
      description: 'Description',
      position: 'right'
    },
    {
      year: 'Year',
      title: 'Title',
      description: 'Description',
      position: 'left'
    }
  ];

  // ============================
  // ACHIEVEMENTS
  // ============================

  achievements: Achievement[] = [
    {
      icon: 'fas fa-medal',
      title: 'Achievement',
      description: 'Description'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Achievement',
      description: 'Description'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Achievement',
      description: 'Description'
    }
  ];

  constructor() {}

  ngOnInit(): void {

    AOS.init({
      duration: 1000,
      once: true,
      offset: 120
    });

    this.animateCounters();

  }

  // ============================
  // COUNTER ANIMATION
  // ============================

  animateCounters(): void {

    this.statistics.forEach(stat => {

      const target = stat.count;

      stat.count = 0;

      const speed = 25;

      const increment = target / 40;

      const counter = setInterval(() => {

        stat.count += increment;

        if (stat.count >= target) {

          stat.count = target;

          clearInterval(counter);

        }

      }, speed);

    });

  }

}