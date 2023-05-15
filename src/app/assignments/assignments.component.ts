import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit{
  assignments:Assignment[] = [
    {nom:"TP1", rendu:false, dateDeRendu:new Date('2022-02-03')} ,
    {nom:"TP2", rendu:true, dateDeRendu:new Date('2022-03-03')} ,
    {nom:"TP3", rendu:false, dateDeRendu:new Date('2022-04-03')} ,
  ];
  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  nomDevoir: string ="";

  ngOnInit(): void {
    setTimeout(()=>{
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    console.log(this.nomDevoir);
  }
 
}
