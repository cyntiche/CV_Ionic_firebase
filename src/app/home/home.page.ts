import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [

    { title: 'Informations', url: 'informations', icon:'book'},
    { title: 'Comptes', url: 'comptes', icon:'book'},
    { title: 'Formation', url: 'diplome', icon:'book'},
    { title: 'Experience Professionnelle', url: 'experience', icon:'file-tray-full' },
    { title: 'Competences', url: 'competences', icon: 'compass' },
    { title: 'Langues', url: 'langues', icon: 'language' },
    { title: 'Loisirs', url: 'loisirs', icon: 'heart' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
