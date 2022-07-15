import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule { }