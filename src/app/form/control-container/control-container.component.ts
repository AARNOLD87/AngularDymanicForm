import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormGroup, AbstractControl, ValidatorFn, Validators, FormControl } from '@angular/forms';
import { RaptorFormAttributeGlobal as FORM_GLOBALS,
         RaptorValidationAttributesGlobal as VALIDATION_GLOBALS,
         RaptorValidationModel, RaptorPropertyDescriptorModel } from '../form.model';

@Component({
  selector: 'app-control-container',
  templateUrl: 'control-container.component.html'
})

export class ControlContainerComponent implements OnInit {
  public validations: { [key: string]: RaptorValidationModel } = { };
  public validationDictionary: { validation: string, validationGlobal: VALIDATION_GLOBALS }[] = [
    {validation: 'required', validationGlobal: VALIDATION_GLOBALS.REQUIRED },
    {validation: 'pattern', validationGlobal: VALIDATION_GLOBALS.REGULAR_EXPRESSION },
    {validation: 'maxlength', validationGlobal: VALIDATION_GLOBALS.STRING_LENGTH },
    {validation: 'minlength', validationGlobal: VALIDATION_GLOBALS.STRING_LENGTH },
    {validation: 'email', validationGlobal: VALIDATION_GLOBALS.EMAIL },
  ];

  @Input() detailsForm: FormGroup;
  @Input() formControl: AbstractControl;
  @Input() viewModelProperty: RaptorPropertyDescriptorModel;

  @HostBinding('class') controlClass = '';

  ngOnInit() {
    this.formControl = new FormControl(this.viewModelProperty.viewModelData[this.viewModelProperty.key]);
    this.detailsForm.addControl(this.viewModelProperty.key, this.formControl);
    this.addValidationsToFormControl();
    this.addClassesToControl();
  }

  private addClassesToControl() {
    const dataAnnotations = Object.keys(this.viewModelProperty.schema);

    dataAnnotations.forEach(annotationKey => {
      const jsonAnnotation = this.viewModelProperty.schema[annotationKey];

      if (
        jsonAnnotation.hasOwnProperty(FORM_GLOBALS.UI_CONTROL) &&
        jsonAnnotation[FORM_GLOBALS.UI_CONTROL] === true
      ) {
        if (jsonAnnotation.hasOwnProperty(FORM_GLOBALS.COL_LG)) {
          this.addClass(jsonAnnotation, FORM_GLOBALS.COL_LG);
        }
        if (jsonAnnotation.hasOwnProperty(FORM_GLOBALS.COL_MD)) {
          this.addClass(jsonAnnotation, FORM_GLOBALS.COL_MD);
        }
        if (jsonAnnotation.hasOwnProperty(FORM_GLOBALS.COL_SM)) {
          this.addClass(jsonAnnotation, FORM_GLOBALS.COL_SM);
        }
        if (jsonAnnotation.hasOwnProperty(FORM_GLOBALS.COL_XS)) {
          this.addClass(jsonAnnotation, FORM_GLOBALS.COL_XS);
        }
      }
    });
  }

  private addClass(jsonAnnotation, jsonClass) {
    this.controlClass = this.controlClass + ' ' +
      this.humanizeClassStyleString(jsonClass, '-') +
        '-' +
        jsonAnnotation[jsonClass].value;
  }

  private humanizeClassStyleString(target, separator) {
    return target
      .replace(/([A-Z])/g, ' $1')
      .replace(/([A-Z])/g, function(str) {
        return str.toLowerCase();
      })
      .trim(' ')
      .replace(' ', separator);
  }

  private addValidationsToFormControl() {
    const validators: ValidatorFn[] = [];

    for (const key in this.viewModelProperty.schema) {
      if (this.viewModelProperty.schema[key].hasOwnProperty(VALIDATION_GLOBALS.VALIDATION_PROPERTY)
              && this.viewModelProperty.schema[key][VALIDATION_GLOBALS.VALIDATION_PROPERTY] === true) {

        const validation = this.viewModelProperty.schema[key];
        this.validations[key] = {
          errorMessage: validation[VALIDATION_GLOBALS.ERROR_MESSAGE].value
        };
        this.extractValidatorsFromValidationName(validation, key, validators);
      }
    }

    this.detailsForm.controls[this.viewModelProperty.key].setValidators(validators);
  }

  private extractValidatorsFromValidationName(validation: any, key: string, validators: ValidatorFn[]) {
    switch (key) {
      case VALIDATION_GLOBALS.EMAIL:
        validators.push(Validators.email);
        break;
      case VALIDATION_GLOBALS.REGULAR_EXPRESSION:
        validators.push(Validators.pattern(validation[VALIDATION_GLOBALS.PATTERN].value));
        break;
      case VALIDATION_GLOBALS.REQUIRED:
        validators.push(Validators.required);
        break;
      case VALIDATION_GLOBALS.STRING_LENGTH:
        if (validation[VALIDATION_GLOBALS.MAXIMUM_LENGTH]) {
          validators.push(Validators.maxLength(validation[VALIDATION_GLOBALS.MAXIMUM_LENGTH].value));
        }

        if (validation[VALIDATION_GLOBALS.MINIMUM_LENGTH]) {
          validators.push(Validators.minLength(validation[VALIDATION_GLOBALS.MINIMUM_LENGTH].value));
        }
        break;
    }
  }
}
