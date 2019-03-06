export interface RaptorDetailModel {
  viewModelName: string;
  viewModelDisplayName: string;
  viewModelSchema: any;
  viewModelData: any;
  viewModelOriginalData: any;
  viewModelActionsResources: any;
  viewModelDependencies: RaptorPropertyDependencyModel[];
  viewModelProperties: any;
  viewModelPropertiesKeys: any;
  propertiesDescriptors: RaptorPropertyDescriptorModel[];
}

export interface RaptorValidationModel {
  name?: string;
  targetValue?: string;
  errorMessage?: string;
  errorMessageResourceName?: string;
  errorMessageResourceType?: string;
  requiresValidationContext?: string;
  errorMessageString?: string;
  pattern?: string;
  allowEmptyString?: boolean;
  otherProperty?: string;
  otherPropertyDisplayName?: string;
  maximumLength?: number;
  minimumLength?: number;
}

export interface RaptorPropertyDescriptorModel {
  key: string;
  schema: any;
  viewModelData: any;
  order: number;
  dependencies: RaptorPropertyDependencyModel[];
}

export interface RaptorPropertyDependencyModel {
  from: string;
  to: string;
}

export class RaptorElementsGlobal {
  public static SEARCH_BUTTON =
  '<i class="fa fa-search fa-lg text-center"></i>';

  public static EDIT_BUTTON =
  '<i class="fa fa-edit fa-lg text-center"></i>';

  public static DELETE_BUTTON =
  '<i class="fa fa-remove fa-lg text-center"></i>';
}

export class RaptorFormAttributeGlobal {
  // === CheckBoxAttribute ===
  // [FormFieldAttribute]

  // === FormFieldAttribute ===
  public static READ_ONLY = 'ReadOnly';
  public static COL_XS = 'ColXs';
  public static COL_SM = 'ColSm';
  public static COL_MD = 'ColMd';
  public static COL_LG = 'ColLg';

  public static HIDDEN_WHEN_CREATE = 'HiddenWhenCreate';
  public static HIDDEN_WHEN_EDIT = 'HiddenWhenEdit';
  public static HIDDEN_WHEN_DELETE = 'HiddenWhenDelete';

  public static ENABLE_WHEN_PROPERTY_NAME = 'EnabledWhenPropertyName';
  public static ENABLE_WHEN_PROPERTY_VALUE = 'EnabledWhenPropertyValue';

  public static VISIBLE_WHEN_PROPERTY_NAME = 'VisibleWhenPropertyName';
  public static VISIBLE_WHEN_PROPERTY_VALUE = 'VisibleWhenPropertyValue';

  // === DateAttribute ===
  // === TimeAttribute ===
  public static FORMAT = 'Format';

  // === FileUploadAttribute ===
  public static FILE_PROPERTY_NAME = 'FilePropertyName';
  public static RESIZE = 'Resize';
  public static WIDTH = 'Width';
  public static HEIGHT = 'Height';
  public static TYPE = 'Type';
  public static PATH_CONFIG_KEY = 'PathConfigKey';

  // === HiddenAttribute ===
  public static SOURCE_ACTION = 'SourceAction';
  public static SOURCE_PROPERTY = 'SourceProperty';
  public static UPDATE_WHEN_CHANGE_PROPERTY = 'UpdateWhenChangeProperty';
  public static USING_ACTION = 'UsingAction';
  public static USING_CHANGE_PROPERTY_VALUE_IN_ACTION = 'UsingChangePropertyValueInAction';

  // === HtmlTextAttribute ===
  // === LocalizedHtmlTextAttribute ===
  // === LocalizedTextAreaAttribute ===
  // === TextAreaAttribute ===
  public static ROWS = 'Rows';

  // === SelectListAttribute ===
  // === LocalizedSelectListAttribute ===
  // [Already Defined] - public static SOURCE_ACTION = 'SourceAction';
  // [Already Defined] - public static SOURCE_PROPERTY = 'SourceProperty';
  public static ReloadWhenChangeProperty = 'ReloadWhenChangeProperty';
  // [Already Defined] - public static USING_ACTION = 'UsingAction';
  // [Already Defined] - public static USING_CHANGE_PROPERTY_VALUE_IN_ACTION = 'UsingChangePropertyValueInAction';
  // [Already Defined] - public static TYPE = 'Type';
  public static RELATED_BUTTON = 'RelatedButton';
  public static RELATED_BUTTON_ACTION = 'RelatedButtonAction';
  public static RELATED_BUTTON_ICON = 'RelatedButtonIcon';
  public static RELATED_BUTTON_CAPTION = 'RelatedButtonCaption';
  public static RELATED_BUTTON_ACTION_PROPERTY_VALUE = 'RelatedButtonActionPropertyValue';

  // === LocalizedTextBoxAttribute ===
  // [FormFieldAttribute]

  // === PasswordAttribute ===
  // [FormFieldAttribute]

  // === SliderAttribute ===
  public static MIN_VALUE = 'MinValue';
  public static MAX_VALUE = 'MaxValue';
  public static MIN_VALUE_PROPERTY_NAME = 'MinValuePropertyName';
  public static MAX_VALUE_PROPERTY_NAME = 'MaxValuePropertyName';

  // === TextBoxAttribute ===
  // [FormFieldAttribute]

  public static UI_CONTROL = 'uiControl';
}

export class RaptorValidationAttributesGlobal {
  // === Attribute Keys ===
  public static REQUIRED = 'Required';
  public static COMPARE_WITH = 'CompareWith';
  public static EMAIL = 'EmailAddress';
  public static REGULAR_EXPRESSION = 'RegularExpression';
  public static STRING_LENGTH = 'StringLength';
  public static VALIDATION_PROPERTY = 'uiValidation';

  // === ValidationAttribute ===
  public static ERROR_MESSAGE = 'ErrorMessage';
  public static ERROR_MESSAGE_RESOURCE_NAME = 'ErrorMessageResourceName';
  public static ERROR_MESSAGE_RESOURCE_TYPE = 'ErrorMessageResourceType';
  public static REQUIRES_VALIDATION_CONTEXT = 'RequiresValidationContext';
  public static ERROR_MESSAGE_STRING = 'ErrorMessageString';

  // === CompareAttribute ===
  public static OTHER_PROPERTY = 'OtherProperty';
  public static OTHER_PROPERTY_DISPLAY_NAME = 'OtherPropertyDisplayName';

  // === EmailAttribute ===
  // === RegularExpressionAttribute ===
  public static PATTERN = 'Pattern';

  // === RequiredAttribute ===
  public static ALLOW_EMPTY_STRING = 'AllowEmptyString';

  // === StringLenghtAttribute ===
  public static MAXIMUM_LENGTH = 'MaximumLength';
  public static MINIMUM_LENGTH = 'MinimumLength';
}
