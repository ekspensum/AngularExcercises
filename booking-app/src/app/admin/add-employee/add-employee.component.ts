import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ILanguage } from 'src/app/interfaces/ilanguage';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  languageList: Array<ILanguage>;
  user: User;
  employee: Employee;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getLanguageList();
    this.user = new User(null, null, null, null, null);
    this.employee = new Employee(null, null, null, null, null, null, null, this.user);
  }

  getLanguageList(){
    this.userService.readLanguages().subscribe( languages => {
      this.languageList = languages;
    });

  }

  addEmployee(){
    console.log(this.employee);
    this.userService.saveEmployee(this.employee).subscribe( ansewr => {
      console.log(ansewr);

    })
  }
}
