import { Component, OnInit } from '@angular/core';
import drivers from '@data/driver-evaluations.json';

@Component({
  selector: 'stc-fleet-portal',
  templateUrl: './fleet-portal.component.html',
  styleUrls: ['./fleet-portal.component.scss'],
})
export class FleetPortalComponent implements OnInit {
  drivers = drivers;
  dropdownItems: Array<Object> = [
    {
      value: 'less',
      label: '<= 200.00km',
    },
    {
      value: 'more',
      label: '> 200.00 km',
    },
  ];
  filter: string = '';

  constructor() {}

  public resetTable() {
    this.filter = '';
  }

  public onToggle(event: Event) {
    let castedEvent: CustomEvent = event as CustomEvent;
    this.filter = castedEvent.detail.range.value;
  }

  ngOnInit(): void {}
}
