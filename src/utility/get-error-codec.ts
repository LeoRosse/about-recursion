import * as t from 'io-ts';
import { pipe } from 'fp-ts/function';
import { fold } from 'fp-ts/Either';

export const getErrorCodec = <A>(v: t.Validation<A>): Array<string> =>
  pipe(
    v,
    fold(
      (errors) =>
        errors.map(
          (error) =>
            `Received value ${error.value} as ${typeof error.value} at ${error.context
              .map(({ key }) => key)
              .join('.')} instead of ${error.context[error.context.length - 1].type.name}`,
        ),
      () => ['no errors'],
    ),
  );
