import WorkoutStepEntity from './step';

export default interface WorkoutEntity {
  id: string;

  isPublic: boolean;

  name: string;

  workoutSteps: WorkoutStepEntity[];
}
