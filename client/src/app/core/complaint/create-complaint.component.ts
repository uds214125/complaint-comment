import {Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ComplaintService } from './complaint.service';

@Component({
  selector: 'app-create-complaint',
  template : `
  <div class="modal-header">
  <h4 class="modal-title">Create New Complaint </h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<form action="#" [formGroup]="complaintForm" (ngSubmit)="onSubmit()" autocomplete="off" novalidate>
<div class="modal-body">
<div class="form-group">
<div class="input-group">
  <input type="text" formControlName="heading" class="form-control" id="heading" placeholder="Heading"
    autofocus> <br>
  <textarea type="text" formControlName="content" class="form-control" id="content" placeholder="Description"
    autofocus></textarea>
</div>
<div class="valid-error" *ngIf="complaintFormError.heading">
  {{complaintFormError.heading}}
</div>
<div class="valid-error" *ngIf="complaintFormError.content">
  {{complaintFormError.content}}
</div>
</div>
</div>
<div class="modal-footer">
  <button type="submit" class="btn btn-success" > Submit</button>
</div>
</form>
`
})
export class CreateComplaintComponent {
  closeResult: string;
  complaintForm: FormGroup;

  complaintFormError = {
    heading: '',
    content: ''
  };
  validationMessages = {
      heading: {
          required: 'heading is required.',
          pattern: 'Please enter valid heading.'
      },
      content: {
          required: 'Description is required.',
          minlength: 'Description must be 6 characters.'
      }
  };
  constructor(private modal: NgbModal, public activeModal: NgbActiveModal, private complaintService: ComplaintService) {
    this.createComplaintForm();
  }

  createComplaintForm(): void {
    this.complaintForm = new FormGroup({
        heading: new FormControl('', [Validators.required, Validators.pattern('[a-z]{2,}$')]),
        content: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, { updateOn: 'submit' });

    // this.complaintForm.valueChanges.subscribe((formValue) => {
    //     this.fieldValid.validate(formValue, this.complaintForm, this.complaintFormError, this.validationMessages);
    // });
}
onSubmit(): void {
  if (this.complaintForm.valid) {
      console.log(this.complaintForm.value);
      const data = this.complaintForm.value;
      this.complaintService.addComplaint(data).subscribe(res => {
        if (res.status === true) {
          alert(' Your complaint has been added successfully.');
        }
      }, err => {
        console.log(' err: ', err);
      });
  }
}

//   constructor(private modalService: NgbModal) {}

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
