import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetPortalComponent } from './fleet-portal/fleet-portal.component';

const routes: Routes = [
  {
    path: 'home',
    component: FleetPortalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
