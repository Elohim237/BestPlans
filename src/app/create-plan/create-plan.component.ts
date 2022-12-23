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

    if (result.sms==1 && result.call==1 && result.data==1){
       alert("on entre 1 priorite au plus deux fois")
      this.plans.reset();
     }
    if (result.sms==0 && result.call==0 && result.data==0){
      alert("on entre pas tout zero")
      this.plans.reset();
    }
    if(result.sms==1){
      if((result.call==1 && result.data==0) || (result.call==0 && result.data==1)){
        alert("on entre 1 au plus une fois ")
        this.plans.reset();
      }
    }
    if(result.call==1){
      if((result.sms==1 && result.data==0) || (result.sms==0 && result.data==1)){
        alert("on entre 1 au plus une fois ")
        this.plans.reset();
      }
    }
    if(result.data==1){
      if((result.sms==1 && result.call==0) || (result.sms==0 && result.call==1)){
        alert("on entre 1 au plus une fois ")
        this.plans.reset();
      }
    }
    this.userplan.showPlan(result).subscribe(
      (response: any) => {
        console.log(response) }
    );

  }
}
