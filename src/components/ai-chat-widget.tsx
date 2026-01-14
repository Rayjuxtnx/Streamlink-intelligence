
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
  content: string | ServiceAssistantOutput;
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
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
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
                       {message.content.map && (
                         <div className="mt-2 aspect-video w-full rounded-md overflow-hidden">
                           <iframe
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.864391621943!2d36.85848967496561!3d-1.2538189987349138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f143c7b741513%3A0x906841708d675683!2sCPA%20Centre!5e0!3m2!1sen!2ske!4v1720612345678!5m2!1sen!2ske"
                             width="100%"
                             height="100%"
                             style={{ border: 0 }}
                             allowFullScreen={true}
                             loading="lazy"
                             referrerPolicy="no-referrer-when-downgrade"
                           ></iframe>
                         </div>
                       )}
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
