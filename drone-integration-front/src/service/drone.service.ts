import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable()
export class DroneService {
    constructor(private http:HttpClient){}

    chamadaApiDrone(drone:object): Observable<any>{
        try {
            return this.http.post("server/drone/add", drone, {responseType: 'text'});
        } catch (error) {
            console.log(error)
        }       
    }
}