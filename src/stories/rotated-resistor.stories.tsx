import { Schematic } from "../Schematic"

export const RotatedResistor = () => {
  return (
    <Schematic style={{ height: 500 }}>
      <board width={10} height={10}>
        <resistor
          name="R1"
          resistance="10 ohm"
          schX={2}
          schY={1}
          schRotation="90deg"
          pcbRotation="90deg"
        />
      </board>
    </Schematic>
  )
}

export default {
  title: "RotatedResistor",
  component: RotatedResistor,
}
