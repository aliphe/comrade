export default interface WorkoutStepEntity {
  id: string;

  round: number;

  sets: number;

  reps: number;

  wait: number;

  exerciceId: string;

  name: string;

  variant: string;

  weight?: number;
}
