import { ProjectClass } from "lib/project"
import * as Types from "lib/types"
import * as Components from "./"

interface Props {
  project: Types.Project
}

export const ProjectComponent = ({ project }: Props) => {
  console.log({ project })
  const projectClass = new ProjectClass(project)

  return (
    <>
      {project.schematic_components.map((schematic_component) => (
        <Components.SchematicComponent
          key={schematic_component.schematic_component_id}
          component={{
            source: projectClass.getSourceComponent(
              schematic_component.source_component_id
            ),
            schematic: schematic_component,
          }}
        />
      ))}
      {project.schematic_ports.map((schematic_port) => (
        <Components.SchematicPort
          key={schematic_port.schematic_port_id}
          port={{
            source: projectClass.getSourcePort(
              schematic_port.schematic_port_id
            ),
            schematic: schematic_port,
          }}
        />
      ))}
      {project.schematic_traces.map((schematic_trace) => (
        <Components.SchematicPort
          key={schematic_trace.schematic_trace_id}
          port={{
            source: projectClass.getSourceTrace(
              schematic_trace.source_trace_id
            ),
            schematic: schematic_port,
          }}
        />
      ))}
    </>
  )
}

export default ProjectComponent