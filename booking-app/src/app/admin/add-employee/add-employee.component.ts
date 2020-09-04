import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ILanguage } from 'src/app/interfaces/ilanguage';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  languageList: Array<ILanguage>;
  user: User;
  employee: Employee;
  selectedFile: File;
  imageFileText: string;

  constructor(private userService: UserService, private languageService: LanguageService) {

    this.getLanguageList();
    this.user = new User(null, null, null, null, null);
    this.employee = new Employee(null, null, null, null, null, null, null, null, this.user);

  }

  ngOnInit(): void {

    this.languageService.loadLanguage().subscribe( resp => {
      console.log(resp);

    })

  }

  getLanguageList() {
    this.userService.readLanguages().subscribe(languages => {
      this.languageList = languages;
    });
  }

  addEmployee() {

    // const formData = new FormData();
    // formData.append('photo', this.selectedFile, this.selectedFile.name);

    // const employeeBlob = new Blob([JSON.stringify(this.employee)], {
    //   type: 'application/json',
    // });

    // formData.append('employee', employeeBlob);

    // fd.append('data', JSON.stringify(this.employee));

    // console.log(fd);
    // this.employee.setImage(fd.get('file').toString());
    // console.log(this.employee);
    // this.employee.setImage(this.imageFileText);
    this.userService.saveEmployee(this.employee).subscribe(ansewr => {
      console.log(ansewr);
    })
  }

  onFileSelect(event) {
    // console.log(event);
    this.selectedFile = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.employee.photo = fileReader.result;
    }
    fileReader.readAsDataURL(this.selectedFile);

  }
}
