import { Component, OnInit } from '@angular/core';
import { ToasterPosition } from 'ng-angular-popup';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ToasterPosition = ToasterPosition;


  ngOnInit(): void {

  }




}
