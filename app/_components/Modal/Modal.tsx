'use client';
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/twMerge';

interface ModalProps {
  triggerText?: string;
  triggerClassName?: string;
  children: React.ReactNode;
}

export const ModalRoot: React.FC<ModalProps> = ({
  triggerText = 'Open Modal',
  children,
  triggerClassName,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn('btn-primary', triggerClassName)}
        {...rest}
      >
        {triggerText}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="rounded-lg w-full max-w-3xl shadow-lg relative"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
