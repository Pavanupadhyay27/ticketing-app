'use client';

import { useEffect, useState } from 'react';

export const TicketBackground = () => {
  const [tickets, setTickets] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    // Generate random ticket positions
    const generatedTickets = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
      size: 80 + Math.random() * 120,
    }));
    setTickets(generatedTickets);
  }, []);

  return (
    <div className="ticket-bg">
      {tickets.map((ticket) => (
        <svg
          key={ticket.id}
          viewBox="0 0 200 300"
          width={ticket.size}
          height={(ticket.size * 1.5)}
          style={{
            left: `${ticket.x}%`,
            top: `${ticket.y}%`,
            position: 'absolute',
            opacity: ticket.id % 3 === 0 ? 0.04 : ticket.id % 3 === 1 ? 0.035 : 0.045,
            animation: 
              ticket.id % 3 === 0 
                ? `float ${ticket.duration}s ease-in-out infinite`
                : ticket.id % 3 === 1
                ? `float-slow ${ticket.duration + 2}s ease-in-out infinite`
                : `float-slower ${ticket.duration + 4}s ease-in-out infinite`,
            animationDelay: `${ticket.delay}s`,
            pointerEvents: 'none',
          }}
        >
          {/* Ticket outline */}
          <rect
            x="10"
            y="10"
            width="180"
            height="280"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* Ticket number */}
          <text
            x="100"
            y="60"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="currentColor"
          >
            TICKET
          </text>

          {/* Perforation line */}
          <line
            x1="10"
            y1="100"
            x2="190"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5,5"
            opacity="0.5"
          />

          {/* Tear circles (perforations) */}
          {Array.from({ length: 5 }).map((_, i) => (
            <circle
              key={`tear-${i}`}
              cx={20 + i * 37}
              cy="100"
              r="2.5"
              fill="currentColor"
              opacity="0.6"
            />
          ))}

          {/* Event details placeholder */}
          <text
            x="100"
            y="180"
            textAnchor="middle"
            fontSize="14"
            fill="currentColor"
            opacity="0.7"
          >
            BLOCKCHAIN
          </text>
          <text
            x="100"
            y="210"
            textAnchor="middle"
            fontSize="14"
            fill="currentColor"
            opacity="0.7"
          >
            EVENT
          </text>

          {/* Serial number */}
          <text
            x="100"
            y="260"
            textAnchor="middle"
            fontSize="10"
            fill="currentColor"
            opacity="0.5"
          >
            #{ticket.id.toString().padStart(6, '0')}
          </text>
        </svg>
      ))}
    </div>
  );
};
