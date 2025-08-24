import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master-service';

@Component({
  selector: 'app-add',
  imports: [],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {

  masterService = inject(MasterService);
 result = this.masterService.getSum(10,20);
  
}
