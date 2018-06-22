
import * as Behaviour from '../../api/behaviour/Behaviour';
import { Element } from '@ephox/sugar';
import { DraggingState } from '../../dragging/common/DraggingTypes';
import { BehaviourConfigSpec, BehaviourConfigDetail } from '../../api/behaviour/Behaviour';

export interface PinchDragData {
  deltaX: () => number;
  deltaY: () => number;
  deltaDistance: () => number;
}

export interface PinchingBehaviour extends Behaviour.AlloyBehaviour<PinchingConfigSpec, PinchingConfig> {
  config: (config: PinchingConfigSpec) => Behaviour.NamedConfiguredBehaviour<PinchingConfigSpec, PinchingConfig>;
}

export interface PinchingConfig extends BehaviourConfigDetail {
  onPinch: () => (element: Element, changeX: number, changeY: number) => void;
  onPunch: () => (element: Element, changeX: number, changeY: number) => void;
}

export interface PinchingConfigSpec extends BehaviourConfigSpec {
  onPinch: (element: Element, changeX: number, changeY: number) => void;
  onPunch: (element: Element, changeX: number, changeY: number) => void;
}

export interface PinchingState extends DraggingState<PinchDragData> { }