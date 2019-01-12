import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComplaintService } from './complaint.service';
import { CreateComplaintComponent } from './create-complaint.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComplaintViewComponent } from './complaint-view-component';

@Component({
  selector: 'app-complaint',
  template : `
  <nav style="height:80px; width:100%; background-color: black; color:white;">
    <div style="float: left; margin : auto 0;">
        <a class="navbar-brand" href="#">Complaint&Comment System</a>
    </div>
      <div style="float: right; margin-right: 10px;">
        <li>{{user}}</li>
        <li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
      </div>
    </nav>

  <div class="container"><br><br>
  <button (click)="onAddComment()"> Add New Complaint </button> <br><br>
  <div *ngIf="complaints.length>0; else noComplaint;">

    <table border='1' class="table">
      <tr>
        <th>Heading</th>
        <th>Status</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Action</th>
      </tr>

      <tr *ngFor="let complaint of complaints;">
        <td>{{complaint?.heading}}</td>
        <td>{{complaint?.status}}</td>
        <td>{{complaint?.created_at}}</td>
        <td>{{complaint?.updated_at}}</td>
        <td> <button (click)="onClickView(complaint)"> View </button> |
        <button (click)="onClickComment(complaint)"> Comment </button></td>
      </tr>
    </table>
  </div>
  <ng-template #noComplaint>No complaint lodge by you.</ng-template>
  </div>
  `
})
export class ComplaintComponent implements OnInit {
  @Output() passComplaint: EventEmitter<any> = new EventEmitter();
  complaints: any = [];
  user;
  constructor(private complaintService: ComplaintService , private modal: NgbModal) {

    this.user = JSON.parse(localStorage.getItem('currentUser')).email;

    this.complaintService.getComplaintsByUser().subscribe(data => {
      // console.log(' complaints  ', data);
      this.complaints = data;
    }, err => {
      // console.log(' complaint err ', err);
    });
  }
  onAddComment() {
    this.modal.open(CreateComplaintComponent);
  }

  ngOnInit() {
  }

  onClickView(complaint) {
    const cvRef = this.modal.open(ComplaintViewComponent);
    cvRef.componentInstance.complaintData = complaint;

    this.passComplaint.emit(complaint);

    // cvRef.componentInstance.passComplaint.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // });
    cvRef.result.then(result => {
      // do something with result
    }).catch(cvRefErr => {
      //
    });
  }
  onClickComment(complaint) {
    const cvRef = this.modal.open(ComplaintViewComponent);
    cvRef.componentInstance.complaintData = complaint;
    cvRef.componentInstance.isComment = true;

    // this.passComplaint.emit(complaint);

    // cvRef.componentInstance.passComplaint.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // });
    cvRef.result.then(result => {
      // do something with result
    }).catch(cvRefErr => {
      //
    });
  }


}
