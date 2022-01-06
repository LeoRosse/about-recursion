import * as React from 'react';
import { Type } from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';
import { getErrorCodec } from 'src/utility/get-error-codec';
import { Chart } from 'src/types/chart';
import { ActionsComponent } from './actions-component';

interface ChartsFactoryProps<A, O, I> {
  chart: Chart;
  codec: Type<A, O, I>;
  data: I;
}

interface ChartsValidatorState<A> {
  decodedData: A | undefined;
}

class ChartsValidator<A, O, I> extends React.Component<ChartsFactoryProps<A, O, I>, ChartsValidatorState<A>> {
  constructor(props: ChartsFactoryProps<A, O, I>) {
    super(props);
    this.state = {
      decodedData: undefined,
    };
  }

  componentDidUpdate(prevProps: ChartsFactoryProps<A, O, I>) {
    if (prevProps.data !== this.props.data) {
      const { codec, data } = this.props;
      const decodedData = codec.decode(data);
      if (!isRight(decodedData)) {
        window.console.error(getErrorCodec(decodedData));
        throw Object.assign(new Error(`Couldn't decode data for ${this.props.chart.chartInfo.id}`));
      }
      this.setState({ decodedData: decodedData.right });
    }
  }

  render(): React.ReactNode {
    const { chart } = this.props;
    window.console.log('Rendering Chart Validator');
    // Chart Printer
    return <div id={chart.chartInfo.id}>{chart.chartInfo.id}</div>;
  }
}

class ChartsFactory<A, O, I> extends React.Component<ChartsFactoryProps<A, O, I>> {
  constructor(props: ChartsFactoryProps<A, O, I>) {
    super(props);
  }

  render(): React.ReactNode {
    const { chart, codec, data } = this.props;
    window.console.log('Rendering Chart Factory');
    return (
      <>
        {chart.metadata?.actions?.length && (
          <div className="flex justify-between my-2">
            <div>First Buttons</div>
            <ActionsComponent container={chart} />
          </div>
        )}
        <ChartsValidator chart={chart} codec={codec} data={data} />
      </>
    );
  }
}

export { ChartsFactory };
