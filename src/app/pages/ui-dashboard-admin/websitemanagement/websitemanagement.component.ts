import { HttpClient } from '@angular/common/http';
import { Component,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { WebData } from 'src/app/Interface/WebData_OBJ';
import { CreateWebsiteDialogComponent } from 'src/app/Model/userinfomodal/create-website-dialog/create-website-dialog.component';

@Component({
  selector: 'app-websitemanagement',
  templateUrl: './websitemanagement.component.html',
  styleUrls: ['./websitemanagement.component.css'],
})
export class WebsitemanagementComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<WebData>([]);

  displayedColumns: string[] = [
    'position',
    'name',
    'local',
    'status',
    'type',
    'description',
    'img',
    'edit',
    'delete',
  ];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer,public dialog: MatDialog) {
    this.fetchDataWebsite();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  listWebsite: WebData[] = [];

  fetchDataWebsite() {
    this.http.get(API_URLS.LOCAL + API_URLS.WEBSITEDETAILS).subscribe((res: any) => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        res.data.forEach((item: {
          type: string;
          wid: any;
          wname: any;
          local: any;
          status: any;
          description: any;
          imageShow: string;
        }) => {
          let objectURL = 'data:image/jpeg;base64,' + item.imageShow;
          const details: WebData = {
            wid: item.wid,
            wname: item.wname,
            local: item.local,
            status: item.status,
            description: item.description,
            type: item.type,
            img: this.sanitizer.bypassSecurityTrustUrl(objectURL),
          };
          this.listWebsite.push(details);
        });
        this.dataSource.data = this.listWebsite;
      } else {
        window.alert('ไม่พบข้อมูล');
      }
    });
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateWebsiteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  edit(_t83: any) {
    throw new Error('Method not implemented.');
  }

  deleteItem(id: string) {
    const isConfirmed = window.confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?');
    if (isConfirmed) {
      this.http.delete(API_URLS.LOCAL + API_URLS.WEBSITEDETAILSDELETE + `${id}`).subscribe((res: any) => {
        window.alert(res.message);
        if (res.result) {
          const index = this.dataSource.data.findIndex(item => item.wid === id);
          if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new MatTableDataSource<WebData>(this.dataSource.data);
          }
        }
      });
    }
  }
  
}
