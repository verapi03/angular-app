import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technology } from 'src/app/models/technology.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public technologies: Technology[] = [];
  public query!: string;
  
  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _httpService: HttpService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.query = params["query"];
      this._httpService
        .searchTechnology(this.query)
        .subscribe((technologies: any) => {
          this.technologies = technologies.data;
        });
    });
  }

}
