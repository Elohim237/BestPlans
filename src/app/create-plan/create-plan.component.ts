import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {UserplanService} from "../services/userplan.service";

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
  constructor(private userplan : UserplanService) {
  }
  choiseplan(){
      let result={amount:this.plans.value.amount,sms:parseInt(<string>this.plans.value.sms) ,call:parseInt(<string>this.plans.value.appel),data:parseInt(<string>this.plans.value.data),validity:parseInt(<string>this.plans.value.validity)}
      console.log(result);
    this.userplan.showPlan(result).subscribe(
      (response: any) => {
        console.log(response) }
    );

    // if (result.sms==1 && result.call==1 && result.data==1){
    //   alert("on entre 1 priorite au plus une fois")
    // }
    // if(result.sms==1 && ((result.call ==1 && result.data !=1)||(result.call !=1 && result.data ==1))){
    //   alert("on entre 1 priorite au plus une fois")
    // }
    // if(result.data==1 && (result.call ==1 && result.sms !=1) || (result.call !=1 && result.data ==1)){
    //   alert("on entre 1 priorite au plus une fois")
    // }
    // if(result.call==1 && (result.sms ==1 && result.data !=1) || (result.sms !=1 && result.data ==1)){
    //   alert("on entre 1 priorite au plus une fois")
    // }
    // if (result.sms==0 && result.call==0 && result.data===0){
    //   alert("Erreur revoie tes priorités")
    // }
    // if(result.sms==2 || result.sms==3) {
    //   if (result.data != 1 && result.call != 1) {
    //     alert("Entre 1 au moins une fois d'ans une priorité")
    //   }
    // }
    // if(result.data==2 || result.data==3) {
    //   if (result.sms != 1 && result.call != 1) {
    //     alert("Entre 1 au moins une fois d'ans une priorité")
    //   }
    // }
    // if(result.call==2 || result.call==3) {
    //   if (result.sms != 1 && result.data != 1) {
    //     alert("Entre 1 au moins une fois d'ans une priorité")
    //   }
    // }

  }
}
