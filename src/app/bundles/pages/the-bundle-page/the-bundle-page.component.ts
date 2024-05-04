import { Component } from '@angular/core';
import {BundlesCardsComponent} from "../../components/bundles-cards/bundles-cards.component";

@Component({
  selector: 'app-the-bundle-page',
  standalone: true,
  imports: [
    BundlesCardsComponent
  ],
  templateUrl: './the-bundle-page.component.html',
  styleUrl: './the-bundle-page.component.css'
})
export class TheBundlePageComponent {

}
