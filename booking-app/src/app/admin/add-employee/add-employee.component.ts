import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ILanguage } from 'src/app/interfaces/ilanguage';
import { Employee } from 'src/app/models/employee';
import { User } from 'src/app/models/user';
import { LanguageService } from 'src/app/services/language.service';
import { ITranslate } from 'src/app/interfaces/itranslate';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

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
  translate: ITranslate;

  constructor(private userService: UserService, private languageService: LanguageService, private route: ActivatedRoute, public appComponent: AppComponent) {

    this.getLanguageList();
    this.user = new User(null, null, null, null, null);
    this.employee = new Employee(null, null, null, null, null, null, null, null, this.user);
    this.languageService.loadLanguage().subscribe( resp => {
      this.translate = resp;
    });

    console.log(route);
    console.log(appComponent);

  }

  ngOnInit(): void {
    console.log(this.appComponent.title);
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
      this.employee.stringPhoto = fileReader.result;
    }
    fileReader.readAsDataURL(this.selectedFile);

  }
}
