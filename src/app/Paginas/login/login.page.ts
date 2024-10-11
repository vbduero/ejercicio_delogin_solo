import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async onLogin() {

    const validarUser = 'jorge';
    const validarPassword = '1234';

    if (this.user === validarUser && this.password === validarPassword) {
      
      this.router.navigate(['/entra']);
    } else {
      
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrecta.',
        buttons: ['Una vez mas']
      });
      await alert.present();
    }
  }

}
