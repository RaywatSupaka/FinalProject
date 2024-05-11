import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { WebData } from 'src/app/Interface/WebData_OBJ';
import Swiper from 'swiper';
import { MatDialog } from '@angular/material/dialog';
import { DetailsDialogComponent } from 'src/app/Model/userinfomodal/details-dialog/details-dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit{
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  swiper: Swiper | undefined;

  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchDataWebsiteWithStatus();
    this.fetchDataWebsite();
  }
  
  openDialog(websiteName: WebData) {
    
    const dialogRef = this.dialog.open(DetailsDialogComponent, {
      data: { websiteName: websiteName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  listWebsite: WebData[] = [];
  listWebsiteWithStatus: WebData[] = [];

  fetchDataWebsiteWithStatus() {
    this.http.get(API_URLS.LOCAL + API_URLS.SHOWWEBSITEBYSTATUS).subscribe((res: any) => {
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
        this.listWebsiteWithStatus.push(details);
      });
    });
  }


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

  checkStatus(websiteName: WebData){
    this.http.get(API_URLS.LOCAL + API_URLS.CHECKSTATUSUSER + `${websiteName.wid}`).subscribe((res: any) => {
      console.log("test",res);
    })
  }
}
