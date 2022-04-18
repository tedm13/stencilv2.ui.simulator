import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/shared/material.module';

import { PreviewComponent } from '@app/shared/preview/preview.component';
import { DraggingComponent } from '@app/shared/dragging/dragging.component';
import { EditButtonComponent } from '@app/shared/edit-button/edit-button.component';
import { SaveButtonComponent } from '@app/shared/save-button/save-button.component';
import { CancelButtonComponent } from '@app/shared/cancel-button/cancel-button.component';
import { EditorSidebarComponent } from '@app/editor/editor-sidebar/editor-sidebar.component';
import { CopyButtonComponent } from '@app/shared/copy-button/copy-button.component';
import { VersionButtonComponent } from './version-button/version-button.component';

@NgModule({
  declarations: [
    PreviewComponent,
    DraggingComponent,
    EditButtonComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    EditorSidebarComponent,
    CopyButtonComponent,
    VersionButtonComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    PreviewComponent,
    DraggingComponent,
    EditButtonComponent,
    SaveButtonComponent,
    CancelButtonComponent,
    EditorSidebarComponent,
    CopyButtonComponent,
    VersionButtonComponent,
  ],
})
export class SharedModule {}
