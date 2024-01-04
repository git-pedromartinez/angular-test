import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MATERIAL = [MatButtonModule, MatTooltipModule, MatIconModule,MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MATERIAL],
  exports: [...MATERIAL],
})
export class MaterialModule {}
