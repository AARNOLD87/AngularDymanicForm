import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { FormService } from '../services/form.service';
import { RaptorDetailModel } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html'
})

export class FormComponent implements OnInit {
  public detailsForm: FormGroup;
  public detail: RaptorDetailModel;

  constructor(private service: FormService) { }

  ngOnInit() {
    this.detailsForm = new FormGroup({});
    this.loadData();
  }

  private loadData() {
    forkJoin(
      this.service.getMetadata(),
      this.service.getData()
    ).subscribe(result => {
      this.detail = {} as RaptorDetailModel;
      this.detail.viewModelSchema = result[0];
      this.detail.viewModelData = result[1];
      this.initDetail();
    });
  }

  private initDetail() {
    this.detail.viewModelDisplayName = this.detail.viewModelSchema['name'];

    this.detail.propertiesDescriptors = [];
    this.detail.viewModelProperties = this.detail.viewModelSchema['properties'];
    this.detail.viewModelPropertiesKeys = Object.keys(
      this.detail.viewModelSchema['properties']
    );

    this.detail.viewModelPropertiesKeys.forEach(propertyKey => {
      this.detail.propertiesDescriptors.push({
        key: propertyKey,
        schema: this.detail.viewModelProperties[propertyKey],
        viewModelData: this.detail.viewModelData,
        order: this.detail.viewModelProperties[propertyKey].order,
        dependencies: this.detail.viewModelDependencies
      });
    });
  }

  public submit() {
    if (this.detailsForm.valid) {
      alert(JSON.stringify(this.detailsForm.value));
    } else {
      Object.keys(this.detailsForm.controls).forEach(field => {
        const control = this.detailsForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
