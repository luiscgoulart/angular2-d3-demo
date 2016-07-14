import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
//import {plywood} from 'plywood';

@Injectable()
export class DataService {
  //../../../node_modules/
  //private url: string = 'http://localhost:3000/api';
  private druidRequesterFactory = require('plywood-druid-requester').druidRequesterFactyory;
  private plywood = require('plywood');
  private ply = this.plywood.ply;
  private $ = this.plywood.$;
  private External = this.plywood.External;

  //druid connection
  private druidRequester = this.druidRequesterFactory({
    host: '10.112.67.195:8082'
  });

  //external to m2mv3
  private m2mv3DataSet = this.External.fromJS({
    engine: 'druid',
    dataSource: 'm2mv3',
    timeAttribute: '__time',
    context: {
      timeout: 10000
    }
  }, this.druidRequester);

  //execution context:
  private context = {
    m2mv3: this.m2mv3DataSet
  }

  //test query 1:l
  ex = this.ply()
  .apply("m2mv3",
    $('m2mv3').filter($("__time").in({
      start: new Date("2015-08-26T00:00:00Z"),
      end: new Date("2015-08-27T00:00:00Z")
    }))
  )
  .apply("Count", $('wiki').count())
  .apply('TotalAdded', '$wiki.sum($added)');


  constructor(private http: Http) {



  /*
  byCustomer(id: any, range: string): Observable<any> {
    return this.http.get(this.url + '/customers/' + id +'/stats?range=' + range);
  }*/
  }

}
