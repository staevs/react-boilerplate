export type Department = { id: number; name: string };

export type Issue = {
  id: number;
  label: string;
  template?: string;
  maxLength?: number;
};
