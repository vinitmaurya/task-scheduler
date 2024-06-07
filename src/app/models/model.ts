export interface Task{
    title: string;
    description: string;
    isRecurring: boolean;
    isActive: boolean;
    isDisabled: boolean;
    isPaused: boolean;
    totalTime: number;
}