import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-newappointment',
  templateUrl: './newappointment.component.html',
  styleUrl: './newappointment.component.css'
})
export class NewappointmentComponent {

  appointmentObj: any = {
    
      "name": "",
      "mobileNo": "",
      "city": "",
      "age": 0,
      "gender": "",
      "appointmentDate": "2024-09-06T16:57:18.281Z",
      "appointmentTime": "",
      "isFirstVisit": true,
      "naration": ""
    
  };

  constructor(private master: MasterService){}

  onSaveAppointment(){
    this.master.createNew(this.appointmentObj).subscribe((res:any)=>{
      if(res){
        alert("Appointment Done");
      }

    },error => {
      alert("API Error/ Check Form")

    })
  }

}
