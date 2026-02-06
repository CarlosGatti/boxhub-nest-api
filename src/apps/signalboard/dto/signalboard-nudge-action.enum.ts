import { registerEnumType } from '@nestjs/graphql';

export enum SignalboardNudgeAction {
  REMOVE_SOURCE = 'REMOVE_SOURCE',
  KEEP_SOURCE = 'KEEP_SOURCE',
}

registerEnumType(SignalboardNudgeAction, {
  name: 'SignalboardNudgeAction',
});
