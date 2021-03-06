export interface iconButton {
  id: number;
  component: string;
  configuration_json: {
    Width: string;
    CornerRadius: string;
    Text: string;
    TextColor: string;
    CommandName: string;
    CommandParameter: string;
    Icon: string;
    Padding: {
      top: string | number;
      right: string | number;
      bottom: string | number;
      left: string | number;
    };
    Margin: {
      top: string | number;
      right: string | number;
      bottom: string | number;
      left: string | number;
    };
    BackgroundColor: string;
  };
}
