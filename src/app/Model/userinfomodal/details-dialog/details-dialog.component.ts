import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { API_URLS } from 'src/app/Interface/API_URLS';
import { WebData } from 'src/app/Interface/WebData_OBJ';


@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.css']
})
export class DetailsDialogComponent {

constructor(public dialogRef: MatDialogRef<DetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) { 
    }

  ngOnInit() {
    this.dialogRef.updateSize('30%', '87%');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  updateStatus(website:WebData){
    this.http.get(API_URLS.LOCAL + API_URLS.UPDATESTATUSUSER + `${website.wid}`).subscribe((res: any) => {
      if (res.result) {
        alert("Already Member")
        window.open(website.local, '_blank');
        location.reload();
      } else {
        alert(res.message)
      }
    });
  }

}

