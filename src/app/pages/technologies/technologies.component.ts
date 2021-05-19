import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  public technologies: Technology[] = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit(): void {
    this._httpService
      .getTechnologies()
      .subscribe((technologies: any) => {
        this.technologies = technologies.data;
    });
  }

}
