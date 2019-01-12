// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { CommentService } from './comment.service';
// import { NgbdModalComponent } from '../modal';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// // import { CommentViewComponent } from './comment-view-component';

// @Component({
//   selector: 'app-comment',
//   template : `
//   <br><br>

//   <button (click)="onClick()"> Add New Complaint</button>
//   <div *ngIf="complaints.length>0; else noComplaint;">

//     <table border='1'>
//       <tr>
//         <th>Heading</th>
//         <th>Status</th>
//         <th>Created At</th>
//         <th>Updated At</th>
//         <th>Action</th>
//       </tr>

//       <tr *ngFor="let complaint of complaints;">
//         <td>{{complaint?.heading}}</td>
//         <td>{{complaint?.status}}</td>
//         <td>{{complaint?.created_at}}</td>
//         <td>{{complaint?.updated_at}}</td>
//         <td> <button (click)="onClickView(complaint)"> View </button> | Comment</td>
//       </tr>
//     </table>
//   </div>
//   <ng-template #noComplaint>No complaint lodge by you.</ng-template> 
//   `
// })
// export class CommentComponent implements OnInit {
//   @Output() passComplaint: EventEmitter<any> = new EventEmitter();
//   complaints: any = [];
//   constructor(private commentService: CommentService , private modal: NgbModal) {
//     const userId = 103;
//     this.commentService.getCommentByUser(userId).subscribe(data => {
//       // console.log(' complaints  ', data);
//       this.complaints = data;
//     }, err => {
//       // console.log(' complaint err ', err);
//     });
//   }
//   onClick() {
//     // this.modal.open(NgbdModalComponent);
//   }

//   onClickView(complaint) {
//     // const cvRef = this.modal.open(ComplaintViewComponent);
//     // cvRef.componentInstance.complaintData = complaint;

//     // this.passComplaint.emit(complaint);

//     // // cvRef.componentInstance.passComplaint.subscribe((receivedEntry) => {
//     // //   console.log(receivedEntry);
//     // // });
//     // cvRef.result.then(result => {
//     //   // do something with result
//     // }).catch(cvRefErr => {
//     //   //
//     // });
//   }
//   ngOnInit() {
//   }

// }
