import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Browse',
      url: '/browsing',
      icon: 'paw'
    },
    {
      title: 'Likes',
      url: '/likes',
      icon: 'heart'
    },
    {
      title: 'Filter',
      url: '/filter',
      icon: 'options'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  user: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.user$.subscribe(res => {
        this.user = res;
        if(!res && !(this.router.url=="/login" || 
                    this.router.url=="/signup" || 
                    this.router.url=="/adopter-signup" || 
                    this.router.url=="/shelter-signup" ||
                    this.router.url=="/logout")){
          this.router.navigate(["/login"]);
        }
      });
    });
  }
}
