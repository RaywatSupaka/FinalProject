import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { UserPfobj } from 'src/app/Interface/UserPF_OBJ';
import { CreateUserDialogComponent } from 'src/app/Model/userinfomodal/create-user-dialog/create-user-dialog.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<UserPfobj>([]);

  displayedColumns: string[] = [
    'position',
    'uid',
    'nid',
    'username',
    'age',
    'address',
    'role',
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

  userlist: UserPfobj[] = [];

  fetchDataWebsite() {
    this.http.get(API_URLS.LOCAL + API_URLS.USERSHOWALL).subscribe((res: any) => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        res.data.forEach((user: {
          uid: string;
          nid: any;
          username: any;
          age: any;
          address: any;
          roles: any;
          imageShow: string;
        }) => {
          let objectURL = 'data:image/jpeg;base64,' + user.imageShow;
          const details: UserPfobj = {
            uid: user.uid,
            nid: user.nid,
            username: user.username,
            password: '',
            age: user.age,
            address: user.address,
            roles: user.roles,
            img: this.sanitizer.bypassSecurityTrustUrl(objectURL),
          };
          this.userlist.push(details);
        });
        this.dataSource.data = this.userlist;
      } else {
        console.log("ไม่พบข้อมูล")
      }
    });
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.result) {
        console.log('The dialog was closed');
        this.fetchDataWebsite();
      }
    });

  }

  edit(_t83: any) {
    throw new Error('Method not implemented.');
  }

  deleteItem(id: string) {
    const isConfirmed = window.confirm('คุณต้องการลบข้อมูลนี้ใช่หรือไม่?');
    if (isConfirmed) {
      this.http.delete(API_URLS.LOCAL + API_URLS.USERDELETE + `/${id}`).subscribe((res: any) => {
        window.alert(res.message);
        if (res.result) {
          const index = this.dataSource.data.findIndex(item => item.uid === id);
          if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new MatTableDataSource<UserPfobj>(this.dataSource.data);
          }
        }
      });
    }
  }

}
