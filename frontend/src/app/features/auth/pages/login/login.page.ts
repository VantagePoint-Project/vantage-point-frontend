import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Necesario para el routerLink del HTML
import { TranslateModule } from '@ngx-translate/core'; // Necesario para el pipe de traducción

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, TranslateModule] 
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Intentando iniciar sesión con:', this.email);
  }
}