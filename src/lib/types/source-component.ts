import { NumberWithUnit } from "./util"

export interface SourceComponentBase {
  type: "source_component"
  /** The functional type of this component, e.g. resistor, capacitor etc. */
  ftype?: string
  source_component_id: string
  name: string
}

export interface SimpleResistor extends SourceComponentBase {
  ftype: "simple_resistor"
  // Resistance measured in ohms
  resistance: NumberWithUnit
}

export interface SimpleCapacitor extends SourceComponentBase {
  ftype: "simple_capacitor"
  // Capacitance measured in farads
  capacitance: NumberWithUnit
}

export interface SimpleInductor extends SourceComponentBase {
  ftype: "simple_inductor"
  // Inductance measured in henries
  inductance: NumberWithUnit
}

export interface SimpleBug extends SourceComponentBase {
  ftype: "simple_bug"
}

export type SourceComponent = SimpleResistor | SimpleCapacitor | SimpleBug

export type SourceComponentFType = SourceComponent["ftype"]