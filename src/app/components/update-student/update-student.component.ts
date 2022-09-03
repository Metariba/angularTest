import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from 'src/app/services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private studentServiceService: StudentServiceService,
    private router: Router
  ) {}
  studentId: string = '';
  name: string = '';
  email: string = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.studentId = params['studentId'];
    });
  }

  updateStudent() {
    this.studentServiceService
      .updateStudent(this.studentId, this.name, this.email)
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
