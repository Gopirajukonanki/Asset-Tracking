import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetTrackingRoutingModule } from './asset-tracking-routing.module';
import { AssetRequisitionFormComponent } from './asset-requisition-form/asset-requisition-form.component';
import { AddEditAssetRequisitionFormComponent } from './add-edit-asset-requisition-form/add-edit-asset-requisition-form.component';
import {FormsModule} from "@angular/forms";
import {NgbPaginationModule, NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {ImageCropperModule} from "ngx-image-cropper";
import {ImageuploadComponent} from "../imageupload/imageupload.component";
import {ModalModule} from "ngb-modal";


@NgModule({
  declarations: [
    AssetRequisitionFormComponent,
    AddEditAssetRequisitionFormComponent,
      ImageuploadComponent
  ],
    imports: [
        CommonModule,
        AssetTrackingRoutingModule,
        FormsModule,
        NgbPaginationModule,
        NgSelectModule,
        NgbPopoverModule,
        ImageCropperModule,
        ModalModule,
    ],
    exports: [ImageuploadComponent]
})
export class AssetTrackingModule { }
