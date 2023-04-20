import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent {
  hoursControl = new FormControl();
  minutesControl = new FormControl();
  
  horaActual$: Observable<string>;
  constructor(private timeService: TimeService) {

    this.horaActual$ = this.timeService.reloj;}

}
