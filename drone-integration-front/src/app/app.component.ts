import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DroneService } from '../service/drone.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http:HttpClient, private droneService:DroneService){}

  form:FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      idDrone: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      temperatura: new FormControl('', Validators.required),
      humidade: new FormControl('', Validators.required),
    });
    console.log(this.form.value);

  }

  Drone(){      
        this.droneService.chamadaApiDrone(this.form.value).subscribe(data=>{
          const drones = data;
          console.log(drones);
        })
  }

  formatLabelTempHumi(value: number) {
    if (value >= 100) {
      return Math.round(value);
    }

    return value;
  }
}
