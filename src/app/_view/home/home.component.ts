import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private commonSrvc: CommonService) { }

  ngOnInit() {
    this.commonSrvc.setTitle("Home");
    this.commonSrvc.updateDescription();
  }

}
