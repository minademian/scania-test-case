import { NgModule } from '@angular/core';
import { defineCustomElements } from '@web-components/scania-fleetportal-dropdown/loader';
import { ScaniaFleetportalDropdown } from './proxies';

defineCustomElements(window);

@NgModule({
  imports: [],
  exports: [ScaniaFleetportalDropdown],
  declarations: [ScaniaFleetportalDropdown],
})
export class WebComponentsModule {}
