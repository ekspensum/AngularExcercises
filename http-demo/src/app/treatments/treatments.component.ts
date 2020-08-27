import { Component, OnInit } from '@angular/core';
import { TreatmentsService } from '../services/treatments.service';
import { ITreatments, ITreatmentCategoriesList, IDentalTreatment } from '../treatments';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: ITreatments;
  treatmentCategoriesList: Array<ITreatmentCategoriesList>;

  constructor(private treatmentsService: TreatmentsService) { }

  ngOnInit(): void {
  }

  getTreatmentList(){
    this.treatmentsService.readTreatmentList().subscribe(data => {
      this.treatments = data;
      this.treatmentCategoriesList = data.treatmentCategoriesList;
    });
  }

}
