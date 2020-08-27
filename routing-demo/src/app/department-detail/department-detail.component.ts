import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  departmentId: string;
  siteUrl = window.location.href;

  constructor(private route: ActivatedRoute) { 
    console.log('constructor');
  }

  ngOnInit(): void {
    this.departmentId = this.route.snapshot.paramMap.get('id');
    console.log('onInit');
  }

}
