import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'stats',
  templateUrl: 'app/components/stats/stats.html',
  styleUrls: ['app/components/stats/stats.css'],
  providers: [DataService],
  directives: [],
  pipes: []
})

export class Data {

  private customerId: any;
  private range: string = 'weekly';

  constructor(private statsService: DataService) { }

  ngOnInit() {
  }

  /*getStats() {
    this.statsService.byCustomer(this.customerId, this.range)
                     .subscribe(stats => console.log(stats.json()));
  }*/
}
