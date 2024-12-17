import { Component } from '@angular/core';
import { DivbarComponent } from '../divbar/divbar.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DivbarComponent, PageHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
