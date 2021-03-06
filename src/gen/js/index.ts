import genOperations from './genOperations';
import genReduxActions from './genReduxActions';
import genTypes from './genTypes';
import { applyFormatOptions } from './support';

export default function genCode(
  spec: ApiSpec,
  operations: ApiOperation[],
  options: ClientOptions
): ApiSpec {
  applyFormatOptions(options);
  genOperations(spec, operations, options);
  genTypes(spec, options);
  if (options.redux) {
    genReduxActions(spec, operations, options);
  }
  return spec;
}
