export class Event {
  protected _buffer: ArrayBuffer | null;

  constructor(body: ArrayBuffer | null) {
    this._buffer = body;
  }
}

export type Currency = String

export declare function add_charge(amount: i32, currency: Currency, description: String): void
