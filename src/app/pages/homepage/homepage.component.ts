import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { WebData } from 'src/app/Interface/WebData_OBJ';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit{
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchDataWebsite();
  }
  
  listWebsite: WebData[] = [];

  fetchDataWebsite() {
    this.http.get(API_URLS.LOCAL + API_URLS.WEBSITEDETAILS).subscribe((res: any) => {
      res.data.forEach((item: { wid: any; wname: any; local: any; status: any; description: any; imageShow: string; }) => {
        let objectURL = 'data:image/jpeg;base64,' + item.imageShow;
        const details: WebData = {
          wid: item.wid,
          wname: item.wname,
          local: item.local,
          status: item.status,
          description: item.description,
          img: this.sanitizer.bypassSecurityTrustUrl(objectURL),
          type: ''
        };
        this.listWebsite.push(details);
      });
    });
  }
}
