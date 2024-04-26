import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  title ='';
  message ='';
  btnOkText= '';
  btnCancelText = '';
  result = false;

  constructor(public bsModalref: BsModalRef){

  }

  confirm(){
    this.result = true;
    this.bsModalref.hide();
  }

  decline(){
    this.bsModalref.hide();
  }
}
