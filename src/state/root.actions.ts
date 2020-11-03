import { Action, PayloadAction } from '.';
export const ensureNever = (action: never) => action;

export const createAction = <Type extends string, Meta>(type: Type, meta?: Meta): Action<Type, Meta> =>
  ({ type, meta });

export const createPayloadAction = <Type extends string, Payload, Meta>(
  type: Type,
  payload: Payload,
  meta?: Meta,
): PayloadAction<Type, Payload, Meta> => ({
  ...createAction(type, meta),
  payload,
});

