import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() message !:string; //
  @Output() public close =  new EventEmitter<void>() // sending the event 

  onClose(){
    this.close.emit()
  }
}
