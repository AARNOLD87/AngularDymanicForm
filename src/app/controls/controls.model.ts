export interface ViewModelProperty {
  key: string;
  schema: any;
  viewModelData: any;
  order: number;
  dependencies: { from: string; to: string }[];
}
