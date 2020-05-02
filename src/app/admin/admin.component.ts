import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Admin } from './admin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin: Observable<Admin[]>;
  usr= new Admin()
  constructor(private service: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.admin = this.service.getAdminList();
  }
  deleteAdmin(id: number) {
    this.service.deleteAdmin(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  updateAdmin(id: number) {
    this.router.navigate(['adminUpdate', id]);
  }
  detailsAdmin(id: number) {
    this.router.navigate(['adminDetails', id]);
  }


  goHome() {
    this.router.navigate(['home']);
  }
  goAdmin() {
    this.router.navigate(['admin']);
    this.admin = this.service.getAdminList();
  }
  goAddAdmin() {
    this.router.navigate(['addAdmin']);
  }
  goCustomer() {
    this.router.navigate(['customer']);
  }
  goAddCustomer() {
    this.router.navigate(['addCustomer']);
  }
}
