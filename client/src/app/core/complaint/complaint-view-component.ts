// tslint:disable
import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from "@angular/forms";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from "@ng-bootstrap/ng-bootstrap";
import { CommentService } from "../comment/comment.service";

@Component({
  selector: "complaint-view-app",
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{heading}}</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
        <span>{{description}}</span> <br>
        <span>{{created_at | date: 'yyyy/MM/dd h:mm:ss a'}}</span> <br>
        <span>{{updated_at}}</span>
    </div>
    <div *ngIf="ecomment">
      <div style="float: left; margin-left:10px;">Comments &nbsp; <br>
      {{comments.comment}} <small>{{comments.timestamp | date: 'yyyy-MM-dd'}}</small>
      </div>
    </div>
    <div class="modal-footer" *ngIf="tcomment">
      <form action="#" [formGroup]="commentForm" (ngSubmit)="onSubmit()" autocomplete="off" novalidate>
        <textarea type="text" formControlName="comment"></textarea>
        <button
          type="submit"
          class="btn btn-success"> Comment
        </button>
      </form>
      <!--<button
        type="button"
        class="btn btn-success"
        (click)="activeModal.close('Close click')">
        Close
      </button> -->
    </div>
  `
})
export class ComplaintViewComponent implements OnInit {
  closeResult: string;
  complaintData: any;
  isComment : boolean;
  // @Input() passComplaint;

  heading:any = "";
  description:any = "";
  comments:any = "";
  created_at:any = "";
  updated_at:any = "";
  complaintId:any = "";
  userId:any = "";
 

  tcomment = false;
  ecomment = false;

  commentForm: FormGroup;

  commentFormError = {
    comment: ''  };
  validationMessages = {
      comment: {
          required: 'comment is required.',
          minlength: 'comment must be 6 characters.'
      }
  };
  constructor(public activeModal: NgbActiveModal, private commentService: CommentService) {
    this.createCommentForm();
  }

  ngOnInit() {
    // displays the created and last updated dates and any comments made by an agent
    // or that customer on that complaint in the timely order.
    console.log(" complaintData : ", this.complaintData);
    const { created_at ,description , heading, updated_at, status, user_id, _id, comments } = this.complaintData;
    this.heading = heading;
    this.description = description;
    this.updated_at = updated_at;
    // this.created_at = new Date(new Date(created_at).getTimezoneOffset() * 60 * 1000).getTime();
    this.created_at = created_at;
    this.complaintId = _id;
    this.userId = user_id;
    this.comments = comments? comments[0]: '';
    this.tcomment = this.isComment;
    this.ecomment = comments? true: false;
    
  }

  createCommentForm(): void {
    this.commentForm = new FormGroup({
        comment: new FormControl('', [Validators.required])
    }, { updateOn: 'submit' });

    // this.commentForm.valueChanges.subscribe((formValue) => {
    //     this.fieldValid.validate(formValue, this.commentForm, this.commentFormError, this.validationMessages);
    // });
}
onSubmit(): void {
  if (this.commentForm.valid) {
      console.log(this.commentForm.value);
      const { comment } = this.commentForm.value;
      const data = {
        comment : comment,
        user_id : this.userId,
        complaint_id : this.complaintId
      }
      this.commentService.updateCommentByUser(data).subscribe(res=> {
        if(res.status === true){
          alert(' Your comment has been added successfully against your complaint.')
        }
      }, err =>{
        console.log(' err: ', err)
      });
  }else{
    alert('Please check before submit.')
  }
}
 
  //   open(content) {
  //       const obj: any = {ariaLabelledBy: 'modal-basic-title'};
  //     this.modalService.open(content, obj).result.then((result) => {
  //       this.closeResult = `Closed with: ${result}`;
  //     }, (reason) => {
  //       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     });
  //   }

  //   private getDismissReason(reason: any): string {
  //     if (reason === ModalDismissReasons.ESC) {
  //       return 'by pressing ESC';
  //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //       return 'by clicking on a backdrop';
  //     } else {
  //       return  `with: ${reason}`;
  //     }
  //   }
}
