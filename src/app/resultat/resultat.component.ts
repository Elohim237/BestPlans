import {Component, OnInit} from '@angular/core';
import {UserplanService} from "../services/userplan.service";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss']
})
export class ResultatComponent implements OnInit{

  constructor(private userplan: UserplanService) {
  }
  Fhemle:any;
  test:any;
  ngOnInit(){
    this.Fhemle=this.userplan.getAll();
    //console.log(this.Fhemle)

   // console.log(this.Fhemle[0]);
   // console.log(this.userplan.getHemle());
    //console.log(this.userplan.getMango());
  }

}
