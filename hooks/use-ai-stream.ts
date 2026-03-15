import { useState } from 'react';

type Message = { role: 'user' | 'assistant'; content: string };

export function useAIStream() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Simulate API Call to Vercel AI SDK / OpenAI
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "I've analyzed the financial data warehouse. The Q3 projections show a 12% variance from our baseline model. Would you like me to render a comparative chart?" 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return { messages, input, handleInputChange, handleSubmit, isLoading };
}