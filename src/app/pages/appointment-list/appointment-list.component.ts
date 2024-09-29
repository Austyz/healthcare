import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {
  appointmentList: any[] = [];

  constructor(private master: MasterService){

  }
  ngOnInit(): void {
    this.getTodaysAppointments();
    
  }

  getTodaysAppointments() {
    this.master.getTodaysAppointment().subscribe((res:any) => {
      this.appointmentList = res.data;
    },
    error=> {
      alert('API error Occured')

    })
  }
  getAllAppointments() {
    this.master.getAllAppointment().subscribe((res:any) => {
      this.appointmentList = res.data;
    },
    error=> {
      alert('API error Occured')

    })
}
}
