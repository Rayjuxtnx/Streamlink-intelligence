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
import {
  serviceAssistant,
  type ServiceAssistantOutput,
  type Option,
} from '@/ai/flows/service-assistant-flow';
import Link from 'next/link';

type Message = {
  id: string;
  role: 'user' | 'model';
  content: string | { message: string; options?: Option[], link?: string, linkText?: string };
};

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  };
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startTransition(async () => {
        const response = await serviceAssistant({});
        setMessages([
          {
            id: 'initial',
            role: 'model',
            content: response,
          },
        ]);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (option: Option) => {
    const userMessage: Message = {
      id: `user-${messages.length}`,
      role: 'user',
      content: option.display,
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    startTransition(async () => {
      const response = await serviceAssistant({ selection: option.id });
      const assistantMessage: Message = {
        id: `model-${messages.length}`,
        role: 'model',
        content: response,
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
            {messages.map((message, index) => (
              <div
                key={message.id}
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
                   {typeof message.content === 'string' ? (
                     <p className="whitespace-pre-wrap">{message.content}</p>
                   ) : (
                     <div>
                       <p className="whitespace-pre-wrap">{message.content.message}</p>
                       {message.content.link && message.content.linkText && (
                         <Button variant="link" asChild className="p-0 h-auto mt-2">
                           <Link href={message.content.link}>{message.content.linkText}</Link>
                         </Button>
                       )}
                     </div>
                   )}
                </div>
                 {message.role === 'user' && (
                  <div className="flex-shrink-0">
                    <User className="h-8 w-8 p-1.5 rounded-full bg-secondary text-secondary-foreground" />
                  </div>
                )}
              </div>
            ))}
             {isPending && messages.length > 0 && (
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
          <CardFooter className='flex-col items-start gap-2'>
            {!isPending && typeof messages[messages.length -1]?.content !== 'string' && (messages[messages.length-1]?.content as ServiceAssistantOutput)?.options?.map(option => (
              <Button key={option.id} variant="outline" className='w-full justify-start' onClick={() => handleOptionClick(option)}>
                {option.display}
              </Button>
            ))}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
