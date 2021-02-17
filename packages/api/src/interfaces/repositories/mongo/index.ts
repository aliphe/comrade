import { Collection, ObjectID } from 'mongodb';

export type MongoEntity<Entity> = Omit<Entity, 'id'> & { _id: ObjectID};

export type MongoCollection<Entity> = Collection<MongoEntity<Entity>>;
