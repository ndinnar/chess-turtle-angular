import { Route } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { TheLondonSystemContentComponent } from './the-london-system-content/the-london-system-content.component';
import { TheKingsIndianDefenseContentComponent } from './the-kings-indian-defense-content/the-kings-indian-defense-content.component';
import { WhatAreOpeningsContentComponent } from './what-are-openings-content/what-are-openings-content.component';

export const routes: Route[] = [
  { path: '', component: HomeContentComponent },
  { path: 'contact', component: ContactContentComponent },
  { path: 'openings/what-are-openings', component: WhatAreOpeningsContentComponent },
  { path: 'openings/the-london-system', component: TheLondonSystemContentComponent },
  { path: 'openings/the-kings-indian-defense', component: TheKingsIndianDefenseContentComponent }
];