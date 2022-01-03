import * as React from 'react';
import { Type } from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';
import { getErrorCodec } from 'src/utility/get-error-codec';

interface ChartsFactoryProps<A, O, I> {
  codec: Type<A, O, I>;
  data: I;
}

interface ChartsFactoryState<A> {
  decodedData: A | undefined;
}

class ChartsFactory<A, O, I> extends React.Component<ChartsFactoryProps<A, O, I>, ChartsFactoryState<A>> {
  constructor(props: ChartsFactoryProps<A, O, I>) {
    super(props);
    this.state = {
      decodedData: undefined,
    };
  }

  componentDidMount() {
    const { codec, data } = this.props;
    const decodedData = codec.decode(data);
    if (!isRight(decodedData)) {
      window.console.error(getErrorCodec(decodedData));
      throw Object.assign(new Error(`Couldn't decode bubble data for stats new`));
    }
    this.setState({ decodedData: decodedData.right });
  }

  render(): React.ReactNode {
    return null;
  }
}

export { ChartsFactory };
