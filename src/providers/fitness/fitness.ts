import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Health, HealthQueryOptions, HealthQueryOptionsAggregated} from '@ionic-native/health';
import {query} from "@angular/core/src/animation/dsl";


/*
  Generated class for the FitnessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FitnessProvider {
  stepcount = null;

  constructor(private health: Health) {
    console.log('Hello FitnessProvider Provider');
    this.health.promptInstallFit().then(() => { alert("FIT OK")}).catch((error) => {alert(("propt error : " + JSON.stringify(error)))})
    this.health.isAvailable()
      .then((available: boolean) => {
        console.log(available);
        alert("available");
        this.health.requestAuthorization([
          'distance', 'nutrition','calories',  //read and write permissions
          {
            read: ['steps'],       //read only permission
            write: ['height', 'weight']  //write only permission
          }
        ])
          .then(res => alert("1"+res))
          .catch(e => alert("2 FCK"+e));
      })
      .catch(e =>

        //console.log(e)
        alert("3"+e)
      );
    this.loadHealthData();
  }

  loadHealthData() {
/*

    var stepOptions = {
      startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      HKQuantityTypeIdentifierStepCount:"steps",
      endDate: new Date(),
      dataType :"steps"
    }*/
    let queryOptions : HealthQueryOptionsAggregated = {
      startDate : new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate : new Date(),
      bucket :'day',
      dataType : 'steps',
      filtered : true
    };

   /* return this.health.queryAggregated(queryOptions).then(data=>{
    let stepSum = data;
      this.stepcount = stepSum;
     alert("9999"+JSON.stringify(this.stepcount));
      alert("cccccc"+this.stepcount[0].value);
     }, err => {
       alert('No steps: '+err);
    });*/

    return this.health.queryAggregated(queryOptions);


  }
  loadCaloriesData() {
    /*

     var stepOptions = {
     startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
     HKQuantityTypeIdentifierStepCount:"steps",
     endDate: new Date(),
     dataType :"steps"
     }*/
    let queryOptions : HealthQueryOptionsAggregated = {
      startDate : new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate : new Date(),
      bucket :'day',
      dataType : 'calories',
      filtered : true
    };

    /* return this.health.queryAggregated(queryOptions).then(data=>{
     let stepSum = data;
     this.stepcount = stepSum;
     alert("9999"+JSON.stringify(this.stepcount));
     alert("cccccc"+this.stepcount[0].value);
     }, err => {
     alert('No steps: '+err);
     });*/

    return this.health.queryAggregated(queryOptions);


  }

  loadDistanceData() {
    /*

     var stepOptions = {
     startDate: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
     HKQuantityTypeIdentifierStepCount:"steps",
     endDate: new Date(),
     dataType :"steps"
     }*/
    let queryOptions : HealthQueryOptionsAggregated = {
      startDate : new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
      endDate : new Date(),
      bucket :'day',
      dataType : 'distance',
      filtered : true
    };

    /* return this.health.queryAggregated(queryOptions).then(data=>{
     let stepSum = data;
     this.stepcount = stepSum;
     alert("9999"+JSON.stringify(this.stepcount));
     alert("cccccc"+this.stepcount[0].value);
     }, err => {
     alert('No steps: '+err);
     });*/

    return this.health.queryAggregated(queryOptions);


  }



}
