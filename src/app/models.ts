export interface Ticket {
  id: number;
  superzahl: number;
  boxes?: Box[];
}

export interface Box {
  id: number;
  numbers: number[];
}
