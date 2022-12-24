import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {UserplanService} from "../services/userplan.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent {
  plans = new FormGroup({
    amount: new FormControl(),
    sms: new FormControl(),
    appel: new FormControl(),
    data: new FormControl(),
    validity: new FormControl()
  });
  Hemle !:any;
  Mango !:any;
  All!:any;
  constructor(private userplan : UserplanService,private router:Router) {
  }
  // @ts-ignore
  choiseplan(){
      let result={amount:this.plans.value.amount,sms:parseInt(<string>this.plans.value.sms) ,call:parseInt(<string>this.plans.value.appel),data:parseInt(<string>this.plans.value.data),validity:parseInt(<string>this.plans.value.validity)}
      console.log(result);

   if (result.sms==1 && result.call==1 && result.data==1){
       alert("Aucun forfait correspondant")
      this.plans.reset();
     }
    else if (result.sms==0 && result.call==0 && result.data==0){
     alert("Aucun forfait correspondant")
      this.plans.reset();
    }
    else if((result.sms==1 && result.call==1 && result.data==0) || (result.sms==1 && result.call==0 && result.data==1)){
     alert("Aucun forfait correspondant")
     this.plans.reset();
   }
    else if((result.call==1 && result.sms==1 && result.data==0) || (result.call==1 && result.sms==0 && result.data==1)){
        alert("Aucun forfait correspondant")
        this.plans.reset();
      }
    else if((result.data==1 && result.sms==1 && result.call==0) || (result.data==1 && result.sms==0 && result.call==1)){
        alert("Aucun forfait correspondant")
        this.plans.reset();
      }
    else{
      this.userplan.showPlan(result).subscribe(
        (response: any) => {
          this.Hemle = this.userplan.setHemle(response.Hemle);
          this.Mango = this.userplan.SetMango(response.Mango);
          console.log(this.Hemle);
          console.log(this.Mango);
          this.router.navigate(['/resultat'])
        }
      );
    }

  }
}
