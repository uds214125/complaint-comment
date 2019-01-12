// // tslint:disable
// import { Component, Input, OnInit } from "@angular/core";
// import {
//   FormGroup,
//   FormBuilder,
//   Validators,
//   FormControl,
//   FormArray
// } from "@angular/forms";
// import {
//   NgbModal,
//   ModalDismissReasons,
//   NgbActiveModal
// } from "@ng-bootstrap/ng-bootstrap";

// @Component({
//   selector: "comment-view-app",
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">{{heading}}</h4>
//       <button
//         type="button"
//         class="close"
//         aria-label="Close"
//         (click)="activeModal.dismiss('Cross click')"
//       >
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//         <span>{{description}}</span> <br>
//         <span>{{created_at}}</span> <br>
//         <span>{{updated_at}}</span>
//     </div>
//     <div class="modal-footer">
//       <!--<button
//         type="button"
//         class="btn btn-success"
//         (click)="activeModal.close('Close click')">
//         Close
//       </button> -->
//     </div>
//   `
// })
// export class CommentViewComponent implements OnInit {
//   closeResult: string;
//   complaintData: any;
//   // @Input() passComplaint;

//   heading:any = "";
//   description:any = "";
//   comment:any = "";
//   created_at:any = "";
//   updated_at:any = "";

//   constructor(public activeModal: NgbActiveModal) {
//   }

//   ngOnInit() {
//     // displays the created and last updated dates and any comments made by an agent
//     // or that customer on that complaint in the timely order.
//     console.log(" complaintData : ", this.complaintData);
//     const { created_at ,description , heading, updated_at, status, user_id, _id } = this.complaintData;
//     this.heading = heading;
//     this.description = description;
//     this.updated_at = updated_at;
//     this.created_at = created_at;
//   }

   

//   //   constructor(private modalService: NgbModal) {}

//   //   open(content) {
//   //       const obj: any = {ariaLabelledBy: 'modal-basic-title'};
//   //     this.modalService.open(content, obj).result.then((result) => {
//   //       this.closeResult = `Closed with: ${result}`;
//   //     }, (reason) => {
//   //       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//   //     });
//   //   }

//   //   private getDismissReason(reason: any): string {
//   //     if (reason === ModalDismissReasons.ESC) {
//   //       return 'by pressing ESC';
//   //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//   //       return 'by clicking on a backdrop';
//   //     } else {
//   //       return  `with: ${reason}`;
//   //     }
//   //   }
// }
