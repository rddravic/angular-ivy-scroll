import { Component, OnInit, VERSION } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  data: any = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getData().subscribe((val) => {
      console.log(val);
      this.data = val;
    });
    //this.data = this.appendData(this.data);
  }

  appendData(data) {
    let d = [...this.data, ...data];
    return d;
  }
}
