import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent  {
    @Input() type: string;
    @Input() placeholder: string;
  constructor() { }


}




