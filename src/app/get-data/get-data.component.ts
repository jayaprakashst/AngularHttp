import { Component } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'get-data',
  templateUrl: 'get-data.component.html',
  styleUrls: ['get-data.component.css'],
  providers:[ GetDataService ]
})
export class GetDataComponent {

	constructor(private dataService: GetDataService){
		this.dataService.call_api('hello').subscribe(response => {
			console.log('Response is ', response);
		}, err => {
			console.log('Something went wrong ', err);
		})
	}

}
