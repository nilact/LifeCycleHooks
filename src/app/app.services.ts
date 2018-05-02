import {  Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



@Injectable()
export class AppServices
{
    constructor(private http: HttpClient) { }

    // search():Promise<any>
    // {
    //     this.http.get(`https://swapi.co/api/people/?search=${term}`).toPromise()
    //     .then((data: any) => {
    //       /* tslint:disable:no-console */
    //       console.time('request-length');
    //       console.log(data);
    //       console.timeEnd('request-length');
    //       this.results = data.results;
    //     });
    // }
}