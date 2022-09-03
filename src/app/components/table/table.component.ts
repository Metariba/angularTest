import { Component, OnInit } from '@angular/core';
import { identity, map, toArray } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private studentServiceService: StudentServiceService) {}
  title = 'Here is the list of student';

  students: Student[] = [];
  student: Student = {
    id: 0,
    name: '',
    email: '',
    age: 0,
    date: new Date(''),
  };
  isClicked: Boolean = false;

  newStudent() {
    this.studentServiceService.newStudent(this.student).subscribe(
      (response) => {
        this.students.push(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showClicked() {
    this.isClicked = !this.isClicked;
  }

  deleteStudent(studentId: number) {
    this.studentServiceService.deleteStudent(studentId).subscribe(
      (response) => {
        this.students.map((student, index) => {
          if (student.id == response) {
            this.students.splice(index, 1);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.studentServiceService.getStudents().subscribe((response: any) => {
      this.students = response;
      console.log(this.students);
    });
  }
}
