import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogBodyComponent} from '../dialog-body/dialog-body.component';
import {timer} from 'rxjs';
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  num = [];
  time;
  random;
  Condition = {squareCan: false, circleCan: false, triangleCan: false};
  constructor(private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.timer();
  }
  timer() {
    const source = timer(0, 1000);
    const subscribe = source.subscribe(val => this.time = val);
  }
  randomNumber() {
    this.random = Math.floor(Math.random() * Math.floor(100));
    this.getRender(this.random);
    const obj = {Time: this.time, Num: this.random};
    this.num.push(obj);
    console.log(this.num);
  }

  getRender(random) {
    if ((random >= 0) && (random < 33)) {
      return this.Condition = {squareCan: true, circleCan: false, triangleCan: false};
    } else {
      if ((random >= 33) && (random < 66)) {
        return this.Condition = {squareCan: false, circleCan: true, triangleCan: false};
      } else {
        if ((random >= 66) && (random <= 100)) {
          return this.Condition = {squareCan: false, circleCan: false, triangleCan: true};
        }
      }
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.num;
    dialogConfig.maxWidth = '50vw';
    dialogConfig.maxHeight = '70vw';
    this.matDialog.open(DialogBodyComponent, dialogConfig);
  }
}
