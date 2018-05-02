import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';
  userText:string='Nilesh';
  private results = [];
  oterm : FormControl;
  constructor(private http: HttpClient) {
    this.oterm = new FormControl();
   }

  private search(term) {
    console.log(term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`).toPromise()
    .then((data: any) => {
      /* tslint:disable:no-console */
      console.time('request-length');
      console.log(data);
      console.timeEnd('request-length');
      this.results = data.results;
    });
  }

  ngOnInit() {
    this.oterm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(searchTerm => {
        this.http.get(`https://swapi.co/api/people/?search=${searchTerm}`)
        .subscribe((data: any) => {
          /* tslint:disable:no-console */
          console.time('request-length');
          console.log(data);
          console.timeEnd('request-length');
          this.results = data.results;
        });
      });
  }


}
