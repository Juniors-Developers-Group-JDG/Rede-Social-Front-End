'use client';
import { useEffect } from 'react';

interface AutosizeTextareaProps {
  setPostText: (text: string) => void;
  value: string;
}

function AutosizeTextarea({ setPostText, value }: AutosizeTextareaProps) {
  useEffect(() => {
    const resize = (textElement: HTMLTextAreaElement) => {
      textElement.style.height = 'auto';
      textElement.style.height = textElement.scrollHeight + 'px';
    };

    const textElements = document.getElementsByClassName('autosize');
    Array.from(textElements).forEach((textElement: Element) => {
      if (textElement instanceof HTMLTextAreaElement) {
        textElement.setAttribute('rows', '1');
        resize(textElement);
        textElement.addEventListener('input', function () {
          resize(this);
          setPostText(this.value);
        });
      }
    });

    return () => {
      Array.from(textElements).forEach((textElement: Element) => {
        if (textElement instanceof HTMLTextAreaElement) {
          textElement.removeEventListener('input', function () {
            resize(this);
          });
        }
      });
    };
  }, [setPostText]);

  return (
    <textarea
      value={value}
      placeholder="Qual a ideia de hoje?"
      className="autosize ml-5 mr-5 mt-4 h-fit flex-grow resize-none whitespace-pre-wrap bg-transparent text-blue-50 placeholder-blue-50"
    />
  );
}

export default AutosizeTextarea;
