export interface ButtonProps extends React.HTMLProps<JSX.Element> {
  key: any;
  className: string;
  value: any;
  onClick: () => void;
}
