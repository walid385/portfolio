import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wbpulse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wbpulse.component.html',
  styleUrl: './wbpulse.component.scss'
})
export class WbpulseComponent {
  activeProject: string = 'project1';

  activeTab: string = 'overview';
}
