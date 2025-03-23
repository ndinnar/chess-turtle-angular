import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-content',
    imports: [RouterOutlet, FooterComponent],
    templateUrl: './content.component.html',
    styleUrl: "./content.component.css"
})
export class ContentComponent {

}