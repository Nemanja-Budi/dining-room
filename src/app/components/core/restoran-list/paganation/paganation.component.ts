import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paganation',
  templateUrl: './paganation.component.html',
  styleUrls: ['./paganation.component.css']
})
export class PaganationComponent {
  @Input() inputPage: number = 1;
  @Input() restoraniCount: number = 1;
  @Input() itemsPerPage: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  onSetPage(newPage: number): void {
    this.pageChange.emit(newPage);
  }
}
