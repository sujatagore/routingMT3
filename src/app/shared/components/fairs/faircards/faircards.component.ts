import { Component, Input, OnInit } from '@angular/core';
import { IFair } from 'src/app/shared/module/fairs.interface';

@Component({
  selector: 'app-faircards',
  templateUrl: './faircards.component.html',
  styleUrls: ['./faircards.component.scss']
})
export class FaircardsComponent implements OnInit {

  @Input() fairObj !: IFair;

  constructor() { }

  ngOnInit(): void {
  }

}
