import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ComplaintComponent } from './complaint/complaint.component';
import { ComplaintService } from './complaint/complaint.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { CreateComplaintComponent } from './complaint/create-complaint.component';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { ComplaintViewComponent } from './complaint/complaint-view-component';
import { CommentService } from './comment/comment.service';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [ComplaintComponent, CreateComplaintComponent, ComplaintViewComponent ],
  providers: [ ComplaintService , CommentService, NgbModalStack],
  entryComponents: [CreateComplaintComponent, ComplaintViewComponent]
})
export class CoreModule { }
