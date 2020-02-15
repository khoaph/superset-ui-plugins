import { createEncoderFactory, Encoder } from 'encodable';
import { DeriveEncoding } from 'encodable/lib/types/Encoding';

export type BoxPlotEncodingConfig = {
  x: ['XBand', number];
  y: ['YBand', number];
  color: ['Color', string];
};

// eslint-disable-next-line import/prefer-default-export
export const boxPlotEncoderFactory = createEncoderFactory<BoxPlotEncodingConfig>({
  channelTypes: {
    x: 'XBand',
    y: 'YBand',
    color: 'Color',
  },
  defaultEncoding: {
    x: { field: 'x', type: 'nominal' },
    y: { field: 'y', type: 'quantitative' },
    color: { value: 'black' },
  },
});

export type BoxPlotEncoding = DeriveEncoding<BoxPlotEncodingConfig>;

export type BoxPlotEncoder = Encoder<BoxPlotEncodingConfig>;

// import { Value } from 'vega-lite/build/src/channeldef';
// import { ChannelTypeToDefMap } from '../encodeable/types/Channel';
// import { ExtractChannelOutput } from '../encodeable/types/ChannelDef';
// import createEncoderClass from '../encodeable/createEncoderClass';

// /**
//  * Define channel types
//  */
// const channelTypes = {
//   color: 'Color',
//   x: 'XBand',
//   y: 'YBand',
// } as const;

// export type ChannelTypes = typeof channelTypes;

// /**
//  * TEMPLATE:
//  * Helper for defining encoding
//  */
// type CreateChannelDef<
//   ChannelName extends keyof ChannelTypes,
//   Output extends Value
// > = ChannelTypeToDefMap<Output>[ChannelTypes[ChannelName]];

// /**
//  * Encoding definition
//  */
// export type Encoding = {
//   color: CreateChannelDef<'color', string>;
//   x: CreateChannelDef<'x', number | null>;
//   y: CreateChannelDef<'y', number | null>;
// };

// /**
//  * TEMPLATE:
//  * Can use this to get returned type of a Channel
//  * example usage: ChannelOutput<'x'>
//  */
// export type ChannelOutput<ChannelName extends keyof Encoding> = ExtractChannelOutput<
//   Encoding[ChannelName]
// >;

// export default class Encoder extends createEncoderClass<ChannelTypes, Encoding>({
//   channelTypes,
//   defaultEncoding: {
//     color: { value: '#222' },
//     x: { field: 'x', type: 'nominal' },
//     y: { field: 'y', type: 'quantitative' },
//   },
// }) {}
