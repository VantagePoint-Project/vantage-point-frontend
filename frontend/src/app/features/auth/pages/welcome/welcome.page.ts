import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
// Importamos las herramientas de iconos
import { addIcons } from 'ionicons';
import { trendingUpOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonContent, CommonModule, FormsModule,
    RouterModule,
    TranslateModule
  ]
})
export class WelcomePage implements OnInit {
  constructor() {
    // Registramos el icono específico que usaste en el HTML
    addIcons({ 'trending-up-outline': trendingUpOutline });
  }

  ngOnInit() {}
}
