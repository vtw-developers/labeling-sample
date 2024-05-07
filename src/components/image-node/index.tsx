import {
  NodeResizer,
  type NodeProps,
  useStore,
  Handle,
  Position,
  useKeyPress,
  useReactFlow,
} from 'reactflow';

import Shape from '../shape';
import ShapeNodeToolbar from '../toolbar';
import { type ShapeType } from '../shape/types';
import NodeLabel from './label';

export type ShapeNodeData = {
  type: ShapeType;
  color: string;
};

// this will return the current dimensions of the node (measured internally by react flow)
function useNodeDimensions(id: string) {
  const node = useStore((state) => state.nodeInternals.get(id));
  return {
    width: node?.width || 0,
    height: node?.height || 0,
  };
}

function ImageNode({ id, selected, data }: NodeProps<ShapeNodeData>) {
  const { color, type } = data;
  const { setNodes } = useReactFlow();

  const { width, height } = useNodeDimensions(id);
  const shiftKeyPressed = useKeyPress('Shift');
  const handleStyle = { backgroundColor: color };

  const onColorChange = (color: string) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        }

        return node;
      })
    );
  };

  return (
<img src="/cars.jpg" width="700px" height="500px"></img>

  );
}

export default ImageNode;
