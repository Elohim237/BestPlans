import {Component, OnInit} from '@angular/core';
import { BundleItems, UserplanService} from "../services/userplan.service";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit{

  constructor(private userplan: UserplanService) {
  }
  hemles!: Map<string, BundleItems>;
  mangos!: Map<string, BundleItems>;
  test:any;
  ngOnInit(){
    this.hemles = this.userplan.getHemle();
    this.mangos = this.userplan.getMango();
    console.log('Hemles ', this.hemles);
    console.log('Mangos  ', this.mangos);
  }

}
