import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menuPages = [
    { title: 'Mon Profil', url: '/menu/informations', icon:'book'},
    { title: 'Competences', url: '/menu/competences', icon: 'compass' },
    { title: 'Formation', url: '/menu/diplome', icon:'book'},
    { title: 'Experiences', url: '/menu/experience', icon:'file-tray-full' },
    { title: 'Loisirs', url: '/menu/loisirs', icon: 'heart' },
    { title: 'Langues', url: '/menu/langues', icon: 'language' },
    { title: 'Liens', url: '/menu/comptes', icon:'book'},
    { title: 'Logout', url: '/login', icon:'log-out'},
  ];
  constructor() { }

  ngOnInit() {
  }
  onMenuItem(p){

  }
}
