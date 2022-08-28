import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { WebComponentsModule } from 'src/libs/web-components.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { FleetPortalComponent } from './fleet-portal/fleet-portal.component';
import { DriverTableViewComponent } from './driver-table-view/driver-table-view.component';

@NgModule({
  declarations: [AppComponent, FleetPortalComponent, DriverTableViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, AppRoutingModule, WebComponentsModule, CoreModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
