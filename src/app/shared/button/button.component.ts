import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {    
  btnDefault = 'btn-default';
  @Input()isClicked = false;
  @Input() isSelected?:boolean;
  @Output() isSelectedChange= new EventEmitter<void>()
  btnChange = 'btn-change'
  btnClicked = this.btnDefault; 

  clicked(){
    this.isSelectedChange.emit()
  }
  if(){}
}
