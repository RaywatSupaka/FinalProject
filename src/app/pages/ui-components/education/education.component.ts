import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { WebData } from 'src/app/Interface/WebData_OBJ';
import { DetailsDialogComponent } from 'src/app/Model/userinfomodal/details-dialog/details-dialog.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationComponent {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchDataWebsite();
  }

  listWebsite: WebData[] = [];

  openDialog(websiteName: WebData) {
    
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: { websiteName: websiteName }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  checkStatus(websiteName: WebData) {
    this.http.get(API_URLS.LOCAL + API_URLS.CHECKSTATUSUSER + `${websiteName.wid}`).subscribe((res: any) => {
      if (res.result) {
        window.open(websiteName.local, '_blank');
      } else {
        this.openDialog(websiteName);
      }
    });
  }

  fetchDataWebsite() {
    const type: string = "Education"
    this.http.get(API_URLS.LOCAL + API_URLS.WEBSITEDETAILSBYTYPE + `?type=${type}`).subscribe((res: any) => {
      console.log("Type = " , res);
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
