import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppNavBar } from './app/navbar/navbar.component';
bootstrapApplication(AppNavBar, appConfig)
  .catch((err) => console.error(err));
