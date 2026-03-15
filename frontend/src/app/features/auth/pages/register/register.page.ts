import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, TranslateModule]
})
export class RegisterPage implements OnInit {
  username = '';
  email = '';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onRegister() {
    console.log('Datos de registro:', {
      usuario: this.username,
      correo: this.email,
      clave: this.password
    });
  }
}