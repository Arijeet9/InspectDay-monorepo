

export interface OverviewHeaderTypes{
    title:string;
    rate:string;
    no:string;
}

interface DatasetsTypes{
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }

export interface DoughnutDataTypes{
    labels:string[];
    datasets:DatasetsTypes[];
}