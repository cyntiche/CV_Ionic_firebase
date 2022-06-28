import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  /* public appPages = [

    { title: 'Informations', url: 'informations', icon:'book'},
    { title: 'Comptes', url: 'comptes', icon:'book'},
    { title: 'Formation', url: 'diplome', icon:'book'},
    { title: 'Experience Professionnelle', url: 'experience', icon:'file-tray-full' },
    { title: 'Competences', url: 'competences', icon: 'compass' },
    { title: 'Langues', url: 'langues', icon: 'language' },
    { title: 'Loisirs', url: 'loisirs', icon: 'heart' },
  ]; */
  constructor(
    private router: Router
  ) {
     this.initApp();
  }

  initApp() {
    this.login();
  }
  private login() {
    this.router.navigateByUrl('/login');
  }
}
