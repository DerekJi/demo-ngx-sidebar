export interface ITreeMenuNode {
  code?: string;
  displayName: string;
  displayOrder?: number;
  tooltip?: string;
  url: string;
  target?: string;

  nodes?: ITreeMenuNode[];
}
