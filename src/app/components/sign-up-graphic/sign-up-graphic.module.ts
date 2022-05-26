import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// App libraries
import { EditableModule } from '@ngneat/edit-in-place';
import { SortablejsModule } from 'ngx-sortablejs';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

import { SignUpGraphicComponent } from '@app/components/sign-up-graphic/container/sign-up-graphic.component';
import { GraphicSelectorComponent } from './graphic-selector/graphic-selector.component';

@NgModule({
  declarations: [SignUpGraphicComponent, GraphicSelectorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    EditableModule,
    SortablejsModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [SignUpGraphicComponent, GraphicSelectorComponent],
})
export class SignUpGraphicModule {}
