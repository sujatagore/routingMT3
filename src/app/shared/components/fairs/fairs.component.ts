import { Component, OnInit } from '@angular/core';
import { IFair } from '../../module/fairs.interface';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fairs',
  templateUrl: './fairs.component.html',
  styleUrls: ['./fairs.component.scss']
})
export class FairsComponent implements OnInit {

  fairData !: Array<IFair>

  constructor(
    private _fairsService : FairsService
  ) { }

  ngOnInit(): void {
    this._fairsService.fetchAllFairs()
        .subscribe((fair)=>{
          this.fairData= fair
        })
  }

}
