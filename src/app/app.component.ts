import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sample1ComponentComponent } from './sample1/sample1-component/sample1-component.component';
import { Sample2ComponentComponent } from './sample2/sample2-component/sample2-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sample1ComponentComponent, Sample2ComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main-project';
}
