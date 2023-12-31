import { Schema, model, models } from "mongoose";

export interface IEvent extends Document{
    _id: string;
    title: string;
    description?: string;
    location: string;
    createdAt?: Date;
    imageUrl: string;
    startDateTime?: Date;
    endDate?: Date;
    price?: string;
    isFree?: boolean;
    url?: string;
    category?: {_id: string, name: string};
    organizer?: {_id: string, firstName: string, lastName: string};
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String , required: true},
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String, required: true },
    startDateTime: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    price: { type: String},
    isFree: { type: Boolean, default: false },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: { type: Schema.Types.ObjectId, ref: 'Organizer' },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;