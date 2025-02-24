import { Schema, model, Document } from 'mongoose';

export interface ICity extends Document {
  cityName: string;
  count: number;
}

const citySchema = new Schema<ICity>(
  {
    cityName: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true },
);

export const City = model<ICity>('City', citySchema);
// export const City = model<ICity>('City', citySchema, 'cit');
