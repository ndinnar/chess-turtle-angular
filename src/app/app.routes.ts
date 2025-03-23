import { Route } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';

export const routes: Route[] = [
  { path: '', component: HomeContentComponent },
  { path: 'contact', component: ContactContentComponent }
];