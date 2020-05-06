import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import User from 'src/app/models/User';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  constructor( public userApi:UserService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.userApi.refreshList();
  }

  populateForm(u: User) {
    this.userApi.formData = Object.assign({}, u);
  }

  onDelete(username,password) {
    if (confirm('Are you sure to delete this record ?')) {
      this.userApi.deleteUser(username,password)
        .subscribe(res => {
  
          this.userApi.refreshList();
          this.toastr.warning('Deleted successfully', 'user deleted');
        },
          err => {
     
            console.log(err);
          })
    }
    }

}
