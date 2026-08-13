import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
  percentage: number;
}

interface FeaturedSkill {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // ===========================
  // SEARCH
  // ===========================

  searchText: string = '';

  // ===========================
  // CATEGORY
  // ===========================

  selectedCategory: string = 'All';

  // ===========================
  // SKILLS
  // ===========================

  skills: Skill[] = [

    {
      id: 1,
      name: 'Angular',
      icon: 'fab fa-angular',
      category: 'Frontend',
      percentage: 90
    },

    {
      id: 2,
      name: 'HTML',
      icon: 'fab fa-html5',
      category: 'Frontend',
      percentage: 95
    },

    {
      id: 3,
      name: 'CSS',
      icon: 'fab fa-css3-alt',
      category: 'Frontend',
      percentage: 90
    },

    {
      id: 4,
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      category: 'Frontend',
      percentage: 88
    },

    {
      id: 5,
      name: 'JavaScript',
      icon: 'fab fa-js',
      category: 'Frontend',
      percentage: 85
    },

    {
      id: 6,
      name: 'TypeScript',
      icon: 'fas fa-code',
      category: 'Frontend',
      percentage: 85
    },

    {
      id: 7,
      name: 'Node.js',
      icon: 'fab fa-node-js',
      category: 'Backend',
      percentage: 65
    },

    {
      id: 8,
      name: 'Git',
      icon: 'fab fa-git-alt',
      category: 'Tools',
      percentage: 85
    },

    {
      id: 9,
      name: 'GitHub',
      icon: 'fab fa-github',
      category: 'Tools',
      percentage: 85
    },

    {
      id: 10,
      name: 'VS Code',
      icon: 'fas fa-laptop-code',
      category: 'Tools',
      percentage: 90
    },

    {
      id: 11,
      name: 'Figma',
      icon: 'fab fa-figma',
      category: 'Others',
      percentage: 70
    },

    {
      id: 12,
      name: 'Responsive Design',
      icon: 'fas fa-mobile-alt',
      category: 'Frontend',
      percentage: 92
    }

  ];

  // ===========================
  // FILTERED LIST
  // ===========================

  filteredSkills: Skill[] = [];

  // ===========================
  // FEATURED
  // ===========================

  featuredSkills: FeaturedSkill[] = [

    {
      id: 1,
      icon: 'fas fa-bolt',
      title: 'Fast Learner',
      description: 'Placeholder'
    },

    {
      id: 2,
      icon: 'fas fa-users',
      title: 'Team Player',
      description: 'Placeholder'
    },

    {
      id: 3,
      icon: 'fas fa-lightbulb',
      title: 'Problem Solver',
      description: 'Placeholder'
    },

    {
      id: 4,
      icon: 'fas fa-rocket',
      title: 'Quick Delivery',
      description: 'Placeholder'
    }

  ];

  constructor() {}

  ngOnInit(): void {

    this.filteredSkills = [...this.skills];

    AOS.init({

      duration: 900,

      once: true,

      easing: 'ease-in-out'

    });

  }

  // ===========================
  // CATEGORY FILTER
  // ===========================

  selectCategory(category: string): void {

    this.selectedCategory = category;

    this.filterSkills();

  }

  // ===========================
  // SEARCH + FILTER
  // ===========================

  filterSkills(): void {

    this.filteredSkills = this.skills.filter(skill => {

      const matchCategory =

        this.selectedCategory === 'All'

        ||

        skill.category === this.selectedCategory;

      const matchSearch =

        skill.name

        .toLowerCase()

        .includes(this.searchText.toLowerCase());

      return matchCategory && matchSearch;

    });

  }

  // ===========================
  // TRACK BY
  // ===========================

  trackBySkill(index: number, item: Skill): number {

    return item.id;

  }

  trackByFeatured(index: number, item: FeaturedSkill): number {

    return item.id;

  }

}