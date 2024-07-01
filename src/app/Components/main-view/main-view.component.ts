import { Component } from '@angular/core';
import { TopBarComponent } from "../app/top-bar/top-bar.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "../app/footer/footer.component";

@Component({
    selector: 'app-main-view',
    standalone: true,
    templateUrl: './main-view.component.html',
    styleUrl: './main-view.component.css',
    imports: [TopBarComponent, ContentComponent, FooterComponent]
})
export class MainViewComponent {

}
