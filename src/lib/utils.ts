import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { zodResolver } from "@hookform/resolvers/zod"
export { useForm } from "react-hook-form"
export { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// comment

