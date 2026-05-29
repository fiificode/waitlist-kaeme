import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input 
      className={cn(
        "px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all w-full",
        className
      )} 
      {...props} 
    />
  );
}
