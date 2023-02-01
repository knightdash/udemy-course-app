import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>;
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>;

  // newServerName = '';
  newServerContent = '';

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }
}
