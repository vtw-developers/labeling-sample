import { type Node, type Edge } from 'reactflow';
import { ShapeNodeData } from './components/shape-node';

export const defaultNodes: Node<ShapeNodeData>[] = [
  {
    id: '0',
    type: 'image',
    position: { x: 0, y: 0 },
    style: { width: 100, height: 100 },
    data: {
    },
    selectable: false,
    draggable: false
  },
  // {
  //   id: '1',
  //   type: 'shape',
  //   position: { x: 0, y: 0 },
  //   style: { width: 120, height: 60 },
  //   data: {
  //     type: 'round-rectangle',
  //     color: '#3F8AE2',
  //   },
  // },
  // {
  //   id: '2',
  //   type: 'shape',
  //   position: { x: 10, y: 120 },
  //   style: { width: 100, height: 100 },
  //   data: {
  //     type: 'diamond',
  //     color: '#EA9C41',
  //   },
  // },
  // {
  //   id: '3',
  //   type: 'shape',
  //   position: { x: -160, y: 130 },
  //   style: { width: 80, height: 80 },
  //   data: {
  //     type: 'circle',
  //     color: '#438D57',
  //   },
  // },
  // {
  //   id: '4',
  //   type: 'shape',
  //   position: { x: 200, y: 140 },
  //   style: { width: 120, height: 60 },
  //   data: {
  //     type: 'hexagon',
  //     color: '#CF4C2C',
  //   },
  // },
  // {
  //   id: '5',
  //   type: 'shape',
  //   position: { x: 380, y: 280 },
  //   style: { width: 100, height: 100 },
  //   data: {
  //     type: 'rectangle',
  //     color: '#438D57',
  //   },
  // },
  // {
  //   id: '6',
  //   type: 'shape',
  //   position: { x: -260, y: 320 },
  //   style: { width: 140, height: 60 },
  //   data: {
  //     type: 'arrow-rectangle',
  //     color: '#803DEC',
  //   },
  // },
  // {
  //   id: '7',
  //   type: 'shape',
  //   position: { x: 10, y: 300 },
  //   style: { width: 100, height: 100 },
  //   data: {
  //     type: 'cylinder',
  //     color: '#EBC347',
  //   },
  //   selected: true,
  // },
  // {
  //   id: '8',
  //   type: 'shape',
  //   position: { x: 10, y: 500 },
  //   style: { width: 100, height: 80 },
  //   data: {
  //     type: 'triangle',
  //     color: '#3F8AE2',
  //   },
  // },
  // {
  //   id: '9',
  //   type: 'shape',
  //   position: { x: 180, y: 420 },
  //   style: { width: 140, height: 60 },
  //   data: {
  //     type: 'parallelogram',
  //     color: '#803DEC',
  //   },
  // },
  // {
  //   id: '10',
  //   type: 'shape',
  //   position: { x: -230, y: 460 },
  //   style: { width: 80, height: 80 },
  //   data: {
  //     type: 'plus',
  //     color: '#CF4C2C',
  //   },
  // },
];

export const defaultEdges: Edge[] = [
  {
    id: '1->2',
    source: '1',
    target: '2',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: '2->3',
    source: '2',
    target: '3',
    sourceHandle: 'left',
    targetHandle: 'right',
  },
  {
    id: '2->4',
    source: '2',
    target: '4',
    sourceHandle: 'right',
    targetHandle: 'left',
  },
  {
    id: '4->5',
    source: '4',
    target: '5',
    sourceHandle: 'right',
    targetHandle: 'top',
  },
  {
    id: '3->6',
    source: '3',
    target: '6',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: '6->7',
    source: '6',
    target: '7',
    sourceHandle: 'right',
    targetHandle: 'left',
  },
  {
    id: '4->7',
    source: '4',
    target: '7',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: '7->8',
    source: '7',
    target: '8',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: '5->9',
    source: '5',
    target: '9',
    sourceHandle: 'left',
    targetHandle: 'top',
  },
  {
    id: '6->10',
    source: '6',
    target: '10',
    sourceHandle: 'bottom',
    targetHandle: 'top',
  },
  {
    id: '10->8',
    source: '10',
    target: '8',
    sourceHandle: 'right',
    targetHandle: 'left',
  },
];
