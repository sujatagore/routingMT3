import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IFair } from 'src/app/shared/module/fairs.interface';
import { FairsService } from 'src/app/shared/services/fairs.service';

@Component({
  selector: 'app-fairdetails',
  templateUrl: './fairdetails.component.html',
  styleUrls: ['./fairdetails.component.scss']
})
export class FairdetailsComponent implements OnInit {

  fairId !: string;
  fairInfo !: IFair;

  constructor(
    private _fairsServices : FairsService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._routes.params
      .subscribe((params: Params)=>{
        this.fairId = params['fairId'];
        if (this.fairId) {
          this._fairsServices.getFairInfo(this.fairId)
              .subscribe(res =>{
                this.fairInfo = res!;
              })
        }
      })
  }

}
