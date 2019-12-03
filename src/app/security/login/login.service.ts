import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { SDO_API } from "app/app.api";
// import { User } from "../../../../backend/users";
 
@Injectable()
export class LoginService{

    constructor(private http: HttpClient){}


    login(email: string, password: string): Observable<User>{
        // return this.http.post<User>(`${SDO_API}/login`,
        //  {email: email, password: password})
        return null
    }
}