'use client';

import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader,
  ArrowDown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState, useTransition, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { serviceAssistant } from '@/ai/flows/service-assistant-flow';

type Message = {
  role: 'user' | 'model';
  parts: { text: string }[];
};

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      parts: [{ text: input }],
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');

    startTransition(async () => {
      const response = await serviceAssistant({ history: newMessages });
      const assistantMessage: Message = {
        role: 'model',
        parts: [{ text: response }],
      };
      setMessages((prev) => [...prev, assistantMessage]);
    });
  };

  return (
    <>
      <div
        className={cn(
          'fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-[200%]' : 'translate-x-0'
        )}
      >
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-8 h-8" />
          <span className="sr-only">Open AI Chat</span>
        </Button>
      </div>

      <div
        className={cn(
          'fixed bottom-4 right-4 z-50 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]'
        )}
      >
        <Card className="w-[calc(100vw-2rem)] sm:w-96 h-[70vh] flex flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Bot />
              <span>AI Assistant</span>
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent
            ref={scrollAreaRef}
            className="flex-grow overflow-y-auto space-y-4 pr-3"
          >
            <div className="flex gap-3 my-4 text-sm">
              <div className="flex-shrink-0">
                <Bot className="h-8 w-8 p-1.5 rounded-full bg-primary text-primary-foreground" />
              </div>
              <div className="p-3 rounded-lg bg-secondary">
                <p className="whitespace-pre-wrap">Hello! I'm Link, your AI assistant. I can answer questions about our services or help you find our contact information.

How can I help you today?</p>
              </div>
            </div>
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex gap-3 text-sm',
                  message.role === 'user' && 'justify-end'
                )}
              >
                {message.role === 'model' && (
                  <div className="flex-shrink-0">
                    <Bot className="h-8 w-8 p-1.5 rounded-full bg-primary text-primary-foreground" />
                  </div>
                )}
                <div
                  className={cn(
                    'p-3 rounded-lg max-w-[80%]',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.parts[0].text}</p>
                </div>
                {message.role === 'user' && (
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 p-1.5 rounded-full bg-secondary text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
            {isPending && (
              <div className="flex gap-3 my-4 text-sm">
                <div className="flex-shrink-0">
                  <Bot className="h-8 w-8 p-1.5 rounded-full bg-primary text-primary-foreground" />
                </div>
                <div className="p-3 rounded-lg bg-secondary">
                  <Loader className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <form
              onSubmit={handleSubmit}
              className="flex items-center w-full gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our services..."
                disabled={isPending}
              />
              <Button type="submit" size="icon" disabled={isPending}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
