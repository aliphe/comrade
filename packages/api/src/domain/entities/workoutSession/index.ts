import WorkoutSessionStepEntity from './step';

export default interface WorkoutSessionEntity {
  id: string;

  workoutId: string;

  date: Date;

  workoutSessionSteps: WorkoutSessionStepEntity[];
}
