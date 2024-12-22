import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wbpulse',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wbpulse.component.html',
  styleUrl: './wbpulse.component.scss'
})
export class WbpulseComponent {
  activeProject: string = 'project1';

  activeTab: string = 'overview';
}
