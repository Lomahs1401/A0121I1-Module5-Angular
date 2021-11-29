import { StudentService } from './../service/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})


export class StudentInformationComponent implements OnInit {

  @Input('studentInfo')
  student: any='';
  id: string | null;

  constructor(private activeRouter: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    // cach 1
    this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = paramMap.get('id');
        this.student = this.studentService.getById(Number(this.id));
      }
    )

    // cach2
    // let id = this.activeRouter.snapshot.params['id'];
    // this.student = this.studentService.getById(id);
  }

  // setMark(event : Event) {
  //   this.student1.mark = event.target.value;
  // }

}
