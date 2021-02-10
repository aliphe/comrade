interface User {
  id: string;
  info: UserInfo;
  workouts: Workout[];
  syncedWorkouts: string[];
  exercices: Exercice[];
  workoutSessions: WorkoutSession[];
}

interface UserInfo {
  name: string;
}

interface Workout {
  id: string;
  isPublic: boolean;
  name: string;
  workoutSteps: WorkoutStep[];
}

interface WorkoutStep {
  round: number;
  sets: number;
  reps: number;
  wait: number; // seconds
  exerciceId: string;
  weight?: number;
  variants: Variant[];
}

interface Variant {
  name: string;
  // additional info can be provided
}

interface Exercice {
  id: string;
  name: string;
  muscles: string[];
}

interface Muscle {
  name: string;
}

interface WorkoutSession {
  id: string;
  workoutId: string; // personnal or synced
  date: Date;
  workoutStepSessions: WorkoutStepSession[];
}

interface WorkoutStepSession {
  round: number;
  reps: number[]; // each set is a number
}
