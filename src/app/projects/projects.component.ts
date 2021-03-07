import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      'name': 'El Pollo Loco',
      'image': '../../assets/img/pollo.png',
      'description': 'Jump and run game based on JavaScript.',
      'link': 'http://eileen-moore.developerakademie.com/El%20Pollo%20Loco/'
    }, {
      'name': 'JOIN',
      'image': '../../assets/img/join.png',
      'description': 'Group project of a business application.',
      'link': 'http://gruppe-51b.developerakademie.com/'
    }, {
      'name': 'Kochwelt',
      'image': '../../assets/img/kochwelt.png',
      'description': 'Group project of a german cooking website.',
      'link': 'http://eileen-gunnar-mohsan.developerakademie.com/'
    }, {
      'name': 'Lieferondo',
      'image': '../../assets/img/lieferondo.png',
      'description': 'Replication of a food delivery website.',
      'link': 'http://eileen-moore.developerakademie.com/Lieferando/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
