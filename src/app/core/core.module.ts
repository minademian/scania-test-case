import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableFilterPipe } from './pipes/table-filter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TableFilterPipe],
  exports: [TableFilterPipe],
})
export class CoreModule {}
