import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>;
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>;

  @ViewChild('serverContentInput', { static: true }) serverContent: ElementRef;

  // newServerName = '';
  // newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContent.nativeElement.value,
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContent.nativeElement.value,
    })
  }
}
