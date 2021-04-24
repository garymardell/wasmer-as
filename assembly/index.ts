import { add_charge } from "./billing";

export function run(): void {
  add_charge(1500, 'CAD', 'Application fee');
}