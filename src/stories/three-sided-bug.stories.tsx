import { Schematic } from "Schematic"

export const ThreeSidedBug = () => {
  return (
    <Schematic style={{ height: 600 }}>
      <board width={10} height={10}>
        <bug
          name="B1"
          schPortArrangement={{
            leftSize: 3,
            rightSize: 3,
            topSize: 0,
            bottomSize: 5,
          }}
          schX={8}
          schY={3}
          pinLabels={{
            "1": "D0",
            "2": "D1",
          }}
        />
      </board>
    </Schematic>
  )
}

export default {
  title: "ThreeSidedBug",
  component: ThreeSidedBug,
}
