import { Component, Input, OnInit } from '@angular/core';
import { IDriverEvaluations } from '@core/interfaces/driver-evaluations.interface';

@Component({
  selector: 'stc-driver-table-view',
  templateUrl: './driver-table-view.component.html',
  styleUrls: ['./driver-table-view.component.scss'],
})
export class DriverTableViewComponent implements OnInit {
  @Input() drivers: Array<IDriverEvaluations> = [];
  @Input() filter: string = '';

  constructor() {}

  ngOnInit(): void {}
}
