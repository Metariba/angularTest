import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor(private http: HttpClient) {}

  rootURL = 'http://localhost:8081/api/student';

  getStudents() {
    return this.http.get<Student[]>(this.rootURL);
  }
  newStudent(student: Student) {
    return this.http.post<Student>(this.rootURL, {
      name: student.name,
      email: student.email,
      age: student.age,
      date: student.date,
    });
  }

  updateStudent(studentId: string, name: string, email: string) {
    return this.http.put<Student>(this.rootURL + '/' + studentId, {
      name: name,
      email: email,
      age: 0,
      date: 0,
    });
  }

  deleteStudent(studentId: number) {
    return this.http.delete<any>(this.rootURL + '/' + studentId);
  }
}
