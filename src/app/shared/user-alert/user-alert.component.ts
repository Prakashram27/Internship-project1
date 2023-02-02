import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-alert',
  templateUrl: './user-alert.component.html',
  styleUrls: ['./user-alert.component.css']
})
export class UserAlertComponent {

  @Input() statusMessage !:string; //
  @Output() public okay =  new EventEmitter<void>() // sending the event 

  onClose(){
    this.okay.emit();
  }

}
