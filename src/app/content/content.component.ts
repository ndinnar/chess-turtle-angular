import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrl: "./content.component.css",
    imports: [FooterComponent]
})
export class ContentComponent {

}